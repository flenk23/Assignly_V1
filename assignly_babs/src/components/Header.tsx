import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary to-primary-dark shadow-md">
      <div className="container mx-auto px-4 py-5">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-foreground tracking-tight">
            LeadRouter
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Benefits
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Pricing
              </button>
            </li>
          </ul>

          <Button
            variant="secondary"
            className="font-semibold hover:scale-105 transition-transform"
            onClick={() => scrollToSection("cta")}
          >
            Start Free Trial
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
