"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AddLedgerEntryForm from "./AddLedgerEntryForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  selectedDate: string;
  onBack: () => void;
};

type LedgerEntry = {
  id: number;
  description: string;
  date: string;
  amount: number;
};

const CityLedgerDebitCredit: React.FC<Props> = ({
  selectedDate,
  onBack,
}) => {
  const { lang } = useLanguage();

  // Initial mock data (date must match selectedDate format)
  const [debitData, setDebitData] = React.useState<LedgerEntry[]>([
    {
      id: 1,
      description: "বাকী আদায়",
      date: selectedDate,
      amount: 5000,
    },
  ]);

  const [creditData, setCreditData] = React.useState<LedgerEntry[]>([
    {
      id: 1,
      description: "মাল ক্রয়",
      date: selectedDate,
      amount: 3000,
    },
  ]);

  const debitFiltered = debitData.filter(
    (e) => e.date === selectedDate
  );
  const creditFiltered = creditData.filter(
    (e) => e.date === selectedDate
  );

  const debitTotal = debitFiltered.reduce(
    (sum, e) => sum + e.amount,
    0
  );
  const creditTotal = creditFiltered.reduce(
    (sum, e) => sum + e.amount,
    0
  );

  const t = {
    title: { en: "City Ledger", bn: "শহর খতিয়ান" },
    date: { en: "Date", bn: "তারিখ" },
    back: { en: "← Change Date", bn: "← তারিখ পরিবর্তন করুন" },
    debit: { en: "Debit (Dr)", bn: "জমা (ডেবিট)" },
    credit: { en: "Credit (Cr)", bn: "খরচ (ক্রেডিট)" },
    noDebit: {
      en: "No debit entry found.",
      bn: "কোনো জমা হিসাব নেই।",
    },
    noCredit: {
      en: "No credit entry found.",
      bn: "কোনো খরচ হিসাব নেই।",
    },
    amount: { en: "Amount", bn: "টাকা" },
    total: { en: "Total", bn: "মোট" },
  };

  return (
    <div className="w-full min-h-screen px-4 md:px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{t.title[lang]}</h1>
          <p className="text-muted-foreground">
            {t.date[lang]}:{" "}
            <strong>{selectedDate}</strong>
          </p>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="text-sm text-primary hover:underline"
        >
          {t.back[lang]}
        </button>
      </div>

      <Tabs defaultValue="debit">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="debit" className="flex-1">
            {t.debit[lang]}
          </TabsTrigger>
          <TabsTrigger value="credit" className="flex-1">
            {t.credit[lang]}
          </TabsTrigger>
        </TabsList>

        {/* ================= DEBIT ================= */}
        <TabsContent value="debit">
          <AddLedgerEntryForm
            type="debit"
            selectedDate={selectedDate}
            onAdd={(entry) =>
              setDebitData((prev) => [
                ...prev,
                { id: Date.now(), ...entry },
              ])
            }
          />

          {debitFiltered.length === 0 ? (
            <p className="text-muted-foreground">
              {t.noDebit[lang]}
            </p>
          ) : (
            <>
              {debitFiltered.map((e) => (
                <Card key={e.id} className="mb-3 bg-green-50">
                  <CardHeader>
                    <CardTitle>{e.description}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <strong>{t.amount[lang]}:</strong>{" "}
                    ৳{e.amount}
                  </CardContent>
                </Card>
              ))}

              <p className="mt-2 font-semibold">
                {t.total[lang]}: ৳{debitTotal}
              </p>
            </>
          )}
        </TabsContent>

        {/* ================= CREDIT ================= */}
        <TabsContent value="credit">
          <AddLedgerEntryForm
            type="credit"
            selectedDate={selectedDate}
            onAdd={(entry) =>
              setCreditData((prev) => [
                ...prev,
                { id: Date.now(), ...entry },
              ])
            }
          />

          {creditFiltered.length === 0 ? (
            <p className="text-muted-foreground">
              {t.noCredit[lang]}
            </p>
          ) : (
            <>
              {creditFiltered.map((e) => (
                <Card key={e.id} className="mb-3 bg-red-50">
                  <CardHeader>
                    <CardTitle>{e.description}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <strong>{t.amount[lang]}:</strong>{" "}
                    ৳{e.amount}
                  </CardContent>
                </Card>
              ))}

              <p className="mt-2 font-semibold">
                {t.total[lang]}: ৳{creditTotal}
              </p>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CityLedgerDebitCredit;
