
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

export function GoalProgress() {
  return (
    <Card className="col-span-3 bg-gradient-card border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5 text-marvel-blue" />
          Weekly Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Steps</span>
            <span className="text-sm font-medium">8,345 / 10,000</span>
          </div>
          <Progress value={83} className="h-2 bg-gray-100" />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Workouts</span>
            <span className="text-sm font-medium">3 / 5</span>
          </div>
          <Progress value={60} className="h-2 bg-gray-100" />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Water Intake</span>
            <span className="text-sm font-medium">2.1L / 3L</span>
          </div>
          <Progress value={70} className="h-2 bg-gray-100" />
        </div>
      </CardContent>
    </Card>
  );
}
