import { Sparkles, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-2xl font-bold">
                Planazos<span className="text-primary">MAD</span>
              </span>
              <p className="text-sm text-secondary-foreground/70">Tu guía de ocio en Madrid</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="p-3 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
          <p>© 2025 Maribel Alarcon. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
