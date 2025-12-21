"use client";

import { Card, CardHeader } from "@/components/ui/card";


import { TypographyH1, TypographyP } from "../ui/typography";

export function Header() {
  return (
    <Card className="w-full rounded-2xl border bg-background shadow-sm">
      <CardHeader className="flex flex-col gap-2 md:gap-3">
        {/* Enterprise Name */}
        <TypographyH1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Jhorna Enterprise
        </TypographyH1>

        {/* Address */}
        <div className="flex items-center gap-2 text-muted-foreground">
        
          <TypographyP className="text-sm md:text-base">
            Thanar Mur, Sherpur Town, Sherpur
          </TypographyP>
        </div>
      </CardHeader>
    </Card>
  );
}
