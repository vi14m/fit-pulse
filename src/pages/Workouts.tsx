
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkoutCard from '@/components/WorkoutCard';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const workouts = [
  {
    title: "Full Body Strength",
    description: "A comprehensive workout targeting all major muscle groups",
    duration: 45,
    difficulty: "intermediate" as const,
    targetMuscles: ["Full Body"],
    completion: 75
  },
  {
    title: "HIIT Cardio",
    description: "High-intensity interval training to boost cardio fitness",
    duration: 30,
    difficulty: "advanced" as const,
    targetMuscles: ["Cardio"],
    completion: 100
  },
  {
    title: "Core Focus",
    description: "Strengthen your core with this targeted ab workout",
    duration: 20,
    difficulty: "beginner" as const,
    targetMuscles: ["Abs", "Core"],
    completion: 0
  }
];

const Workouts = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Workouts</h1>
              <p className="text-muted-foreground">Choose your workout and start training</p>
            </div>
            <Button className="bg-fitPulse-purple hover:bg-fitPulse-purple/90">
              <Plus className="w-4 h-4 mr-2" /> Create Workout
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Workouts</TabsTrigger>
                <TabsTrigger value="inProgress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                {workouts.map((workout, index) => (
                  <WorkoutCard key={index} {...workout} />
                ))}
              </TabsContent>
              <TabsContent value="inProgress" className="space-y-4">
                {workouts.filter(w => w.completion > 0 && w.completion < 100).map((workout, index) => (
                  <WorkoutCard key={index} {...workout} />
                ))}
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                {workouts.filter(w => w.completion === 100).map((workout, index) => (
                  <WorkoutCard key={index} {...workout} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
