
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserLevelIndicator from '@/components/UserLevelIndicator';
import StreakCounter from '@/components/StreakCounter';

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-fitPulse-pink to-fitPulse-purple flex items-center justify-center text-white text-3xl font-bold">
              A
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Alex Smith</h1>
              <p className="text-muted-foreground">Fitness Enthusiast</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <UserLevelIndicator 
                  level={5}
                  xp={750}
                  xpForNextLevel={1000}
                />
                <StreakCounter currentStreak={7} bestStreak={14} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-sm text-muted-foreground">Workouts Completed</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold">12.5</div>
                    <div className="text-sm text-muted-foreground">Hours Trained</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-muted-foreground">Achievements</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-sm text-muted-foreground">Avg. Workouts/Week</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
