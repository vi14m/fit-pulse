
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Card, CardContent } from "@/components/ui/card";
import { ActivitySquare, Calendar, Clock, Dumbbell, Filter, Flame, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";

const activities = [
  {
    type: 'Workout',
    name: 'Full Body Strength',
    date: '2024-04-18',
    duration: '45 min',
    calories: 320,
    intensity: 85,
    status: 'completed'
  },
  {
    type: 'Cardio',
    name: 'HIIT Session',
    date: '2024-04-17',
    duration: '30 min',
    calories: 280,
    intensity: 92,
    status: 'completed'
  },
  {
    type: 'Workout',
    name: 'Core Focus',
    date: '2024-04-16',
    duration: '20 min',
    calories: 150,
    intensity: 75,
    status: 'missed'
  }
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Activities</h1>
              <p className="text-muted-foreground">Track your fitness activities</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" /> Filter
              </Button>
              <Button className="bg-fitPulse-purple hover:bg-fitPulse-purple/90">
                Start Activity
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:bg-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-secondary">
                        {activity.type === 'Workout' ? (
                          <Dumbbell className="w-5 h-5 text-fitPulse-purple" />
                        ) : (
                          <ActivitySquare className="w-5 h-5 text-fitPulse-blue" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium text-lg">{activity.name}</h3>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {activity.date}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {activity.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.status === 'completed'
                        ? 'bg-fitPulse-green/20 text-fitPulse-green'
                        : 'bg-destructive/20 text-destructive'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Flame className="w-4 h-4 text-fitPulse-orange" />
                        Calories
                      </div>
                      <p className="font-medium">{activity.calories} kcal</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Heart className="w-4 h-4 text-fitPulse-pink" />
                        Intensity
                      </div>
                      <Progress value={activity.intensity} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
