
import React from 'react';
import { cn } from '@/lib/utils';
import ProgressRing from './ProgressRing';

interface UserLevelIndicatorProps {
  level: number;
  xp: number;
  xpForNextLevel: number;
  className?: string;
}

const UserLevelIndicator = ({
  level,
  xp,
  xpForNextLevel,
  className,
}: UserLevelIndicatorProps) => {
  const progress = Math.min(100, Math.round((xp / xpForNextLevel) * 100));
  
  return (
    <div className={cn("flex items-center", className)}>
      <ProgressRing 
        progress={progress} 
        size={60} 
        strokeWidth={4}
        className="mr-3"
      >
        <span className="text-lg font-bold">{level}</span>
      </ProgressRing>
      
      <div>
        <div className="text-sm font-medium mb-1">Level {level}</div>
        <div className="text-xs text-muted-foreground">
          {xp} / {xpForNextLevel} XP to next level
        </div>
      </div>
    </div>
  );
};

export default UserLevelIndicator;
