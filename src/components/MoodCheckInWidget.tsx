
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Smile, Meh, Frown, Battery, BatteryMedium, BatteryFull } from 'lucide-react';

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

  const MoodButton = ({ mood, icon: Icon, label }: { mood: MoodType; icon: React.ElementType; label: string }) => (
    <button
      type="button"
      onClick={() => setSelectedMood(mood)}
      className={cn(
        "flex flex-col items-center justify-center w-20 h-20 gap-2 rounded-xl transition-all duration-200",
        selectedMood === mood
          ? "bg-secondary shadow-lg scale-105"
          : "hover:bg-secondary/50",
        "group"
      )}
      aria-label={`Select mood: ${label}`}
    >
      <Icon className={cn(
        "w-8 h-8 transition-colors duration-200",
        selectedMood === mood
          ? mood === 'happy' ? "text-fitPulse-green"
            : mood === 'neutral' ? "text-fitPulse-blue"
            : "text-fitPulse-orange"
          : "text-muted-foreground group-hover:text-foreground"
      )} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  const EnergyButton = ({ level, icon: Icon, label }: { level: EnergyType; icon: React.ElementType; label: string }) => (
    <button
      type="button"
      onClick={() => setSelectedEnergy(level)}
      className={cn(
        "flex flex-col items-center justify-center w-20 h-20 gap-2 rounded-xl transition-all duration-200",
        selectedEnergy === level
          ? "bg-secondary shadow-lg scale-105"
          : "hover:bg-secondary/50",
        "group"
      )}
      aria-label={`Select energy level: ${label}`}
    >
      <Icon className={cn(
        "w-7 h-7 transition-colors duration-200",
        selectedEnergy === level
          ? level === 'low' ? "text-energy-low"
            : level === 'medium' ? "text-energy-medium"
            : "text-energy-high"
          : "text-muted-foreground group-hover:text-foreground"
      )} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <div className={cn("fitness-card", className)}>
      <h3 className="text-lg font-semibold mb-6">How are you feeling?</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-4">Mood</p>
          <div className="flex justify-between gap-4 px-4">
            <MoodButton mood="happy" icon={Smile} label="Great" />
            <MoodButton mood="neutral" icon={Meh} label="Okay" />
            <MoodButton mood="sad" icon={Frown} label="Not Great" />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-4">Energy Level</p>
          <div className="flex justify-between gap-4 px-4">
            <EnergyButton level="low" icon={Battery} label="Low" />
            <EnergyButton level="medium" icon={BatteryMedium} label="Medium" />
            <EnergyButton level="high" icon={BatteryFull} label="High" />
          </div>
        </div>
        
        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={!selectedMood || !selectedEnergy}
        >
          Log Check-In
        </Button>
      </div>
    </div>
  );
};

export default MoodCheckInWidget;
