import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
          Instant Lead Qualification & Assignment for B2B SaaS
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
          Route incoming leads to the right sales rep in under 60 seconds. No manual sorting, no delays.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold gap-2 hover:scale-105 transition-all"
          >
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
          >
            <Play className="h-4 w-4" /> Watch Demo
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">60s</div>
            <div className="text-sm opacity-90">Average Lead Routing Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">94%</div>
            <div className="text-sm opacity-90">Qualification Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">3x</div>
            <div className="text-sm opacity-90">Faster Response Times</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
