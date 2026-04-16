const Footer = () => (
  <footer className="bg-background border-t border-border px-6 md:px-12 lg:px-24 py-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <span className="font-display text-3xl text-primary">B&C EXTERIORS</span>
          <p className="font-body text-sm text-muted-foreground mt-4 leading-relaxed">
            Professional exterior construction services. Quality craftsmanship you can trust.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
          {["About", "Projects", "Services"].map((l) => (
            <a key={l} href="#" className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
              {l}
            </a>
          ))}
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Offices</h4>
          {["Salt Lake City, UT", "Minneapolis, MN", "Phoenix, AZ", "Boise, ID"].map((o) => (
            <p key={o} className="font-body text-sm text-muted-foreground mb-2">{o}</p>
          ))}
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
          <p className="font-body text-sm text-muted-foreground mb-2">801.415.6000</p>
          <p className="font-body text-sm text-muted-foreground">info@big-d.com</p>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-muted-foreground">© 2026 B&C Exteriors. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use"].map((t) => (
            <a key={t} href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">{t}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
