// src/pages/DailyCalculation.tsx
"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRightIcon } from "lucide-react";

// Example data
const buyData = [
  { id: 1, item: "Cement",date:"2/12/2025 Saturday", quantity: 50, price: 500 },
  { id: 2, item: "Sand",date:"3/12/2025 Sunday", quantity: 100, price: 200 },
];

const sellData = [
  { id: 1, item: "Cement",date:"2/12/2025 Saturday", quantity: 20, price: 550 },
  { id: 2, item: "Sand", date:"3/12/2025 Sunday", quantity: 50, price: 250 },
];

const DailyCalculation: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daily Calculation</h1>

      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="mb-4 w-full">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>

        <TabsContent value="buy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buyData.map((entry) => (
              <div
                key={entry.id}
                className="p-4 flex items-center justify-between border rounded-lg shadow-sm bg-white dark:bg-gray-800"
              >
                <p>{entry.date}</p><ArrowRightIcon/>
                
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sellData.map((entry) => (
              <div
                key={entry.id}
                className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
              >
                <p><strong>Item:</strong> {entry.item}</p>
                <p><strong>Quantity:</strong> {entry.quantity}</p>
                <p><strong>Price:</strong> ${entry.price}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DailyCalculation;
