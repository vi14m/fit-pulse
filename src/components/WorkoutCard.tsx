
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Dumbbell, Target } from 'lucide-react';
import ProgressRing from './ProgressRing';

interface WorkoutCardProps {
  title: string;
  description: string;
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetMuscles: string[];
  completion?: number; // percentage
  onClick?: () => void;
  className?: string;
}

const WorkoutCard = ({
  title,
  description,
  duration,
  difficulty,
  targetMuscles,
  completion = 0,
  onClick,
  className,
}: WorkoutCardProps) => {
  const difficultyColor = {
    beginner: 'bg-fitPulse-green text-fitPulse-green',
    intermediate: 'bg-fitPulse-blue text-fitPulse-blue',
    advanced: 'bg-fitPulse-purple text-fitPulse-purple',
  }[difficulty];

  const difficultyLabel = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  }[difficulty];

  const progressColor = {
    beginner: 'hsl(160, 84%, 39%)', // green
    intermediate: 'hsl(217, 91%, 60%)', // blue
    advanced: 'hsl(262, 80%, 60%)', // purple
  }[difficulty];

  return (
    <div 
      className={cn(
        "group fitness-card hover:translate-y-[-4px]",
        completion === 100 && "border-fitPulse-green",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-2 flex-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={cn(
                "fitness-badge border-0 bg-opacity-20 font-medium",
                difficultyColor
              )}>
                {difficultyLabel}
              </span>
              {completion === 100 && (
                <span className="fitness-badge border-0 bg-fitPulse-green/20 text-fitPulse-green">
                  Completed
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{duration} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{targetMuscles.join(', ')}</span>
            </div>
          </div>
        </div>
        
        <ProgressRing 
          progress={completion} 
          size={80} 
          strokeWidth={6}
          color={progressColor}
          className="ml-4"
        >
          <div className="flex flex-col items-center">
            <Dumbbell className="w-5 h-5 mb-1" />
            <span className="text-lg font-bold">{completion}%</span>
          </div>
        </ProgressRing>
      </div>
      
      <div className="mt-6">
        <Button 
          onClick={onClick} 
          className="w-full"
          variant={completion === 100 ? "outline" : "default"}
        >
          {completion === 100 ? "Review Workout" : "Start Workout"} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default WorkoutCard;
