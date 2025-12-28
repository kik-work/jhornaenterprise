"use client";

import * as React from "react";
import { ArrowRightIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  onSelectvillageledgerDate: (date: string) => void;
};

// শহর খতিয়ান তারিখসমূহ
// value = backend / state value
// label = UI display value
const khotiyanDates = [
  {
    value: "2/12/2025",
    en: "2/12/2025 Saturday",
    bn: "২/১২/২০২৫ শনিবার",
  },
  {
    value: "3/12/2025",
    en: "3/12/2025 Sunday",
    bn: "৩/১২/২০২৫ রবিবার",
  },
  {
    value: "4/12/2025",
    en: "4/12/2025 Monday",
    bn: "৪/১২/২০২৫ সোমবার",
  },
  {
    value: "5/12/2025",
    en: "5/12/2025 Tuesday",
    bn: "৫/১২/২০২৫ মঙ্গলবার",
  },
  {
    value: "6/12/2025",
    en: "6/12/2025 Wednesday",
    bn: "৬/১২/২০২৫ বুধবার",
  },
];

const VillageLadger: React.FC<Props> = ({ onSelectvillageledgerDate }) => {
  const { lang } = useLanguage(); // "en" | "bn"

  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">
        {lang === "bn" ? "শহর খতিয়ান" : "City Ledger"}
      </h1>

      {/* Date List */}
      <div className="grid grid-cols-1 gap-4">
        {khotiyanDates.map((dateObj) => (
          <div
            key={dateObj.value}
            onClick={() => onSelectvillageledgerDate(dateObj.value)}
            className="p-4 flex items-center justify-between border rounded-lg
                       bg-white dark:bg-gray-800 shadow-sm cursor-pointer
                       hover:bg-muted transition"
          >
            <p className="font-medium">
              {lang === "bn" ? dateObj.bn : dateObj.en}
            </p>

            <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillageLadger;
