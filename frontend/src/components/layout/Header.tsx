"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { TypographyH1, TypographyH4 } from "../ui/typography";
import { useLanguage } from "@/context/LanguageContext";
import { Toggle } from "../ui/toggle";
import { Languages } from "lucide-react";

export function Header() {
  const { lang, toggleLang } = useLanguage();

  const name =
    lang === "bn" ? "মেসার্স ঝরনা এন্টারপ্রাইজ" : "M/S Jhorna Enterprise";
  const address =
    lang === "bn"
      ? "থানা মোড়, শেরপুর টাউন, শেরপুর"
      : "Thana Mur, Sherpur Town, Sherpur";

  return (
    <Card className="w-full rounded-2xl  gap-0! border bg-background shadow-sm ">
      <CardHeader className="flex px-2! items-center justify-between">
        <div className="w-1/3">
          <img
            src="/logo.png"
            alt="Description"
            className="h-10 md:h-13 w-16 md:w-24 rounded-lg shadow-sm"
          />
        </div>


        {/* Centered Name & Address */}
        <div className="flex flex-col items-start w-full justify-start lg:items-center lg:justify-center">
          <TypographyH1 className=" text-base! md:text-2xl! font-bold tracking-tight">
            {name}
          </TypographyH1>
          <TypographyH4 className=" text-[10px]! md:text-base! text-muted-foreground ">
            {address}
          </TypographyH4>
        </div>

        {/* Language Toggle at End */}
        <div className="flex items-center gap-3 w-1/3 justify-end">

          <Toggle
            pressed={lang === "bn"}
            onPressedChange={toggleLang}
            aria-label="Toggle language"
            className="flex items-center gap-2"
          >

            <span className="text-sm font-medium">
              {lang === "bn" ? "বাংলা" : "English"}
            </span>
            <Languages className="h-4 w-4" />
          </Toggle>

        </div>

      </CardHeader>
    </Card>
  );
}
