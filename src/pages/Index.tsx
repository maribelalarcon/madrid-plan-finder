import { Snowflake, Sparkles, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MonthSection from "@/components/MonthSection";
import Footer from "@/components/Footer";

const planesdiciembre = [
  {
    title: "Mercado de Navidad Plaza Mayor",
    description: "El mercadillo navideño más emblemático de Madrid con más de 100 casetas llenas de magia.",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=800&auto=format&fit=crop",
    location: "Plaza Mayor",
    date: "1-31 Dic",
    tags: ["Gratis", "Familia", "Navidad"],
  },
  {
    title: "Luces de Navidad en Gran Vía",
    description: "Paseo nocturno por las espectaculares iluminaciones navideñas de la Gran Vía.",
    image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=800&auto=format&fit=crop",
    location: "Gran Vía",
    date: "Todo Diciembre",
    tags: ["Gratis", "Romántico", "Fotos"],
  },
  {
    title: "Cortylandia",
    description: "El mítico espectáculo navideño de El Corte Inglés que lleva décadas emocionando a Madrid.",
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&auto=format&fit=crop",
    location: "Preciados",
    date: "Dic",
    tags: ["Tradición", "Familia", "Gratis"],
  },
  {
    title: "Pista de Hielo Matadero",
    description: "Patinaje sobre hielo en uno de los espacios culturales más cool de Madrid.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fit=crop",
    location: "Matadero Madrid",
    date: "Dic-Ene",
    tags: ["Deporte", "Diversión", "€€"],
  },
  {
    title: "Belén del Palacio Real",
    description: "Uno de los belenes más impresionantes de España con figuras del siglo XVIII.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
    location: "Palacio Real",
    date: "Dic",
    tags: ["Cultura", "Tradición", "€"],
  },
  {
    title: "Christmas Garden Madrid",
    description: "Recorrido mágico de luces y decoraciones en el Real Jardín Botánico.",
    image: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800&auto=format&fit=crop",
    location: "Jardín Botánico",
    date: "Dic-Ene",
    tags: ["Naturaleza", "Luces", "€€"],
  },
];

const planesenero = [
  {
    title: "Cabalgata de Reyes",
    description: "La tradicional cabalgata de los Reyes Magos recorriendo el centro de Madrid.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&auto=format&fit=crop",
    location: "Centro Madrid",
    date: "5 Enero",
    tags: ["Tradición", "Familia", "Gratis"],
  },
  {
    title: "Rebajas en Salamanca",
    description: "El mejor momento para ir de compras en el barrio más exclusivo de Madrid.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop",
    location: "Barrio Salamanca",
    date: "Todo Enero",
    tags: ["Shopping", "Moda", "Ofertas"],
  },
  {
    title: "Roscón de Reyes Gigante",
    description: "Degustación del roscón más grande de Madrid en la Puerta del Sol.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop",
    location: "Puerta del Sol",
    date: "6 Enero",
    tags: ["Gastronomía", "Tradición", "Gratis"],
  },
  {
    title: "Exposición en el Prado",
    description: "Aprovecha enero para visitar las colecciones sin las aglomeraciones de turistas.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop",
    location: "Museo del Prado",
    date: "Todo Enero",
    tags: ["Cultura", "Arte", "€€"],
  },
  {
    title: "San Antón",
    description: "Bendición de mascotas en una de las fiestas más curiosas de Madrid.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop",
    location: "Iglesia San Antón",
    date: "17 Enero",
    tags: ["Mascotas", "Tradición", "Gratis"],
  },
  {
    title: "Chocolate con Churros",
    description: "Combate el frío con el desayuno más madrileño en San Ginés.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop",
    location: "San Ginés",
    date: "Siempre",
    tags: ["Gastronomía", "Clásico", "€"],
  },
];

const planessiempre = [
  {
    title: "Retiro y Palacio de Cristal",
    description: "El pulmón verde de Madrid con su icónico Palacio de Cristal. Perfecto cualquier día.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&auto=format&fit=crop",
    location: "Parque del Retiro",
    tags: ["Naturaleza", "Gratis", "Romántico"],
  },
  {
    title: "Tapas por La Latina",
    description: "El ritual madrileño por excelencia: ir de cañas y tapas por el barrio más castizo.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&auto=format&fit=crop",
    location: "La Latina",
    tags: ["Gastronomía", "€€", "Amigos"],
  },
  {
    title: "Templo de Debod al atardecer",
    description: "El mejor atardecer de Madrid con vistas al Palacio Real desde un templo egipcio.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    location: "Templo de Debod",
    tags: ["Gratis", "Fotos", "Romántico"],
  },
  {
    title: "Mercado de San Miguel",
    description: "Gastronomía de alta calidad en un mercado centenario lleno de sabor.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    location: "Plaza Mayor",
    tags: ["Gastronomía", "€€€", "Foodie"],
  },
  {
    title: "Rastro dominical",
    description: "El mercadillo al aire libre más famoso de España. Antigüedades, vintage y mucho más.",
    image: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=800&auto=format&fit=crop",
    location: "La Latina",
    tags: ["Compras", "€", "Domingos"],
  },
  {
    title: "Rooftops con vistas",
    description: "Toma algo en las terrazas más espectaculares con vistas 360º de Madrid.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop",
    location: "Centro",
    tags: ["Copas", "€€€", "Vistas"],
  },
  {
    title: "Sierra de Guadarrama",
    description: "Escapada perfecta a menos de 1 hora. Rutas, nieve en invierno, frescor en verano.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    location: "Sierra de Madrid",
    tags: ["Naturaleza", "Aventura", "Gratis"],
  },
  {
    title: "Musical en Gran Vía",
    description: "El Broadway madrileño te espera con los mejores espectáculos del momento.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&auto=format&fit=crop",
    location: "Gran Vía",
    tags: ["Cultura", "€€€", "Noche"],
  },
  {
    title: "Chinchón",
    description: "Pueblo con encanto a 45 min. Plaza medieval, anís y calçots en temporada.",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&auto=format&fit=crop",
    location: "45 min de Madrid",
    tags: ["Escapada", "Pueblo", "Gastronomía"],
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <MonthSection
        id="diciembre"
        title="Diciembre"
        subtitle="Planes navideños"
        icon={<Snowflake className="w-6 h-6" />}
        plans={planesdiciembre}
        gradientClass="section-winter"
      />
      
      <MonthSection
        id="enero"
        title="Enero"
        subtitle="Nuevo año, nuevos planes"
        icon={<Sparkles className="w-6 h-6" />}
        plans={planesenero}
        gradientClass="section-january"
      />
      
      <MonthSection
        id="siempre"
        title="Todo el año"
        subtitle="Clásicos imprescindibles"
        icon={<Sun className="w-6 h-6" />}
        plans={planessiempre}
        gradientClass="section-anytime"
      />
      
      <Footer />
    </main>
  );
};

export default Index;
