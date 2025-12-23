"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Props = {
  selectedDate: string;
  onBack: () => void;
};

const buyData = [
  { id: 1, item: "Cement", date: "2/12/2025 Saturday", quantity: 50, price: 500 },
  { id: 2, item: "Sand", date: "3/12/2025 Sunday", quantity: 100, price: 200 },
];

const sellData = [
  { id: 1, item: "Cement", date: "2/12/2025 Saturday", quantity: 20, price: 550 },
  { id: 2, item: "Sand", date: "3/12/2025 Sunday", quantity: 50, price: 250 },
];

const DailyCalculationBuySell: React.FC<Props> = ({
  selectedDate,
  onBack,
}) => {
  const filteredBuy = buyData.filter(
    (item) => item.date === selectedDate
  );

  const filteredSell = sellData.filter(
    (item) => item.date === selectedDate
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Daily Buy / Sell</h1>
          <p className="text-muted-foreground">
            Date: <strong>{selectedDate}</strong>
          </p>
        </div>

        <button
          onClick={onBack}
          className="text-sm text-primary hover:underline"
        >
          ← Change Date
        </button>
      </div>

      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="mb-4 w-full">
          <TabsTrigger
            value="buy"
            className="data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Buy
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Sell
          </TabsTrigger>
        </TabsList>

        <TabsContent value="buy">
          {filteredBuy.length === 0 ? (
            <p className="text-muted-foreground">No buy data found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBuy.map((entry) => (
                <div
                  key={entry.id}
                  className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
                >
                  <p><strong>Item:</strong> {entry.item}</p>
                  <p><strong>Quantity:</strong> {entry.quantity}</p>
                  <p><strong>Price:</strong> ৳{entry.price}</p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="sell">
          {filteredSell.length === 0 ? (
            <p className="text-muted-foreground">No sell data found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSell.map((entry) => (
                <div
                  key={entry.id}
                  className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
                >
                  <p><strong>Item:</strong> {entry.item}</p>
                  <p><strong>Quantity:</strong> {entry.quantity}</p>
                  <p><strong>Price:</strong> ৳{entry.price}</p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DailyCalculationBuySell;
