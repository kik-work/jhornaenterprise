"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Button
              key={page.key}
              onClick={() => navigate(page.path)}
              className="w-full bg-teal-700"
            >
              {pagesTranslations[page.key][lang]}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
