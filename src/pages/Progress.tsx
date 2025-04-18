
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Download, TrendingUp, Activity, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const progressData = [
  { date: '2024-04-12', weight: 75, workouts: 3, intensity: 65, calories: 350 },
  { date: '2024-04-13', weight: 74.8, workouts: 2, intensity: 55, calories: 280 },
  { date: '2024-04-14', weight: 74.5, workouts: 4, intensity: 75, calories: 420 },
  { date: '2024-04-15', weight: 74.3, workouts: 3, intensity: 68, calories: 380 },
  { date: '2024-04-16', weight: 74.1, workouts: 2, intensity: 62, calories: 310 },
  { date: '2024-04-17', weight: 73.9, workouts: 3, intensity: 70, calories: 390 },
  { date: '2024-04-18', weight: 73.7, workouts: 4, intensity: 80, calories: 450 },
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

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-fitPulse-purple" />
                  Weekly Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">Workouts completed</p>
                <div className="mt-4 flex items-center text-sm text-fitPulse-green">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5% from last week
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-fitPulse-purple" />
                  Average Intensity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">67.8%</div>
                <p className="text-xs text-muted-foreground">Weekly average</p>
                <div className="mt-4 flex items-center text-sm text-fitPulse-green">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +5.3% from last week
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-fitPulse-purple" />
                  Calories Burned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,580</div>
                <p className="text-xs text-muted-foreground">This week</p>
                <div className="mt-4 flex items-center text-sm text-fitPulse-green">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8.2% from last week
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Weight Progress</CardTitle>
                <Tabs defaultValue="week" className="w-[200px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={progressData}>
                      <defs>
                        <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" className="text-sm" />
                      <YAxis className="text-sm" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="weight"
                        stroke="hsl(var(--primary))"
                        fill="url(#weightGradient)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">Workout Intensity</CardTitle>
                <Tabs defaultValue="week" className="w-[200px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                  </TabsList>
                </Tabs>
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
                        type="natural"
                        dataKey="intensity"
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
