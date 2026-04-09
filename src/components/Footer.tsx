const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading text-sm font-bold tracking-tight">
          <span className="gradient-text">Roopak</span>{" "}
          <span className="text-foreground">Technologies</span>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="mailto:raghavb1979@gmail.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            raghavb1979@gmail.com
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Roopak Technologies. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          {["Products", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
