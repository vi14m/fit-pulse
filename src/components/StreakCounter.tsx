
import React from 'react';
import { cn } from '@/lib/utils';
import { Flame } from 'lucide-react';

interface StreakCounterProps {
  count: number;
  className?: string;
}

const StreakCounter = ({ count, className }: StreakCounterProps) => {
  // Generate confetti elements for celebration
  const confettiColors = ['bg-fitPulse-purple', 'bg-fitPulse-blue', 'bg-fitPulse-green', 'bg-fitPulse-orange', 'bg-fitPulse-pink'];
  
  const renderConfetti = () => {
    if (count < 5) return null;
    
    return (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <span 
            key={i}
            className={cn(
              "celebration-confetti",
              confettiColors[i % confettiColors.length]
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </>
    );
  };
  
  const getStreakMessage = () => {
    if (count === 0) return "Start your streak!";
    if (count === 1) return "First day!";
    if (count < 5) return "Keep it going!";
    if (count < 10) return "You're on fire!";
    if (count < 30) return "Unstoppable!";
    return "Legendary!";
  };

  return (
    <div className={cn(
      "relative fitness-card overflow-hidden",
      count >= 5 && "border-fitPulse-orange",
      className
    )}>
      {renderConfetti()}
      
      <div className="flex items-center gap-3">
        <div className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full bg-secondary",
          count >= 3 && "bg-gradient-to-br from-fitPulse-orange to-fitPulse-pink"
        )}>
          <Flame className={cn(
            "w-7 h-7",
            count >= 3 ? "text-white animate-bounce-in" : "text-fitPulse-orange"
          )} />
        </div>
        
        <div>
          <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">{count} days</span>
            <span className="text-sm font-medium text-fitPulse-orange">{getStreakMessage()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakCounter;
