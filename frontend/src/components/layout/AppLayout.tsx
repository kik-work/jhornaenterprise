// src/components/layout/AppLayout.tsx
"use client";

import type { ReactNode } from "react";
import { Header } from "./Header";

import { Footer } from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex p-6 flex-col bg-background space-y-6">
      <Header />

      <div className="flex flex-1">
        
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
