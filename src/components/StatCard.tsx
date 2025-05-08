
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: string;
  positive?: boolean;
  className?: string;
  gradient?: boolean;
}

export function StatCard({
  title,
  value,
  icon,
  change,
  positive,
  className,
  gradient = false,
}: StatCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden",
      gradient ? "bg-gradient-card border-none shadow-md" : "",
      className
    )}>
      <CardHeader className="p-4 pb-2 flex flex-row justify-between items-center">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon && <div className="opacity-70">{icon}</div>}
      </CardHeader>
      <CardContent className="p-4 pt-1">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p
            className={cn(
              "mt-1 text-xs",
              positive ? "text-green-500" : "text-red-500"
            )}
          >
            {positive ? "+" : "-"} {change} from last week
          </p>
        )}
      </CardContent>
    </Card>
  );
}
