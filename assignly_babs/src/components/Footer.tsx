const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="text-xl font-bold mb-4">LeadRouter</div>
        <p className="text-sm opacity-75 mb-6">
          Instant Lead Qualification & Assignment for B2B SaaS
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
            Privacy Policy
          </a>
          <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
            Terms of Service
          </a>
          <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
            Contact Us
          </a>
        </div>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} LeadRouter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
