import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
// Railway injects PORT; fall back to SERVER_PORT for local dev
const PORT = process.env.PORT || process.env.SERVER_PORT || 3001;

// Only apply CORS in development (same-origin in production)
if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:8080" }));
}
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB max
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed."));
    }
  },
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  family: 4, // force IPv4 — Railway does not support IPv6 outbound
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildEmailHtml(data) {
  const projectTypeLabels = {
    "commercial-contractor": "Commercial Contractor",
    "residential-contractor": "Residential Contractor",
    homeowner: "Homeowner",
    other: "Other",
  };

  const budgetLabels = {
    "under-75k": "Under $75K",
    "75k-150k": "$75K – $150K",
    "150k-250k": "$150K – $250K",
    "250k-500k": "$250K – $500K",
    "500k-1m": "$500K – $1M",
    "over-1m": "$1M+",
    unknown: "Not Sure Yet",
  };

  const timelineLabels = {
    asap: "As Soon As Possible",
    "1-3mo": "1 – 3 Months",
    "3-6mo": "3 – 6 Months",
    "6-12mo": "6 – 12 Months",
    "over-1yr": "Over 1 Year",
    unknown: "Flexible / TBD",
  };

  const row = (label, value) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;font-weight:600;color:#555;white-space:nowrap;width:180px;border-bottom:1px solid #f0f0f0;">${label}</td>
          <td style="padding:10px 16px;color:#222;border-bottom:1px solid #f0f0f0;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#111;padding:32px 40px;">
              <p style="margin:0;font-size:28px;font-weight:700;letter-spacing:3px;color:#ccab76;font-family:Arial,sans-serif;">
                B&amp;C EXTERIORS
              </p>
              <p style="margin:8px 0 0;font-size:13px;color:#888;letter-spacing:1px;text-transform:uppercase;">
                New Quote Request
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px 16px;">
              <p style="margin:0 0 24px;font-size:15px;color:#444;line-height:1.6;">
                A new quote request has been submitted via the website. Details are below.
              </p>

              <!-- Contact Info -->
              <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#ccab76;">
                Contact Information
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0f0f0;border-radius:4px;margin-bottom:28px;">
                ${row("Name", `${data.firstName} ${data.lastName}`)}
                ${row("Email", `<a href="mailto:${data.email}" style="color:#ccab76;">${data.email}</a>`)}
                ${row("Phone", data.phone)}
              </table>

              <!-- Project Details -->
              <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#ccab76;">
                Project Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #f0f0f0;border-radius:4px;margin-bottom:28px;">
                ${row("Location", data.location)}
                ${row("Project Type", projectTypeLabels[data.projectType] ?? data.projectType)}
                ${row("Budget", budgetLabels[data.budget] ?? data.budget)}
                ${row("Timeline", timelineLabels[data.timeline] ?? data.timeline)}
              </table>

              <!-- Description -->
              <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#ccab76;">
                Project Description
              </h2>
              <p style="margin:0 0 32px;font-size:14px;color:#444;line-height:1.7;background:#f9f9f9;padding:16px;border-radius:4px;border-left:3px solid #ccab76;">
                ${data.description.replace(/\n/g, "<br />")}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:20px 40px;border-top:1px solid #ececec;">
              <p style="margin:0;font-size:12px;color:#aaa;text-align:center;">
                This email was sent automatically from the B&amp;C Exteriors website quote form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

app.post("/api/quote", upload.single("housePlans"), async (req, res) => {
  // Form fields arrive as JSON string when sent via FormData
  let data;
  try {
    data = req.body.data ? JSON.parse(req.body.data) : req.body;
  } catch {
    return res.status(400).json({ error: "Invalid form data." });
  }

  const required = ["firstName", "lastName", "email", "location", "projectType", "description"];
  const missing = required.filter((f) => !data[f]?.toString().trim());
  if (missing.length) {
    return res.status(400).json({ error: `Missing required fields: ${missing.join(", ")}` });
  }

  const attachments = [];
  if (req.file) {
    attachments.push({
      filename: req.file.originalname,
      content: req.file.buffer,
      contentType: "application/pdf",
    });
  }

  try {
    await transporter.sendMail({
      from: `"B&C Exteriors Quote Form" <${process.env.SMTP_USER}>`,
      to: "isaacb@bncexteriors.com",
      replyTo: data.email,
      subject: `New Quote Request — ${data.firstName} ${data.lastName}`,
      html: buildEmailHtml(data),
      attachments,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

// Serve the Vite build in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve(__dirname, "../dist");
  app.use(express.static(distPath));
  // Catch-all: return index.html for client-side routes
  app.get("/{*splat}", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
