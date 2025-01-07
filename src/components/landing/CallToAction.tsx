import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-purple-600" />
      <div className="container px-4 mx-auto text-center relative z-10 scroll-section">
        <Shield className="w-16 h-16 text-white mx-auto mb-8 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Join the Guardian Network
        </h2>
        <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
          Be part of a decentralized global initiative that redefines ethical practices 
          and builds the future of sustainable progress.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="rounded-full w-full sm:w-auto">
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto border-white text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};