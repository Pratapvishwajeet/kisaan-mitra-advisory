import { ReactNode } from "react";
import { Card } from "./card";
import { Button } from "./button";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: "earth" | "harvest" | "sky" | "default";
  action?: () => void;
  actionText?: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  bgColor, 
  action, 
  actionText = "Open" 
}: FeatureCardProps) => {
  const cardStyles = {
    earth: "bg-gradient-to-br from-earth/10 to-earth/5 border-earth/20 hover:shadow-card",
    harvest: "bg-gradient-to-br from-harvest/10 to-harvest/5 border-harvest/20 hover:shadow-card",
    sky: "bg-gradient-to-br from-sky/10 to-sky/5 border-sky/20 hover:shadow-card",
    default: "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-card",
  };

  const iconStyles = {
    earth: "bg-earth text-earth-foreground",
    harvest: "bg-harvest text-harvest-foreground", 
    sky: "bg-sky text-sky-foreground",
    default: "bg-primary text-primary-foreground",
  };

  return (
    <Card className={`p-6 transition-all duration-300 cursor-pointer ${cardStyles[bgColor]}`}>
      <div className="flex flex-col items-center text-center gap-4">
        <div className={`p-4 rounded-full ${iconStyles[bgColor]} shadow-gentle`}>
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        {action && (
          <Button 
            variant={bgColor} 
            size="sm" 
            onClick={action}
            className="mt-2"
          >
            {actionText}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default FeatureCard;