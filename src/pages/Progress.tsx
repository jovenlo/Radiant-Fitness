
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar as CalendarIcon, Activity, Heart, ChartLine } from "lucide-react";

const ProgressPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Progress</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Weekly Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Workouts Completed</span>
                <span className="text-sm font-medium">3/5</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Active Minutes</span>
                <span className="text-sm font-medium">120/150</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Calorie Goal</span>
                <span className="text-sm font-medium">1800/2400</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Water Intake</span>
                <span className="text-sm font-medium">6/8 cups</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Fitness Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-md">
                <Activity className="h-8 w-8 text-primary mb-2" />
                <span className="text-lg font-bold">5,200</span>
                <span className="text-xs text-muted-foreground">Daily Steps</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-md">
                <Heart className="h-8 w-8 text-rose-500 mb-2" />
                <span className="text-lg font-bold">72 BPM</span>
                <span className="text-xs text-muted-foreground">Resting Heart Rate</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-md">
                <CalendarIcon className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-lg font-bold">18</span>
                <span className="text-xs text-muted-foreground">Active Days This Month</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-md">
                <ChartLine className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-lg font-bold">+12%</span>
                <span className="text-xs text-muted-foreground">Strength Improvement</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Body Measurements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="grow bg-muted/50 p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Weight</div>
                <div className="text-2xl font-bold mt-1">165 lbs</div>
                <div className="text-xs text-green-500">-2.5 lbs this month</div>
              </div>
              <div className="grow bg-muted/50 p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Body Fat</div>
                <div className="text-2xl font-bold mt-1">22%</div>
                <div className="text-xs text-green-500">-1.2% this month</div>
              </div>
              <div className="grow bg-muted/50 p-4 rounded-md">
                <div className="text-sm text-muted-foreground">Muscle Mass</div>
                <div className="text-2xl font-bold mt-1">128 lbs</div>
                <div className="text-xs text-green-500">+1.5 lbs this month</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressPage;
