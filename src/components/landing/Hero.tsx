import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background/50 -z-10" />
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-balance">
          Guardian IO: The Next-Generation Ethical Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms] text-balance">
          Empowering global collaboration to combat wildlife crime, end modern slavery, and build ethical supply chains.
        </p>
        <div className="flex gap-4 justify-center animate-fade-up [animation-delay:400ms]">
          <Button size="lg" className="rounded-full">
            Join the Movement
          </Button>
          <Button size="lg" variant="outline" className="rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};