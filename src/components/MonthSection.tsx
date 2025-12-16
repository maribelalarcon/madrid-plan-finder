import { ReactNode } from "react";
import PlanCard from "./PlanCard";

interface Plan {
  title: string;
  description: string;
  image: string;
  location: string;
  date?: string;
  tags: string[];
}

interface MonthSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  plans: Plan[];
  gradientClass: string;
}

const MonthSection = ({ id, title, subtitle, icon, plans, gradientClass }: MonthSectionProps) => {
  return (
    <section id={id} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className={`absolute top-0 left-0 w-full h-1 ${gradientClass}`} />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 rounded-xl ${gradientClass} flex items-center justify-center text-white`}>
                {icon}
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Los mejores planes seleccionados para ti. Porque Madrid nunca duerme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PlanCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthSection;
