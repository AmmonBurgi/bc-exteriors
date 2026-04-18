import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileUp, Send, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type MaterialEntry = { name: string; provider: string };

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  materials: MaterialEntry[];
  description: string;
  budget: string;
  timeline: string;
};

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  projectType: "",
  materials: [],
  description: "",
  budget: "",
  timeline: "",
};

const GetAQuote = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState<FormState>(INITIAL);
  const [housePlansFile, setHousePlansFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (field: Exclude<keyof FormState, "materials">, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const body = new FormData();
      body.append("data", JSON.stringify(form));
      if (housePlansFile) body.append("housePlans", housePlansFile);
      const res = await fetch("/api/quote", { method: "POST", body });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-20 flex items-center px-6 md:px-12">
        <Link
          to="/"
          className="font-display text-3xl tracking-wider text-primary"
        >
          B&C EXTERIORS
        </Link>
      </div>

      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4">
              Get a Quote
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl">
              Tell us about your project and we'll get back to you with a
              detailed estimate within 1–2 business days.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-primary rounded p-10 text-center"
            >
              <h2 className="font-display text-4xl text-primary mb-3">
                Request Received
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Thanks for reaching out! Our team will be in touch shortly.
              </p>
              <Link
                to="/"
                className="font-body text-sm font-semibold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
              >
                Return Home
              </Link>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              {/* Contact info */}
              <fieldset className="space-y-6">
                <legend className="font-display text-2xl text-foreground mb-4">
                  Contact Information
                </legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={form.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={form.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="(801) 555-0100"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Project details */}
              <fieldset className="space-y-6">
                <legend className="font-display text-2xl text-foreground mb-4">
                  Project Details
                </legend>
                <div className="space-y-2">
                  <Label htmlFor="location">Project Location *</Label>
                  <Input
                    id="location"
                    required
                    value={form.location}
                    onChange={(e) => set("location", e.target.value)}
                    placeholder="City, State"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    required
                    value={form.projectType}
                    onValueChange={(v) => set("projectType", v)}
                  >
                    <SelectTrigger id="projectType">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commercial-contractor">Commercial Contractor</SelectItem>
                      <SelectItem value="residential-contractor">Residential Contractor</SelectItem>
                      <SelectItem value="homeowner">Homeowner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </fieldset>

              {/* House plans upload */}
              <fieldset className="space-y-4">
                <legend className="font-display text-2xl text-foreground mb-2">
                  House Plans
                </legend>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Upload your house plans as a PDF so we can provide the most accurate estimate.
                </p>

                <label
                  htmlFor="housePlans"
                  className={`flex flex-col items-center justify-center gap-3 w-full border-2 border-dashed rounded-lg p-10 cursor-pointer transition-colors ${
                    housePlansFile
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/60"
                  }`}
                >
                  <FileUp
                    size={28}
                    className={housePlansFile ? "text-primary" : "text-muted-foreground"}
                  />
                  {housePlansFile ? (
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-body text-sm font-semibold text-foreground">
                        {housePlansFile.name}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">
                        {(housePlansFile.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-body text-sm font-semibold text-foreground">
                        Click to upload a PDF
                      </span>
                      <span className="font-body text-xs text-muted-foreground">
                        PDF only · Max 20 MB
                      </span>
                    </div>
                  )}
                  <input
                    id="housePlans"
                    type="file"
                    accept=".pdf,application/pdf"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      if (file && file.type !== "application/pdf") {
                        setError("Only PDF files are accepted.");
                        e.target.value = "";
                        return;
                      }
                      setHousePlansFile(file);
                      setError(null);
                    }}
                  />
                </label>

                {housePlansFile && (
                  <button
                    type="button"
                    onClick={() => setHousePlansFile(null)}
                    className="flex items-center gap-1.5 font-body text-xs text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={13} />
                    Remove file
                  </button>
                )}
              </fieldset>

              {/* Additional info */}
              <fieldset className="space-y-6">
                <legend className="font-display text-2xl text-foreground mb-4">
                  Additional Information
                </legend>
                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    required
                    rows={5}
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Briefly describe the scope of your project, any specific requirements, or questions you have..."
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select
                      value={form.budget}
                      onValueChange={(v) => set("budget", v)}
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-75k">Under $75K</SelectItem>
                        <SelectItem value="75k-150k">$75K – $150K</SelectItem>
                        <SelectItem value="150k-250k">$150K – $250K</SelectItem>
                        <SelectItem value="250k-500k">$250K – $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K – $1M</SelectItem>
                        <SelectItem value="over-1m">$1M+</SelectItem>
                        <SelectItem value="unknown">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired Start Date</Label>
                    <Select
                      value={form.timeline}
                      onValueChange={(v) => set("timeline", v)}
                    >
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select a timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As Soon As Possible</SelectItem>
                        <SelectItem value="1-3mo">1 – 3 Months</SelectItem>
                        <SelectItem value="3-6mo">3 – 6 Months</SelectItem>
                        <SelectItem value="6-12mo">6 – 12 Months</SelectItem>
                        <SelectItem value="over-1yr">Over 1 Year</SelectItem>
                        <SelectItem value="unknown">Flexible / TBD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </fieldset>

              {error && (
                <p className="font-body text-sm text-destructive border border-destructive/40 rounded px-4 py-3">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full sm:w-auto font-display text-lg tracking-widest uppercase gap-2 disabled:opacity-60"
              >
                <Send size={18} />
                {loading ? "Sending…" : "Submit Request"}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
