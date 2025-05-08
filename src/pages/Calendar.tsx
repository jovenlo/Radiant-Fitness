
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Sample workout events for demonstration
  const workoutEvents = [
    {
      id: 1,
      title: "Morning Run",
      time: "06:30 AM",
      duration: "30 min",
      type: "Cardio",
      completed: true,
    },
    {
      id: 2, 
      title: "Upper Body Workout",
      time: "12:00 PM",
      duration: "45 min",
      type: "Strength",
      completed: false,
    },
    {
      id: 3,
      title: "Evening Yoga",
      time: "06:00 PM",
      duration: "60 min",
      type: "Flexibility",
      completed: false,
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Calendar</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <Card className="md:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle>Workout Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md p-3"
            />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle>
              {date ? (
                <time dateTime={date.toISOString()}>
                  {date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              ) : "Select a date"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {workoutEvents.length > 0 ? (
              <div className="space-y-4">
                {workoutEvents.map((event) => (
                  <div key={event.id} className="border rounded-md p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Checkbox id={`workout-${event.id}`} checked={event.completed} />
                        <label 
                          htmlFor={`workout-${event.id}`} 
                          className={`font-medium ${event.completed ? 'line-through text-muted-foreground' : ''}`}
                        >
                          {event.title}
                        </label>
                      </div>
                      <span className="text-sm">{event.time}</span>
                    </div>
                    
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center text-xs text-muted-foreground mt-2 hover:text-foreground">
                        <ChevronDown className="h-4 w-4 mr-1" />
                        Details
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="pt-2 pl-6 space-y-1 text-sm">
                          <p>Duration: {event.duration}</p>
                          <p>Type: {event.type}</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                No workouts scheduled for this day
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Upcoming Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
              <div>
                <p className="font-medium">Tomorrow - HIIT Workout</p>
                <p className="text-sm text-muted-foreground">06:30 AM • 30 min</p>
              </div>
              <div className="text-sm font-medium text-blue-500">Reminder Set</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
              <div>
                <p className="font-medium">Wed, May 7 - Leg Day</p>
                <p className="text-sm text-muted-foreground">05:00 PM • 45 min</p>
              </div>
              <div className="text-sm font-medium text-blue-500">Reminder Set</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
              <div>
                <p className="font-medium">Fri, May 9 - Full Body Workout</p>
                <p className="text-sm text-muted-foreground">07:00 AM • 60 min</p>
              </div>
              <div className="text-sm font-medium text-blue-500">Reminder Set</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarPage;
