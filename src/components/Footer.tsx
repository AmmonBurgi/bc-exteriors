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
          {["About", "Contact", "Services", "Materials"].map((l) => (
            <a key={l} href={l === "Contact" ? "/quote" : `/#${l.toLowerCase()}`} className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
              {l}
            </a>
          ))}
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Offices</h4>
          {["Vineyard, UT"].map((o) => (
            <p key={o} className="font-body text-sm text-muted-foreground mb-2">{o}</p>
          ))}
        </div>
        <div>
          <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
          <p className="font-body text-sm text-muted-foreground mb-2">385.335.2598</p>
          <p className="font-body text-sm text-muted-foreground">isaacb@bncexteriors.com</p>
          <a href="/quote" className="inline-block mt-4 font-body text-sm font-semibold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity">
            Get a Quote
          </a>
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
