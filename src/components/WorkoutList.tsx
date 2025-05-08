
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentWorkouts = [
  {
    id: 1,
    name: "Morning Cardio",
    type: "Cardio",
    duration: "35 min",
    date: "Today"
  },
  {
    id: 2,
    name: "Upper Body Strength",
    type: "Strength",
    duration: "45 min",
    date: "Yesterday"
  },
  {
    id: 3,
    name: "Yoga Flow",
    type: "Flexibility",
    duration: "30 min",
    date: "2 days ago"
  }
];

export function WorkoutList() {
  return (
    <Card className="col-span-3 bg-gradient-card border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-marvel-purple" />
          Recent Workouts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {recentWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            >
              <div className="flex flex-col">
                <h4 className="font-medium">{workout.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline" className="bg-opacity-20">
                    {workout.type}
                  </Badge>
                  <span>{workout.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{workout.date}</span>
                <Button variant="ghost" size="sm" className="text-sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Workouts
        </Button>
      </CardContent>
    </Card>
  );
}
