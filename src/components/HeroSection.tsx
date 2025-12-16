import { ChevronDown, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary rounded-full animate-bounce" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Madrid y alrededores</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Descubre los mejores
          <br />
          <span className="text-gradient-hero">planazos</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Tu guía definitiva para no aburrirte nunca en la capital. 
          Planes para cada mes, cada mood y cada presupuesto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#diciembre"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Explorar planes
          </a>
          <a
            href="#siempre"
            className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Todo el año
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#diciembre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
