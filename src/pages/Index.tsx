
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import MainNavbar from '@/components/MainNavbar';
import StreakCounter from '@/components/StreakCounter';
import MoodCheckInWidget from '@/components/MoodCheckInWidget';
import WorkoutCard from '@/components/WorkoutCard';
import DailyGoalCard from '@/components/DailyGoalCard';
import UserLevelIndicator from '@/components/UserLevelIndicator';
import BadgeCollection from '@/components/BadgeCollection';
import AudioFeedback from '@/components/AudioFeedback';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Award, Bell, Calendar, ChevronRight, Dumbbell, 
  LineChart, Trophy, Zap 
} from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [userName] = useState('Alex');
  const [userLevel] = useState(8);
  const [userXp] = useState(750);
  const [userXpForNextLevel] = useState(1000);
  const [streakCount] = useState(7);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleMoodCheckIn = (mood: any, energy: any) => {
    toast({
      title: "Mood Logged!",
      description: `You're feeling ${mood} with ${energy} energy. We'll adjust your recommendations.`,
    });

    if (soundEnabled && window.playFitPulseSound) {
      window.playFitPulseSound('complete');
    }
  };

  const handleGoalComplete = (goalId: string) => {
    toast({
      title: "Goal Complete! 🎉",
      description: "You've earned XP and unlocked a new achievement!",
    });

    if (soundEnabled && window.playFitPulseSound) {
      window.playFitPulseSound('complete');
    }
  };

  const dailyGoals = [
    {
      id: 'goal1',
      title: 'Complete a workout',
      description: 'Any workout counts, even a quick one!',
      completed: true,
      xpReward: 50,
    },
    {
      id: 'goal2',
      title: 'Track water intake',
      description: 'Stay hydrated by logging your water intake',
      completed: false,
      xpReward: 30,
    },
    {
      id: 'goal3',
      title: 'Hit 7,000 steps',
      description: 'Get moving and reach your step goal',
      completed: false,
      xpReward: 40,
    },
  ];

  const recommendedWorkouts = [
    {
      title: 'Morning Energy Boost',
      description: 'Quick full-body workout to start your day right',
      duration: 20,
      difficulty: 'beginner' as const,
      targetMuscles: ['Full Body'],
      completion: 100,
    },
    {
      title: 'Stress Relief Stretch',
      description: 'Gentle stretching to release tension and improve flexibility',
      duration: 15,
      difficulty: 'beginner' as const,
      targetMuscles: ['Full Body', 'Flexibility'],
      completion: 0,
    },
    {
      title: 'Core Power Builder',
      description: 'Focus on strengthening your core and improving stability',
      duration: 25,
      difficulty: 'intermediate' as const,
      targetMuscles: ['Abs', 'Lower Back'],
      completion: 30,
    },
  ];

  const recentBadges = [
    {
      id: 'badge1',
      type: 'streak' as const,
      name: 'Week Warrior',
      description: 'Maintain a 7-day workout streak',
      dateEarned: '2025-04-10',
      icon: 'flame' as const,
    },
    {
      id: 'badge2',
      type: 'milestone' as const,
      name: 'Power 10',
      description: 'Complete 10 workouts',
      dateEarned: '2025-04-08',
      icon: 'dumbbell' as const,
    },
    {
      id: 'badge3',
      type: 'achievement' as const,
      name: 'Early Bird',
      description: 'Complete 5 workouts before 8 AM',
      dateEarned: '2025-04-05',
      icon: 'medal' as const,
    },
    {
      id: 'badge4',
      type: 'special' as const,
      name: 'Consistency King',
      description: 'Work out on the same day for 4 weeks',
      dateEarned: '2025-04-01',
      icon: 'award' as const,
    },
  ];

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const getMotivationalMessage = () => {
    const messages = [
      "You're crushing it today! 💪",
      "Ready to feel amazing? Let's go! ✨",
      "One workout closer to your goals! 🏆",
      "Your future self will thank you! 🌟",
      "Small steps, big results! 🚀",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <AudioFeedback enable={soundEnabled} />
      
      <MainNavbar 
        isDarkMode={theme === 'dark'} 
        onToggleTheme={toggleTheme} 
      />
      
      <main className="container px-4 py-8">
        {/* Header Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                {getTimeBasedGreeting()}, {userName}!
              </h1>
              <p className="text-lg mt-1 text-muted-foreground">
                {getMotivationalMessage()}
              </p>
            </div>
            
            <UserLevelIndicator 
              level={userLevel} 
              xp={userXp} 
              xpForNextLevel={userXpForNextLevel} 
            />
          </div>
        </section>
        
        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StreakCounter count={streakCount} />
          
          <div className="fitness-card">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fitPulse-blue/20">
                <Trophy className="w-6 h-6 text-fitPulse-blue" />
              </div>
              
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Weekly Progress</p>
                <div className="flex items-center mt-1">
                  <div className="flex-1 mr-4">
                    <Progress value={57} className="h-2" />
                  </div>
                  <span className="text-sm font-semibold">57%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fitness-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fitPulse-green/20">
                  <LineChart className="w-6 h-6 text-fitPulse-green" />
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Stats</p>
                  <p className="text-lg font-semibold">12 workouts</p>
                </div>
              </div>
              
              <Button variant="ghost" size="sm">
                <Calendar className="w-4 h-4 mr-1" /> View All
              </Button>
            </div>
          </div>
        </section>
        
        {/* Mood Check-in */}
        <section className="mb-8">
          <MoodCheckInWidget onSubmit={handleMoodCheckIn} />
        </section>
        
        {/* Daily Goals */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-fitPulse-orange" />
              Daily Goals
            </h2>
            <Button variant="ghost" size="sm" className="text-sm">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dailyGoals.map((goal) => (
              <DailyGoalCard
                key={goal.id}
                {...goal}
                onClick={() => !goal.completed && handleGoalComplete(goal.id)}
              />
            ))}
          </div>
        </section>
        
        {/* Recommended Workouts */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Dumbbell className="w-5 h-5 mr-2 text-fitPulse-purple" />
              Recommended For You
            </h2>
            <Button variant="ghost" size="sm" className="text-sm">
              Browse All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {recommendedWorkouts.map((workout, index) => (
              <WorkoutCard
                key={index}
                {...workout}
                onClick={() => {
                  toast({
                    title: "Workout Started!",
                    description: "Get ready to crush this workout!",
                  });
                }}
              />
            ))}
          </div>
        </section>
        
        {/* Recent Achievements */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Award className="w-5 h-5 mr-2 text-fitPulse-pink" />
              Recent Achievements
            </h2>
            <Button variant="ghost" size="sm" className="text-sm">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <BadgeCollection badges={recentBadges} />
        </section>
      </main>
      
      {/* Sound Toggle Button */}
      <div className="fixed bottom-20 md:bottom-8 right-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background shadow-md"
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? "Mute Sounds" : "Enable Sounds"}
        >
          {soundEnabled ? (
            <Bell className="h-5 w-5 text-fitPulse-blue" />
          ) : (
            <Bell className="h-5 w-5 text-muted-foreground" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Index;
