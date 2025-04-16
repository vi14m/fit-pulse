
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
      // Reset after submit
      setSelectedMood(null);
      setSelectedEnergy(null);
    }
  };

  const MoodButton = ({ mood, icon: Icon, label }: { mood: MoodType; icon: React.ElementType; label: string }) => (
    <button
      type="button"
      onClick={() => setSelectedMood(mood)}
      className={cn(
        "flex flex-col items-center gap-1.5 p-3 rounded-lg transition-all",
        selectedMood === mood ? "bg-secondary scale-110" : "hover:bg-secondary/50"
      )}
    >
      <Icon className={cn(
        "w-8 h-8 transition-colors",
        selectedMood === mood && (
          mood === 'happy' ? "text-fitPulse-green" : 
          mood === 'neutral' ? "text-fitPulse-blue" : 
          "text-fitPulse-orange"
        )
      )} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  const EnergyButton = ({ level, icon: Icon, label }: { level: EnergyType; icon: React.ElementType; label: string }) => (
    <button
      type="button"
      onClick={() => setSelectedEnergy(level)}
      className={cn(
        "flex flex-col items-center gap-1.5 p-3 rounded-lg transition-all",
        selectedEnergy === level ? "bg-secondary scale-110" : "hover:bg-secondary/50"
      )}
    >
      <Icon className={cn(
        "w-7 h-7 transition-colors",
        selectedEnergy === level && (
          level === 'low' ? "text-energy-low" : 
          level === 'medium' ? "text-energy-medium" : 
          "text-energy-high"
        )
      )} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <div className={cn("fitness-card animate-slide-up", className)}>
      <h3 className="text-lg font-semibold mb-4">How are you feeling?</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Mood</p>
          <div className="flex justify-between">
            <MoodButton mood="happy" icon={Smile} label="Great" />
            <MoodButton mood="neutral" icon={Meh} label="Okay" />
            <MoodButton mood="sad" icon={Frown} label="Not Great" />
          </div>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-2">Energy Level</p>
          <div className="flex justify-between">
            <EnergyButton level="low" icon={Battery} label="Low" />
            <EnergyButton level="medium" icon={BatteryMedium} label="Medium" />
            <EnergyButton level="high" icon={BatteryFull} label="High" />
          </div>
        </div>
        
        <Button
          onClick={handleSubmit}
          className="w-full mt-2"
          disabled={!selectedMood || !selectedEnergy}
        >
          Log Check-In
        </Button>
      </div>
    </div>
  );
};

export default MoodCheckInWidget;
