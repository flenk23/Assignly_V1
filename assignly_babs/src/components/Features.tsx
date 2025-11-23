import { Zap, Target, Users, BarChart3, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Lead Routing",
    description: "Automatically route leads to the right sales rep based on territory, industry, and deal size in under 60 seconds.",
  },
  {
    icon: Target,
    title: "Smart Lead Scoring",
    description: "AI-powered lead qualification scores every lead based on fit and intent, so your reps focus on the best opportunities.",
  },
  {
    icon: Users,
    title: "Round-Robin Assignment",
    description: "Distribute leads fairly across your team with intelligent round-robin logic that accounts for workload and availability.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track lead response times, conversion rates, and rep performance with comprehensive dashboards.",
  },
  {
    icon: Shield,
    title: "CRM Integration",
    description: "Seamlessly integrates with Salesforce, HubSpot, and Pipedrive. No duplicate data entry required.",
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Works around the clock to ensure no lead falls through the cracks, even outside business hours.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Everything You Need to Route Leads Faster
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            LeadRouter automates your entire lead qualification and assignment process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="mb-4">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
