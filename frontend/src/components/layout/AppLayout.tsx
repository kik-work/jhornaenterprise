"use client";

import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import GoBackButton from "../ui/GoBack";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex p-6 flex-col bg-background space-y-2">
      <Header />

      <div className="flex flex-1">
       
        <main className="flex-1 overflow-y-auto">
           <GoBackButton/>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
