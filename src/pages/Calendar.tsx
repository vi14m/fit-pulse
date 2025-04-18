
import React, { useState } from 'react';
import MainNavbar from '@/components/MainNavbar';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { format, addMonths, subMonths } from "date-fns";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const upcomingWorkouts = [
    { date: '2024-04-19', title: 'Full Body Strength', time: '09:00 AM', type: 'Workout' },
    { date: '2024-04-20', title: 'HIIT Cardio', time: '10:30 AM', type: 'Workout' },
    { date: '2024-04-22', title: 'Core Focus', time: '08:00 AM', type: 'Workout' },
    { date: '2024-04-23', title: 'Weight Check-in', time: '07:00 AM', type: 'Activity' },
    { date: '2024-04-25', title: 'Yoga Session', time: '18:00 PM', type: 'Workout' },
    { date: '2024-04-27', title: 'Recovery Walk', time: '09:30 AM', type: 'Activity' },
  ];

  const navigateMonth = (direction: 'next' | 'prev') => {
    setCurrentMonth(direction === 'next' 
      ? addMonths(currentMonth, 1) 
      : subMonths(currentMonth, 1)
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'EEE, MMM d');
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Workout Calendar</h1>
              <p className="text-muted-foreground">Schedule and track your workouts</p>
            </div>
            <Button className="bg-fitPulse-purple hover:bg-fitPulse-purple/90">
              <Plus className="w-4 h-4 mr-2" /> Add Workout
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => navigateMonth('prev')}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium">
                    {format(currentMonth, 'MMMM yyyy')}
                  </span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => navigateMonth('next')}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full min-h-[350px]"
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  showOutsideDays={true}
                  fixedWeeks
                />
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Upcoming Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {upcomingWorkouts.map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-10 rounded-full ${workout.type === 'Workout' ? 'bg-fitPulse-purple' : 'bg-fitPulse-green'}`}></div>
                        <div>
                          <h3 className="font-medium">{workout.title}</h3>
                          <p className="text-sm text-muted-foreground">{formatDate(workout.date)}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-medium text-sm">{workout.time}</span>
                        <span className="text-xs text-muted-foreground">{workout.type}</span>
                      </div>
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
