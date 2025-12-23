"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AddEntryForm from "./AddDataform";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  selectedDate: string;
  onBack: () => void;
};

type Entry = {
  id: number;
  item: string;
  date: string;
  quantity: number;
  price: number;
};

const DailyCalculationBuySell: React.FC<Props> = ({ selectedDate, onBack }) => {
  const { lang } = useLanguage(); // "en" or "bn"

  const [buyData, setBuyData] = React.useState<Entry[]>([
    { id: 1, item: "Cement", date: "2/12/2025 Saturday", quantity: 50, price: 500 },
    { id: 2, item: "Sand", date: "3/12/2025 Sunday", quantity: 100, price: 200 },
  ]);

  const [sellData, setSellData] = React.useState<Entry[]>([
    { id: 1, item: "Cement", date: "2/12/2025 Saturday", quantity: 20, price: 550 },
    { id: 2, item: "Sand", date: "3/12/2025 Sunday", quantity: 50, price: 250 },
  ]);

  const filteredBuy = buyData.filter((item) => item.date === selectedDate);
  const filteredSell = sellData.filter((item) => item.date === selectedDate);

  // Translation object
  const t = {
    title: { en: "Daily Buy / Sell", bn: "দৈনিক ক্রয় / বিক্রয়" },
    dateLabel: { en: "Date", bn: "তারিখ" },
    changeDate: { en: "← Change Date", bn: "← তারিখ পরিবর্তন করুন" },
    buy: { en: "Buy", bn: "ক্রয়" },
    sell: { en: "Sell", bn: "বিক্রয়" },
    noDataBuy: { en: "No buy data found.", bn: "কোনও ক্রয় তথ্য পাওয়া যায়নি।" },
    noDataSell: { en: "No sell data found.", bn: "কোনও বিক্রয় তথ্য পাওয়া যায়নি।" },
    quantity: { en: "Quantity", bn: "পরিমাণ" },
    price: { en: "Price", bn: "মূল্য" },
  };

  return (
    <div className="w-full min-h-screen px-4 md:px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-bold">{t.title[lang]}</h1>
          <p className="text-muted-foreground">
            {t.dateLabel[lang]}: <strong>{selectedDate}</strong>
          </p>
        </div>

        <button
          onClick={onBack}
          className="text-sm text-primary hover:underline self-start md:self-auto"
        >
          {t.changeDate[lang]}
        </button>
      </div>

      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="w-full mb-6 flex">
          <TabsTrigger
            value="buy"
            className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {t.buy[lang]}
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            {t.sell[lang]}
          </TabsTrigger>
        </TabsList>

        {/* BUY TAB */}
        <TabsContent value="buy" className="w-full">
          <AddEntryForm
            type="buy"
            selectedDate={selectedDate}
            onAdd={(entry) =>
              setBuyData((prev) => [...prev, { id: Date.now(), ...entry }])
            }
          />

          {filteredBuy.length === 0 ? (
            <p className="text-muted-foreground">{t.noDataBuy[lang]}</p>
          ) : (
            <div className="w-full space-y-4">
              {filteredBuy.map((entry) => (
                <Card key={entry.id} className="w-full bg-green-50 dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg font-semibold">
                      {entry.item}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row md:justify-between gap-2">
                    <p>
                      <strong>{t.quantity[lang]}:</strong> {entry.quantity}
                    </p>
                    <p>
                      <strong>{t.price[lang]}:</strong> ৳{entry.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* SELL TAB */}
        <TabsContent value="sell" className="w-full">
          <AddEntryForm
            type="sell"
            selectedDate={selectedDate}
            onAdd={(entry) =>
              setSellData((prev) => [...prev, { id: Date.now(), ...entry }])
            }
          />

          {filteredSell.length === 0 ? (
            <p className="text-muted-foreground">{t.noDataSell[lang]}</p>
          ) : (
            <div className="w-full space-y-4">
              {filteredSell.map((entry) => (
                <Card key={entry.id} className="w-full bg-red-50 dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg font-semibold">
                      {entry.item}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row md:justify-between gap-2">
                    <p>
                      <strong>{t.quantity[lang]}:</strong> {entry.quantity}
                    </p>
                    <p>
                      <strong>{t.price[lang]}:</strong> ৳{entry.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DailyCalculationBuySell;
