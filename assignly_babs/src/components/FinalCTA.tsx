import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Route Leads 3x Faster?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
          Join 500+ B2B SaaS companies already using LeadRouter. Start your free 14-day trial today.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="font-semibold gap-2 hover:scale-105 transition-all text-lg px-8"
        >
          Start Free Trial <ArrowRight className="h-5 w-5" />
        </Button>
        <p className="mt-4 text-sm opacity-75">No credit card required • Setup in 5 minutes</p>
      </div>
    </section>
  );
};

export default FinalCTA;
