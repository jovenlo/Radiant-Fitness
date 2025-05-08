
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const weeklyData = [
  { day: "Mon", calories: 450 },
  { day: "Tue", calories: 680 },
  { day: "Wed", calories: 530 },
  { day: "Thu", calories: 720 },
  { day: "Fri", calories: 810 },
  { day: "Sat", calories: 650 },
  { day: "Sun", calories: 320 },
];

export function ActivityChart() {
  return (
    <Card className="col-span-2 bg-gradient-card border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                hide={true}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
                labelStyle={{ fontWeight: "bold" }}
              />
              <defs>
                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <Bar 
                dataKey="calories" 
                fill="url(#colorCalories)" 
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
