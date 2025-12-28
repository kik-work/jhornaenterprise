"use client";

import * as React from "react";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  onSelectDate: (date: string) => void;
};

// Example available dates with translations (for simplicity, only the day names in Bangla)
const dates = [
  { en: "2/12/2025 Saturday", bn: "২/১২/২০২৫ শনিবার" },
  { en: "3/12/2025 Sunday", bn: "৩/১২/২০২৫ রবিবার" },
  { en: "4/12/2025 Monday", bn: "৪/১২/২০২৫ সোমবার" },
  { en: "5/12/2025 Tuesday", bn: "৫/১২/২০২৫ মঙ্গলবার" },
  { en: "6/12/2025 Wednesday", bn: "৬/১২/২০২৫ বুধবার" },
];

const DailyCalculation: React.FC<Props> = ({ onSelectDate }) => {
  const { lang } = useLanguage(); // "en" or "bn"

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {lang === "bn" ? "দৈনিক হিসাব" : "Daily Calculation"}
      </h1>

      <div className="grid grid-cols-1  gap-4">
        {dates.map((dateObj) => (
          <div
            key={dateObj.en}
            onClick={() => onSelectDate(dateObj.en)} // Keep the value in English for backend logic
            className="p-4 flex items-center justify-between border rounded-lg
                       bg-white dark:bg-gray-800 shadow-sm cursor-pointer
                       hover:bg-muted transition"
          >
            <p>{dateObj[lang]}</p>
            <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyCalculation;
