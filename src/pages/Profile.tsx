
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import StreakCounter from '@/components/StreakCounter';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Edit2, Heart, Mail, MapPin, Target, Trophy, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Profile</h1>
            <Button variant="outline">
              <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-fitPulse-pink to-fitPulse-purple flex items-center justify-center text-white text-3xl font-medium">
                      A
                    </div>
                    <span className="absolute bottom-0 right-0 w-5 h-5 bg-fitPulse-green rounded-full border-4 border-background"></span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Alex Johnson</h3>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                      <Mail className="w-4 h-4" />
                      alex@example.com
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                  </div>
                  <div className="w-full pt-4 border-t flex justify-around">
                    <div className="text-center">
                      <div className="text-2xl font-bold">152</div>
                      <div className="text-sm text-muted-foreground">Workouts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">28</div>
                      <div className="text-sm text-muted-foreground">Goals</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Fitness Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-fitPulse-purple" />
                      Weekly Workouts
                    </span>
                    <span>4/5</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-fitPulse-pink" />
                      Active Minutes
                    </span>
                    <span>120/150</span>
                  </div>
                  <Progress value={80} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-fitPulse-purple" />
                  Workout Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <StreakCounter count={7} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-fitPulse-purple" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-fitPulse-purple/20">
                      <Trophy className="w-4 h-4 text-fitPulse-purple" />
                    </div>
                    <div>
                      <p className="font-medium">7 Day Streak</p>
                      <p className="text-sm text-muted-foreground">Completed workouts for 7 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-fitPulse-blue/20">
                      <Award className="w-4 h-4 text-fitPulse-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Early Bird</p>
                      <p className="text-sm text-muted-foreground">5 morning workouts completed</p>
                    </div>
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
