
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import BadgeCollection, { UserBadgeType } from '@/components/BadgeCollection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Crown, Medal, Star, Target, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements: UserBadgeType[] = [
  {
    id: '1',
    type: 'streak',
    name: '7 Day Streak',
    description: 'Completed workouts for 7 consecutive days',
    dateEarned: '2024-04-15',
    icon: 'flame'
  },
  {
    id: '2',
    type: 'milestone',
    name: '10 Workouts',
    description: 'Completed 10 workouts',
    dateEarned: '2024-04-10',
    icon: 'dumbbell'
  },
  {
    id: '3',
    type: 'achievement',
    name: 'Early Bird',
    description: 'Completed 5 morning workouts',
    dateEarned: '2024-04-08',
    icon: 'star'
  }
];

const nextAchievements = [
  {
    name: "14 Day Streak",
    progress: 50,
    icon: Trophy
  },
  {
    name: "25 Workouts",
    progress: 40,
    icon: Medal
  },
  {
    name: "Power Lifter",
    progress: 75,
    icon: Crown
  }
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Achievements</h1>
              <p className="text-muted-foreground">Track your milestones and progress</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Trophy className="w-4 h-4" />
              View All
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="col-span-full md:col-span-2">
              <CardHeader>
                <CardTitle>Level Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-2xl font-bold flex items-center gap-2">
                        Level 5
                        <Star className="w-5 h-5 text-fitPulse-purple" />
                      </span>
                      <div className="text-sm text-muted-foreground">750/1000 XP to Level 6</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">Next Reward at Level 6</div>
                      <div className="text-sm text-muted-foreground">Premium Workout Plan</div>
                    </div>
                  </div>
                  <Progress value={75} className="h-3" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-fitPulse-purple" />
                  Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Achievements</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This Month</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completion Rate</span>
                    <span className="font-bold">78%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-fitPulse-purple" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BadgeCollection badges={achievements} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {nextAchievements.map((achievement, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-secondary">
                          <achievement.icon className="w-4 h-4 text-fitPulse-purple" />
                        </div>
                        <span className="font-medium">{achievement.name}</span>
                      </div>
                      <Progress value={achievement.progress} />
                      <div className="text-right text-sm text-muted-foreground">
                        {achievement.progress}% Complete
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
