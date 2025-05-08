
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";

const workoutData = [
  { id: 1, name: "Full Body Workout", type: "Strength", duration: "45 min", lastPerformed: "2 days ago" },
  { id: 2, name: "HIIT Cardio", type: "Cardio", duration: "30 min", lastPerformed: "5 days ago" },
  { id: 3, name: "Yoga Flow", type: "Flexibility", duration: "60 min", lastPerformed: "1 week ago" },
  { id: 4, name: "Upper Body Focus", type: "Strength", duration: "40 min", lastPerformed: "3 days ago" },
];

const Workouts = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Workouts</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Workout
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Workout</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Last Performed</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workoutData.map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell className="font-medium">{workout.name}</TableCell>
                    <TableCell>{workout.type}</TableCell>
                    <TableCell>{workout.duration}</TableCell>
                    <TableCell>{workout.lastPerformed}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Workout Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
              <span className="font-medium">Strength Training</span>
              <Button variant="outline" size="sm">Browse</Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
              <span className="font-medium">Cardio</span>
              <Button variant="outline" size="sm">Browse</Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
              <span className="font-medium">Flexibility</span>
              <Button variant="outline" size="sm">Browse</Button>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
              <span className="font-medium">Custom Workouts</span>
              <Button variant="outline" size="sm">Browse</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workouts;
