"use client";

import * as React from "react";
import { ArrowRightIcon } from "lucide-react";

type Props = {
  onSelectDate: (date: string) => void;
};

// Example available dates
const dates = [
  "2/12/2025 Saturday",
  "3/12/2025 Sunday",
  "4/12/2025 Monday",
];

const DailyCalculation: React.FC<Props> = ({ onSelectDate }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Daily Calculation
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dates.map((date) => (
          <div
            key={date}
            onClick={() => onSelectDate(date)}
            className="p-4 flex items-center justify-between border rounded-lg
                       bg-white dark:bg-gray-800 shadow-sm cursor-pointer
                       hover:bg-muted transition"
          >
            <p>{date}</p>
            <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyCalculation;
