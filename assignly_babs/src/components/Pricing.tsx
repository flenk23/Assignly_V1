import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    features: [
      "Up to 500 leads/month",
      "Basic lead scoring",
      "Round-robin routing",
      "Email support",
      "CRM integration (1 platform)",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "per month",
    features: [
      "Up to 2,000 leads/month",
      "Advanced AI lead scoring",
      "Custom routing rules",
      "Priority support",
      "All CRM integrations",
      "Real-time analytics",
      "API access",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    features: [
      "Unlimited leads",
      "Custom AI models",
      "Dedicated success manager",
      "24/7 phone support",
      "Custom integrations",
      "Advanced security & SSO",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-2 border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-secondary"
                  : "border-border hover:shadow-lg"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured
                    ? "bg-primary hover:bg-primary-dark"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
