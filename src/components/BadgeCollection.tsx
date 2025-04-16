
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
  Award, Dumbbell, Flame, Heart, Medal, Star, Zap 
} from 'lucide-react';

export interface UserBadgeType {
  id: string;
  type: 'streak' | 'milestone' | 'achievement' | 'special';
  name: string;
  description: string;
  dateEarned: string;
  icon: 'flame' | 'dumbbell' | 'medal' | 'heart' | 'star' | 'award' | 'zap';
}

interface BadgeCollectionProps {
  badges: UserBadgeType[];
  className?: string;
}

const BadgeCollection = ({ badges, className }: BadgeCollectionProps) => {
  const getBadgeIcon = (icon: UserBadgeType['icon']) => {
    switch (icon) {
      case 'flame': return <Flame className="w-4 h-4" />;
      case 'dumbbell': return <Dumbbell className="w-4 h-4" />;
      case 'medal': return <Medal className="w-4 h-4" />;
      case 'heart': return <Heart className="w-4 h-4" />;
      case 'star': return <Star className="w-4 h-4" />;
      case 'award': return <Award className="w-4 h-4" />;
      case 'zap': return <Zap className="w-4 h-4" />;
    }
  };
  
  const getBadgeColor = (type: UserBadgeType['type']) => {
    switch (type) {
      case 'streak': return 'bg-fitPulse-orange/20 text-fitPulse-orange hover:bg-fitPulse-orange/30';
      case 'milestone': return 'bg-fitPulse-blue/20 text-fitPulse-blue hover:bg-fitPulse-blue/30';
      case 'achievement': return 'bg-fitPulse-purple/20 text-fitPulse-purple hover:bg-fitPulse-purple/30';
      case 'special': return 'bg-fitPulse-pink/20 text-fitPulse-pink hover:bg-fitPulse-pink/30';
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  if (badges.length === 0) {
    return (
      <div className={cn("fitness-card text-center py-8", className)}>
        <p className="text-muted-foreground">Complete workouts and goals to earn badges!</p>
      </div>
    );
  }
  
  return (
    <div className={cn("fitness-card", className)}>
      <h3 className="text-lg font-semibold mb-4">Your Badges</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {badges.map((badge) => (
          <div 
            key={badge.id}
            className="flex flex-col items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
            title={`${badge.description} (Earned: ${formatDate(badge.dateEarned)})`}
          >
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center mb-2",
              getBadgeColor(badge.type)
            )}>
              {getBadgeIcon(badge.icon)}
            </div>
            <span className="text-xs font-medium text-center">{badge.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeCollection;
