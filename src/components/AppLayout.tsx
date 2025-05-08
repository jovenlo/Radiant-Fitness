
import React from "react";
import { SidebarNav } from "./SidebarNav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <SidebarNav />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {children || <Outlet />}
        </main>
      </div>
    </SidebarProvider>
  );
}
