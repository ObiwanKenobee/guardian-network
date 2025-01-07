import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center scroll-section">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
          Join the Guardian Network
        </h2>
        <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto text-balance">
          Be part of a decentralized global initiative that redefines ethical practices 
          and builds the future of sustainable progress.
        </p>
        <Button size="lg" variant="secondary" className="rounded-full">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};