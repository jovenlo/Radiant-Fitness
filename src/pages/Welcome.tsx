
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary/10 to-background p-6 text-center">
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Welcome to <span className="text-primary">RadiantFitness</span>
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Your personal fitness companion to help you track workouts, monitor progress, and achieve your goals.
        </p>
        
        <div className="py-6">
          <Button 
            onClick={() => navigate("/dashboard")} 
            size="lg" 
            className="hover-scale"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="p-4 rounded-lg border bg-card hover-scale">
            <h3 className="font-semibold text-lg mb-2">Track Workouts</h3>
            <p className="text-muted-foreground">Log your exercises and keep a history of all your activities.</p>
          </div>
          
          <div className="p-4 rounded-lg border bg-card hover-scale">
            <h3 className="font-semibold text-lg mb-2">Monitor Progress</h3>
            <p className="text-muted-foreground">Visualize your gains with charts and statistics.</p>
          </div>
          
          <div className="p-4 rounded-lg border bg-card hover-scale">
            <h3 className="font-semibold text-lg mb-2">Achieve Goals</h3>
            <p className="text-muted-foreground">Set fitness goals and track your journey to achieving them.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
