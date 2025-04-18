
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import BadgeCollection, { UserBadgeType } from '@/components/BadgeCollection';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Achievements</h1>
            <p className="text-muted-foreground">Track your milestones and progress</p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Level Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Level 5</span>
                    <span className="text-sm text-muted-foreground">750/1000 XP</span>
                  </div>
                  <Progress value={75} />
                </div>
              </CardContent>
            </Card>

            <BadgeCollection badges={achievements} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
