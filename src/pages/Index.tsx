import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Sparkles, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MonthSection from "@/components/MonthSection";
import Footer from "@/components/Footer";
import {
  fetchMonthPlansFromMadridSecreto,
  getMonthInfoWithOffset,
  type Plan,
} from "@/lib/monthPlans";

const fallbackPlanesMesActual: Plan[] = [
  {
    title: "Ellas Crean 2026",
    description: "Festival multidisciplinar con musica, cine, danza y artes visuales protagonizadas por talento femenino.",
    image: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/03/17083649/Ellas-crean-1024x576.jpg",
    location: "Varios espacios de Madrid",
    date: "Marzo 2026",
    tags: ["Cultura", "Festival", "Mujeres"],
  },
  {
    title: "Teatralia",
    description: "Una de las citas escenicas mas importantes para infancia y juventud, con funciones de companias nacionales e internacionales.",
    image: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2023/03/16111554/teatralia-1024x1024.jpg",
    location: "Teatros de la Comunidad de Madrid",
    date: "7-30 marzo 2026",
    tags: ["Teatro", "Familia", "Escena"],
  },
  {
    title: "DroneArt Show",
    description: "Espectaculo nocturno de drones con musica clasica en directo y una puesta en escena audiovisual inmersiva.",
    image: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2025/07/18123244/DroneArt-Show-Madrid-1024x576.jpg",
    location: "Hipodromo de la Zarzuela",
    date: "27-28 marzo 2026",
    tags: ["Tecnologia", "Concierto", "Noche"],
  },
  {
    title: "Feria del Comic de Madrid",
    description: "Autores invitados, firmas, editoriales y actividades para descubrir las ultimas novedades del comic.",
    image: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2025/03/27122714/La-segunda-edicion-de-la-Feria-del-comic-llega-a-Matadero-Madrid-1024x683.jpg",
    location: "Matadero Madrid",
    date: "27-30 marzo 2026",
    tags: ["Comic", "Feria", "Cultura"],
  },
  {
    title: "Formula E en Madrid",
    description: "Campeonato de monoplazas electricos con un fin de semana completo de velocidad y motor.",
    image: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2026/01/21113258/formula-e-madrid.jpg",
    location: "Jarama",
    date: "21 marzo 2026",
    tags: ["Motor", "Deporte", "Evento"],
  },
  {
    title: "Candlelight: Mozart, Bach y contemporaneos",
    description: "Conciertos a la luz de las velas con repertorio clasico y piezas contemporaneas en espacios singulares.",
    image: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2024/06/21111614/Candlelight-Concierto-1024x683.jpg",
    location: "Ateneo de Madrid",
    date: "29 marzo 2026",
    tags: ["Musica", "Concierto", "Experiencia"],
  },
];

const fallbackPlanesMesSiguiente: Plan[] = [
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
  const { monthName, monthSlug } = useMemo(() => getMonthInfoWithOffset(0), []);
  const { monthName: nextMonthName, monthSlug: nextMonthSlug } = useMemo(() => getMonthInfoWithOffset(1), []);
  const [plansMesActual, setPlansMesActual] = useState<Plan[]>(fallbackPlanesMesActual);
  const [plansMesSiguiente, setPlansMesSiguiente] = useState<Plan[]>(fallbackPlanesMesSiguiente);

  useEffect(() => {
    let cancelled = false;

    const loadPlans = async () => {
      const [currentResult, nextResult] = await Promise.allSettled([
        fetchMonthPlansFromMadridSecreto(monthSlug),
        fetchMonthPlansFromMadridSecreto(nextMonthSlug),
      ]);

      if (
        !cancelled &&
        currentResult.status === "fulfilled" &&
        currentResult.value.length > 0
      ) {
        setPlansMesActual(currentResult.value);
      }

      if (
        !cancelled &&
        nextResult.status === "fulfilled" &&
        nextResult.value.length > 0
      ) {
        setPlansMesSiguiente(nextResult.value);
      }
    };

    loadPlans();
    return () => {
      cancelled = true;
    };
  }, [monthSlug, nextMonthSlug]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <MonthSection
        id={monthSlug}
        title={monthName}
        subtitle={`Planes de ${monthName.toLowerCase()} en Madrid`}
        icon={<CalendarDays className="w-6 h-6" />}
        plans={plansMesActual}
        gradientClass="section-winter"
      />
      
      <MonthSection
        id={nextMonthSlug}
        title={nextMonthName}
        subtitle={`Lo que viene en ${nextMonthName.toLowerCase()}`}
        icon={<Sparkles className="w-6 h-6" />}
        plans={plansMesSiguiente}
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
