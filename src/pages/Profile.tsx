
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import StreakCounter from '@/components/StreakCounter';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fitPulse-pink to-fitPulse-purple flex items-center justify-center text-white text-xl font-medium">
                      A
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Alex Johnson</h3>
                      <p className="text-sm text-muted-foreground">alex@example.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workout Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <StreakCounter count={7} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
