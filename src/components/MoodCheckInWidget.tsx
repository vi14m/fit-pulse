
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Smile, 
  Meh, 
  Frown, 
  Battery, 
  BatteryMedium, 
  BatteryFull, 
  Zap,       // Added more expressive icons
  TrendingUp, 
  Sun 
} from 'lucide-react';

type MoodType = 'happy' | 'neutral' | 'sad' | null;
type EnergyType = 'low' | 'medium' | 'high' | null;

interface MoodCheckInWidgetProps {
  onSubmit?: (mood: MoodType, energy: EnergyType) => void;
  className?: string;
}

const MoodCheckInWidget = ({ onSubmit, className }: MoodCheckInWidgetProps) => {
  const [selectedMood, setSelectedMood] = useState<MoodType>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyType>(null);

  const handleSubmit = () => {
    if (selectedMood && selectedEnergy && onSubmit) {
      onSubmit(selectedMood, selectedEnergy);
      setSelectedMood(null);
      setSelectedEnergy(null);
    }
  };

  const MoodButton = ({ mood, icon: Icon, label, selectedColor }: { 
    mood: MoodType; 
    icon: React.ElementType; 
    label: string; 
    selectedColor: string 
  }) => (
    <button
      type="button"
      onClick={() => setSelectedMood(mood)}
      className={cn(
        "flex flex-col items-center justify-center w-24 h-24 gap-2 rounded-2xl transition-all duration-300 hover:scale-105 group",
        selectedMood === mood 
          ? `${selectedColor} shadow-lg scale-110` 
          : "bg-secondary/30 hover:bg-secondary/50"
      )}
      aria-label={`Select mood: ${label}`}
    >
      <Icon 
        className={cn(
          "w-10 h-10 transition-all duration-300",
          selectedMood === mood 
            ? "text-white scale-110" 
            : "text-muted-foreground group-hover:text-foreground"
        )} 
      />
      <span className={cn(
        "text-sm font-medium transition-colors",
        selectedMood === mood ? "text-white" : "text-foreground"
      )}>
        {label}
      </span>
    </button>
  );

  const EnergyButton = ({ level, icon: Icon, label, selectedColor }: { 
    level: EnergyType; 
    icon: React.ElementType; 
    label: string; 
    selectedColor: string 
  }) => (
    <button
      type="button"
      onClick={() => setSelectedEnergy(level)}
      className={cn(
        "flex flex-col items-center justify-center w-24 h-24 gap-2 rounded-2xl transition-all duration-300 hover:scale-105 group",
        selectedEnergy === level 
          ? `${selectedColor} shadow-lg scale-110` 
          : "bg-secondary/30 hover:bg-secondary/50"
      )}
      aria-label={`Select energy level: ${label}`}
    >
      <Icon 
        className={cn(
          "w-10 h-10 transition-all duration-300",
          selectedEnergy === level 
            ? "text-white scale-110" 
            : "text-muted-foreground group-hover:text-foreground"
        )} 
      />
      <span className={cn(
        "text-sm font-medium transition-colors",
        selectedEnergy === level ? "text-white" : "text-foreground"
      )}>
        {label}
      </span>
    </button>
  );

  return (
    <div className={cn("fitness-card", className)}>
      <h3 className="text-xl font-bold mb-6 text-center">How are you feeling?</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-4 text-center">Your Mood</p>
          <div className="flex justify-between gap-4 px-4">
            <MoodButton 
              mood="happy" 
              icon={Smile} 
              label="Great" 
              selectedColor="bg-fitPulse-green" 
            />
            <MoodButton 
              mood="neutral" 
              icon={Meh} 
              label="Okay" 
              selectedColor="bg-fitPulse-blue" 
            />
            <MoodButton 
              mood="sad" 
              icon={Frown} 
              label="Down" 
              selectedColor="bg-fitPulse-orange" 
            />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-4 text-center">Energy Level</p>
          <div className="flex justify-between gap-4 px-4">
            <EnergyButton 
              level="low" 
              icon={Zap} 
              label="Low" 
              selectedColor="bg-energy-low" 
            />
            <EnergyButton 
              level="medium" 
              icon={TrendingUp} 
              label="Medium" 
              selectedColor="bg-energy-medium" 
            />
            <EnergyButton 
              level="high" 
              icon={Sun} 
              label="High" 
              selectedColor="bg-energy-high" 
            />
          </div>
        </div>
        
        <Button
          onClick={handleSubmit}
          className="w-full mt-4"
          disabled={!selectedMood || !selectedEnergy}
        >
          Log Check-In
        </Button>
      </div>
    </div>
  );
};

export default MoodCheckInWidget;

