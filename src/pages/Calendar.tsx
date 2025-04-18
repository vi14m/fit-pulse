
import React from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const upcomingWorkouts = [
    { date: '2024-04-19', title: 'Full Body Strength', time: '09:00 AM' },
    { date: '2024-04-20', title: 'HIIT Cardio', time: '10:30 AM' },
    { date: '2024-04-22', title: 'Core Focus', time: '08:00 AM' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Workout Calendar</h1>
            <p className="text-muted-foreground">Schedule and track your workouts</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Workouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingWorkouts.map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                      <div>
                        <h3 className="font-medium">{workout.title}</h3>
                        <p className="text-sm text-muted-foreground">{workout.date}</p>
                      </div>
                      <span className="text-sm font-medium">{workout.time}</span>
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

export default Calendar;
