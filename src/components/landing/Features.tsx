import { Card } from "@/components/ui/card";
import { Shield, Globe, Heart } from "lucide-react";

const features = [
  {
    title: "Wildlife Protection Hub",
    description: "AI-powered species tracking and community guardianship for biodiversity conservation.",
    icon: Shield,
  },
  {
    title: "Modern Slavery Sentinel",
    description: "Supply chain risk visualization and secure worker voice channels.",
    icon: Heart,
  },
  {
    title: "Ethical Commerce Engine",
    description: "Verified sustainable marketplace with transparent impact scoring.",
    icon: Globe,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="glass-card p-6 scroll-section">
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};