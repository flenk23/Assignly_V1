import { Check } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Sales reps waste hours manually sorting through leads",
    "High-value leads get lost in the queue",
    "Slow response times kill conversion rates",
    "Uneven lead distribution across your team",
  ];

  const solutions = [
    "Automated lead qualification in under 60 seconds",
    "Priority routing for high-value opportunities",
    "Instant notifications to the right rep",
    "Fair, intelligent lead distribution",
  ];

  return (
    <section id="benefits" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              The Problem
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Without automated lead routing, your sales team is drowning in manual work:
            </p>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive font-bold text-xl">✗</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              The Solution
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              LeadRouter eliminates the chaos with intelligent automation:
            </p>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
