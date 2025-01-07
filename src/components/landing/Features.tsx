import { Card } from "@/components/ui/card";
import { Shield, Globe, Heart, Leaf, Network, ChartBar } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Wildlife Protection Hub",
    description: "AI-powered species tracking and community guardianship for biodiversity conservation.",
    icon: Shield,
    details: "Real-time detection of trafficking routes using satellite imagery and IoT sensors in conservation hotspots.",
  },
  {
    title: "Modern Slavery Sentinel",
    description: "Supply chain risk visualization and secure worker voice channels.",
    icon: Heart,
    details: "Direct, encrypted communication for workers to report exploitation, ensuring anonymity and protection.",
  },
  {
    title: "Ethical Commerce Engine",
    description: "Verified sustainable marketplace with transparent impact scoring.",
    icon: Globe,
    details: "Showcase ethically sourced products with verified supply chains and sustainability scoring.",
  },
  {
    title: "Decentralized Knowledge",
    description: "Connect localized hubs of information for global ethical practices.",
    icon: Network,
    details: "Each participant is a node with sovereignty over their data but contributes transparently to the collective effort.",
  },
  {
    title: "Ecosystem Monitoring",
    description: "Advanced environmental tracking and protection systems.",
    icon: Leaf,
    details: "Bio-blockchain technology tracks biological assets in real-time with tamper-proof records.",
  },
  {
    title: "Impact Analytics",
    description: "Comprehensive data visualization and insights platform.",
    icon: ChartBar,
    details: "Interactive dashboards providing actionable insights for compliance and impact measurement.",
  },
];

export const Features = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`glass-card p-6 scroll-section transition-all duration-300 hover:scale-105 cursor-pointer ${
                activeCard === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeCard === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-sm text-primary/80 pt-4 border-t">
                  {feature.details}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};