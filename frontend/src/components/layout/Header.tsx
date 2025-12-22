"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { TypographyH1, TypographyP } from "../ui/typography";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { lang, toggleLang } = useLanguage();

  const name =
    lang === "bn" ? "মেসার্স ঝরনা এন্টারপ্রাইজ" : "M/S Jhorna Enterprise";
  const address =
    lang === "bn"
      ? "থানা মোড়, শেরপুর টাউন, শেরপুর"
      : "Thana Mur, Sherpur Town, Sherpur";

  return (
    <Card className="w-full rounded-2xl border bg-background shadow-sm p-4 md:p-6">
      <CardHeader className="flex items-center justify-between">
        {/* Centered Name & Address */}
        <div className="flex flex-col items-center flex-1">
          <TypographyH1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {name}
          </TypographyH1>
          <TypographyP className="text-sm md:text-base text-muted-foreground mt-1">
            {address}
          </TypographyP>
        </div>

        {/* Language Toggle at End */}
        <div className="ml-4">
          <Button size="sm" variant="outline" onClick={toggleLang}>
            {lang === "bn" ? "Switch to English" : "বাংলায় দেখান"}
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
