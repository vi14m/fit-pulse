
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, Trophy } from 'lucide-react';

export interface DailyGoalProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  xpReward: number;
  onClick?: () => void;
  className?: string;
}

const DailyGoalCard = ({
  title,
  description,
  completed,
  xpReward,
  onClick,
  className,
}: DailyGoalProps) => {
  return (
    <div className={cn(
      "fitness-card", 
      completed ? "border-fitPulse-green" : "hover:border-primary/50",
      className
    )}>
      <div className="flex gap-4">
        <div className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
          completed 
            ? "bg-fitPulse-green text-white" 
            : "bg-secondary text-primary"
        )}>
          {completed ? <Check className="w-5 h-5" /> : <Trophy className="w-5 h-5" />}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className={cn(
              "text-lg font-semibold",
              completed && "text-fitPulse-green"
            )}>
              {title}
            </h3>
            <span className="text-sm font-medium text-fitPulse-purple">+{xpReward} XP</span>
          </div>
          
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
          
          {!completed && (
            <Button 
              onClick={onClick} 
              variant="outline" 
              size="sm" 
              className="mt-3"
            >
              Mark Complete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyGoalCard;
