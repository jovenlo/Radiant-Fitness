
import React from "react";
import { StatCard } from "./StatCard";
import { ActivityChart } from "./ActivityChart";
import { WorkoutList } from "./WorkoutList";
import { GoalProgress } from "./GoalProgress";
import { Heart, Timer, Trophy, TrendingUp } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Welcome back, Alex</h2>
          <p className="text-muted-foreground">Here's your fitness summary for today</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Calories Burned"
          value="685"
          change="12%"
          positive={true}
          icon={<TrendingUp className="h-4 w-4" />}
          gradient
        />
        <StatCard 
          title="Active Minutes"
          value="124"
          change="8%"
          positive={true}
          icon={<Timer className="h-4 w-4" />}
          gradient
        />
        <StatCard
          title="Heart Rate"
          value="72 bpm"
          icon={<Heart className="h-4 w-4" />}
          gradient
        />
        <StatCard
          title="Achievements" 
          value="8"
          change="2"
          positive={true}
          icon={<Trophy className="h-4 w-4" />}
          gradient
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <ActivityChart />
        <GoalProgress />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <WorkoutList />
      </div>
    </div>
  );
}
