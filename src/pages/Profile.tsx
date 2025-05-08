
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { User, Settings, Activity, Award, Save, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

type ProfileData = {
  fullName: string;
  email: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  primaryGoal: string;
  weeklyTarget: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  // Default profile data
  const defaultProfile: ProfileData = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    age: "32",
    gender: "Male",
    height: "5'11\" (180 cm)",
    weight: "165 lbs (75 kg)",
    primaryGoal: "Build muscle & improve strength",
    weeklyTarget: "4 workouts per week"
  };
  
  const [profileData, setProfileData] = useState<ProfileData>(defaultProfile);
  
  const form = useForm<ProfileData>({
    defaultValues: profileData
  });
  
  const handleEditToggle = () => {
    if (isEditing) {
      // If we're currently editing, reset the form
      form.reset(profileData);
    }
    setIsEditing(!isEditing);
  };
  
  const onSubmit = (data: ProfileData) => {
    // This would normally update data in the backend
    setProfileData(data);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated."
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Profile</h2>
        {isEditing ? (
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleEditToggle}>
              <X className="mr-2 h-4 w-4" /> Cancel
            </Button>
            <Button onClick={form.handleSubmit(onSubmit)}>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </div>
        ) : (
          <Button variant="outline" onClick={handleEditToggle}>Edit Profile</Button>
        )}
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>
              <Button variant="outline" size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{profileData.fullName}</h3>
              <p className="text-muted-foreground">Fitness enthusiast, runner, joined March 2023</p>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Activity className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Active</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="text-sm">Gold Member</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input {...field} />
                          ) : (
                            <p>{field.value}</p>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input {...field} />
                          ) : (
                            <p>{field.value}</p>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Age</FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input {...field} />
                          ) : (
                            <p>{field.value}</p>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Gender</FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input {...field} />
                          ) : (
                            <p>{field.value}</p>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Height</FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input {...field} />
                          ) : (
                            <p>{field.value}</p>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-muted-foreground">Weight</FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input {...field} />
                          ) : (
                            <p>{field.value}</p>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Fitness Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="primaryGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Primary Goal</FormLabel>
                      <FormControl>
                        {isEditing ? (
                          <Input {...field} />
                        ) : (
                          <p>{field.value}</p>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="weeklyTarget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted-foreground">Weekly Target</FormLabel>
                      <FormControl>
                        {isEditing ? (
                          <Input {...field} />
                        ) : (
                          <p>{field.value}</p>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {!isEditing && (
                  <div>
                    <p className="text-sm text-muted-foreground">Target Areas</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Upper Body</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Core</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Legs</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
      
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Track your fitness milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <span className="text-sm font-medium">30 Day Streak</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium">100 Workouts</span>
            </div>
            <div className="flex flex-col items-center opacity-40">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <span className="text-sm font-medium">10K Steps</span>
            </div>
            <div className="flex flex-col items-center opacity-40">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                <Skeleton className="h-8 w-8 bg-purple-200" />
              </div>
              <span className="text-sm font-medium">???</span>
              <span className="text-xs text-muted-foreground">Locked</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
