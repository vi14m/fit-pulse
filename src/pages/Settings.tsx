
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Volume2, Timer, Trophy, Moon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Customize your app preferences</p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-fitPulse-purple" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <Label className="text-base">Workout Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for scheduled workouts
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <Label className="text-base">Achievement Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you earn new achievements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <Label className="text-base">Weekly Reports</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly progress summaries
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-fitPulse-blue" />
                  App Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <Label className="text-base">Sound Effects</Label>
                    <p className="text-sm text-muted-foreground">
                      Play sounds during workouts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <Label className="text-base">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable dark mode theme
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <Label className="text-base">Workout Timer</Label>
                    <p className="text-sm text-muted-foreground">
                      Show countdown timer during exercises
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
