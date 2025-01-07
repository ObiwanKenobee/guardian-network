import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(155, 135, 245, 0.1)";
        ctx.fill();
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ filter: "blur(4px)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 -z-10" />
      <div className="container px-4 mx-auto text-center">
        <div className="flex justify-center mb-8 animate-fade-up">
          <Shield className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Guardian IO: The Next-Generation Ethical Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
          Empowering global collaboration to combat wildlife crime, end modern slavery, and build ethical supply chains.
        </p>
        <div className="flex gap-4 justify-center animate-fade-up [animation-delay:400ms]">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
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