"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight } from "lucide-react";

// Define translations
const pagesTranslations = {
  "Daily Calculation": { bn: "দৈনিক হিসাব", en: "Daily Calculation" },
  "City Ledger": { bn: "শহর খতিয়ান", en: "City Ledger" },
  "Village Ledger": { bn: "গ্রাম খতিয়ান", en: "Village Ledger" },
  "Regular Ledger": { bn: "নিয়মিত খতিয়ান", en: "Regular Ledger" },
  "Stock Cement": { bn: "সিমেন্ট মজুদ", en: "Stock Cement" },
  Demo: { bn: "ডেমো", en: "Demo" },
} as const; // <-- important, makes keys readonly literals

type PageKey = keyof typeof pagesTranslations; // "Daily Calculation" | "City Ledger" | ...

const translations = {
  welcome: { bn: "স্বাগতম", en: "Welcome" },
} as const;

export default function Dashboard() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const pages: { key: PageKey; path: string }[] = [
    { key: "Daily Calculation", path: "/daily-calculation" },
    { key: "City Ledger", path: "/city-ladger" },
    { key: "Village Ledger", path: "/village-ladger" },
    { key: "Regular Ledger", path: "/regular-ladger" },
    { key: "Stock Cement", path: "/stock-cement" },
    { key: "Demo", path: "/Demo" },
  ];

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="gap-2">{translations.welcome[lang]}</CardTitle>
      </CardHeader>
      <CardContent>
 
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {pages.map((page) => (
              <Card
                key={page.key}
                onClick={() => navigate(page.path)}
                className="cursor-pointer hover:shadow-lg transition-shadow group bg-violet-50 hover:bg-violet-200"
              >
                <CardContent className="flex items-center justify-between p-6">
                  <span className="text-base font-semibold">
                    {pagesTranslations[page.key][lang]}
                  </span>

                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            ))}
          </div>
  
      </CardContent>
    </Card>
  );
}
