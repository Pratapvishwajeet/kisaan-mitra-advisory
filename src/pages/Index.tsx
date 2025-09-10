import NavigationHeader from "@/components/ui/navigation-header";
import HeroSection from "@/components/ui/hero-section";
import FeaturesGrid from "@/components/ui/features-grid";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <HeroSection />
        <FeaturesGrid />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Empowering Small Farmers with Smart Technology
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            Supporting 86% of Indian farmers with AI-powered solutions that increase 
            yield by 20-30% while reducing input costs and environmental impact.
          </p>
          <div className="text-sm text-primary-foreground/60">
            © 2024 Smart Crop Advisory System | Government of Punjab | Department of Higher Education
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;