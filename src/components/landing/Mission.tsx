import { HandShake, Globe } from "lucide-react";

export const Mission = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center scroll-section">
          <div className="flex justify-center mb-8">
            <HandShake className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Guardian IO is the first-ever platform designed to leverage decentralized intelligence, 
            multi-sensory interfaces, and community-driven insights to achieve ethical and sustainable change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-card p-8 rounded-lg relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg -z-10" />
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Decentralized Knowledge</h3>
              <p className="text-muted-foreground">
                Connect localized hubs of information to foster a global flow of ethical practices.
                Our mesh-based architecture ensures each participant maintains sovereignty while
                contributing to the collective effort.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg -z-10" />
              <HandShake className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">AI-Guided Collaboration</h3>
              <p className="text-muted-foreground">
                Intelligent, ethical agents provide actionable recommendations for strategic impact.
                Our AI models are built with diversity and fairness at their core, ensuring balanced
                and inclusive outputs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};