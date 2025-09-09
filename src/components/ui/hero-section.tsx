import { Button } from "./button";
import { MessageCircle, Camera, CloudRain, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agricultural.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Smart Farming for
            <span className="block text-harvest"> Better Harvests</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            AI-powered crop advisory, weather alerts, and pest detection 
            to help small farmers increase yield and reduce costs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chat Advisory
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Camera className="w-5 h-5 mr-2" />
              Pest Detection
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 text-harvest" />
              <div className="text-sm font-medium">AI Advisory</div>
            </div>
            <div className="p-4">
              <CloudRain className="w-8 h-8 mx-auto mb-2 text-sky" />
              <div className="text-sm font-medium">Weather Alerts</div>
            </div>
            <div className="p-4">
              <Camera className="w-8 h-8 mx-auto mb-2 text-white" />
              <div className="text-sm font-medium">Pest Detection</div>
            </div>
            <div className="p-4">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-harvest" />
              <div className="text-sm font-medium">Market Prices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;