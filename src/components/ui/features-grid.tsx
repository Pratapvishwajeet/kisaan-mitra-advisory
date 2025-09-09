import FeatureCard from "./feature-card";
import { 
  MessageCircle, 
  Camera, 
  CloudRain, 
  TrendingUp, 
  Leaf, 
  Calculator,
  Users,
  Globe
} from "lucide-react";

const FeaturesGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Farming Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From AI-powered crop advisory to real-time weather alerts, 
            everything you need for successful farming in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8" />}
            title="AI Crop Advisory"
            description="Get personalized recommendations for your crops based on soil and weather conditions"
            bgColor="default"
            actionText="Start Chat"
          />
          
          <FeatureCard
            icon={<Camera className="w-8 h-8" />}
            title="Pest Detection"
            description="Upload crop photos for instant pest and disease identification with treatment advice"
            bgColor="earth"
            actionText="Scan Now"
          />
          
          <FeatureCard
            icon={<CloudRain className="w-8 h-8" />}
            title="Weather Alerts"
            description="Real-time weather forecasts and alerts to protect your crops from adverse conditions"
            bgColor="sky"
            actionText="View Weather"
          />
          
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Market Prices"
            description="Track real-time crop prices and find the best markets to sell your produce"
            bgColor="harvest"
            actionText="Check Prices"
          />
          
          <FeatureCard
            icon={<Leaf className="w-8 h-8" />}
            title="Soil Health"
            description="Monitor soil conditions and get recommendations for optimal fertilizer use"
            bgColor="earth"
            actionText="Test Soil"
          />
          
          <FeatureCard
            icon={<Calculator className="w-8 h-8" />}
            title="Cost Calculator"
            description="Calculate input costs and expected returns for better financial planning"
            bgColor="harvest"
            actionText="Calculate"
          />
          
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Farmer Community"
            description="Connect with fellow farmers to share experiences and learn best practices"
            bgColor="default"
            actionText="Join Community"
          />
          
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title="Multi-Language"
            description="Access all features in your preferred local language with voice support"
            bgColor="sky"
            actionText="Select Language"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;