import { Wheat, Menu } from "lucide-react";

const NavigationHeader = () => {
  return (
    <header className="bg-card border-b border-border shadow-gentle">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Wheat className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Smart Crop Advisory
              </h1>
              <p className="text-sm text-muted-foreground">
                AI-Powered Farming Solutions
              </p>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4">
            <Menu className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;