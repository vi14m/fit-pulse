
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Smile, 
  Meh, 
  Frown, 
  Zap, 
  TrendingUp, 
  Sun,
  ArrowRight,
  Check 
} from 'lucide-react';

type MoodType = 'happy' | 'neutral' | 'sad' | null;
type EnergyType = 'low' | 'medium' | 'high' | null;

interface MoodCheckInWidgetProps {
  onSubmit?: (mood: MoodType, energy: EnergyType) => void;
  className?: string;
}

const MoodCheckInWidget = ({ onSubmit, className }: MoodCheckInWidgetProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedMood, setSelectedMood] = useState<MoodType>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyType>(null);

  const handleSubmit = () => {
    if (selectedMood && selectedEnergy && onSubmit) {
      onSubmit(selectedMood, selectedEnergy);
      // Reset for next time
      setSelectedMood(null);
      setSelectedEnergy(null);
      setStep(1);
    }
  };

  const handleNextStep = () => {
    if (selectedMood) {
      setStep(2);
    }
  };

  const getMoodEmoji = (mood: MoodType) => {
    switch (mood) {
      case 'happy': return '😊';
      case 'neutral': return '😐';
      case 'sad': return '😔';
      default: return '';
    }
  };

  const getEnergyEmoji = (energy: EnergyType) => {
    switch (energy) {
      case 'low': return '⚡';
      case 'medium': return '⚡⚡';
      case 'high': return '⚡⚡⚡';
      default: return '';
    }
  };

  const MoodOption = ({ mood, icon: Icon, label }: { 
    mood: MoodType; 
    icon: React.ElementType; 
    label: string;
  }) => (
    <div 
      className={cn(
        "flex items-center p-4 rounded-xl transition-all cursor-pointer",
        selectedMood === mood 
          ? "bg-primary text-primary-foreground shadow-md scale-105" 
          : "bg-secondary/50 hover:bg-secondary hover:scale-102"
      )}
      onClick={() => setSelectedMood(mood)}
    >
      <div className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full mr-3",
        selectedMood === mood ? "bg-primary-foreground/20" : "bg-background/50"
      )}>
        <Icon 
          className={cn(
            "w-7 h-7",
            selectedMood === mood ? "text-primary-foreground" : "text-foreground"
          )} 
        />
      </div>
      <div className="flex-1">
        <p className={cn(
          "text-lg font-medium",
          selectedMood === mood ? "text-primary-foreground" : "text-foreground"
        )}>
          {label}
        </p>
      </div>
      {selectedMood === mood && (
        <Check className="w-5 h-5 text-primary-foreground ml-2" />
      )}
    </div>
  );

  const EnergyOption = ({ level, icon: Icon, label }: { 
    level: EnergyType; 
    icon: React.ElementType; 
    label: string;
  }) => (
    <div
      className={cn(
        "flex items-center p-4 rounded-xl transition-all cursor-pointer",
        selectedEnergy === level 
          ? "bg-primary text-primary-foreground shadow-md scale-105" 
          : "bg-secondary/50 hover:bg-secondary hover:scale-102"
      )}
      onClick={() => setSelectedEnergy(level)}
    >
      <div className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full mr-3",
        selectedEnergy === level ? "bg-primary-foreground/20" : "bg-background/50"
      )}>
        <Icon 
          className={cn(
            "w-7 h-7",
            selectedEnergy === level ? "text-primary-foreground" : "text-foreground"
          )} 
        />
      </div>
      <div className="flex-1">
        <p className={cn(
          "text-lg font-medium",
          selectedEnergy === level ? "text-primary-foreground" : "text-foreground"
        )}>
          {label}
        </p>
      </div>
      {selectedEnergy === level && (
        <Check className="w-5 h-5 text-primary-foreground ml-2" />
      )}
    </div>
  );

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="bg-muted/50">
        <CardTitle className="text-xl text-center">How are you feeling today?</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {step === 1 ? (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">What's your mood?</h3>
            <div className="space-y-3">
              <MoodOption 
                mood="happy" 
                icon={Smile} 
                label="Great" 
              />
              <MoodOption 
                mood="neutral" 
                icon={Meh} 
                label="Okay" 
              />
              <MoodOption 
                mood="sad" 
                icon={Frown} 
                label="Down" 
              />
            </div>
            <Button
              onClick={handleNextStep}
              className="w-full mt-4"
              disabled={!selectedMood}
            >
              Next <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Your energy level?</h3>
              <div className="text-sm text-muted-foreground">
                Mood: {getMoodEmoji(selectedMood)} {selectedMood}
              </div>
            </div>
            <div className="space-y-3">
              <EnergyOption 
                level="low" 
                icon={Zap} 
                label="Low" 
              />
              <EnergyOption 
                level="medium" 
                icon={TrendingUp} 
                label="Medium" 
              />
              <EnergyOption 
                level="high" 
                icon={Sun} 
                label="High" 
              />
            </div>
            <div className="flex gap-3 mt-4">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1"
                disabled={!selectedEnergy}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodCheckInWidget;
