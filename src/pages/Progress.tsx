
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Download } from 'lucide-react';

const progressData = [
  { date: '2024-04-12', weight: 75, workouts: 3 },
  { date: '2024-04-13', weight: 74.8, workouts: 2 },
  { date: '2024-04-14', weight: 74.5, workouts: 4 },
  { date: '2024-04-15', weight: 74.3, workouts: 3 },
  { date: '2024-04-16', weight: 74.1, workouts: 2 },
  { date: '2024-04-17', weight: 73.9, workouts: 3 },
  { date: '2024-04-18', weight: 73.7, workouts: 4 },
];

const Progress = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
              <p className="text-muted-foreground">Monitor your fitness journey</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <CalendarIcon className="w-4 h-4 mr-2" /> Date Range
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" /> Export Data
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Weight Progress</CardTitle>
                <span className="text-sm text-muted-foreground">Last 7 days</span>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" className="text-sm" />
                      <YAxis className="text-sm" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--primary))' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Workout Frequency</CardTitle>
                <span className="text-sm text-muted-foreground">Last 7 days</span>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" className="text-sm" />
                      <YAxis className="text-sm" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="workouts" 
                        stroke="hsl(var(--fitPulse-green))"
                        strokeWidth={2}
                        dot={{ fill: 'hsl(var(--fitPulse-green))' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
