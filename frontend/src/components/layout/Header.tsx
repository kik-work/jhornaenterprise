"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { TypographyH1, TypographyH4 } from "../ui/typography";
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
      <CardHeader className="flex flex-col md:flex-row items-center justify-between">
        <div className="">
          <img
            src="/logo.png"
            alt="Description"
            className="h-14 sm:h-16 md:h-24 w-44 md:w-60  rounded-lg shadow-sm"
          />
        </div>


        {/* Centered Name & Address */}
        <div className="flex flex-col items-center">
          <TypographyH1 className=" text-xl!  sm:text-xl!  font-bold tracking-tight">
            {name}
          </TypographyH1>
          <TypographyH4 className="text-xs! sm:text-xs! sm:text-red-500! text-muted-foreground mb-1 ">
            {address}
          </TypographyH4>
        </div>

        {/* Language Toggle at End */}
        <div className="">
          <Button size="sm" variant="outline" onClick={toggleLang}>
            {lang === "bn" ? "Switch to English" : "বাংলায় দেখান"}
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
