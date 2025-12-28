"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useLanguage } from "@/context/LanguageContext";

type EntryType = "debit" | "credit";

type LedgerEntry = {
  description: string;
  date: string;
  amount: number;
};

type Props = {
  type: EntryType;
  selectedDate: string;
  onAdd: (entry: LedgerEntry) => void;
};

// Zod schema (language independent)
const ledgerEntrySchema = z.object({
  description: z.string().min(1),
  amount: z.number().positive(),
});

const AddLedgerEntryForm: React.FC<Props> = ({
  type,
  selectedDate,
  onAdd,
}) => {
  const { lang } = useLanguage();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = {
    title: {
      debit: { en: "Add Debit Entry", bn: "জমা যোগ করুন" },
      credit: { en: "Add Credit Entry", bn: "খরচ যোগ করুন" },
    },
    desc: { en: "Description", bn: "বিবরণ" },
    descPlaceholder: {
      en: "Enter description",
      bn: "বিবরণ লিখুন",
    },
    amount: { en: "Amount", bn: "টাকা" },
    amountPlaceholder: {
      en: "Enter amount",
      bn: "টাকার পরিমাণ লিখুন",
    },
    add: { en: "Add", bn: "যোগ করুন" },
    invalid: {
      en: "Please enter valid information",
      bn: "সঠিক তথ্য প্রদান করুন",
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed = ledgerEntrySchema.safeParse({
      description,
      amount: Number(amount),
    });

    if (!parsed.success) {
      setError(t.invalid[lang]);
      return;
    }

    onAdd({
      description: description.trim(),
      date: selectedDate,
      amount: Number(amount),
    });

    // reset
    setDescription("");
    setAmount("");
    setError(null);
    setOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded-lg bg-muted"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{t.title[type][lang]}</h3>

        {!open ? (
          <Button
            type="button"
            onClick={() => setOpen(true)}
          >
            {t.add[lang]}
          </Button>
        ) : (
          <X
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        )}
      </div>

      {/* Form Fields */}
      {open && (
        <>
          <input
            type="text"
            placeholder={t.descPlaceholder[lang]}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="number"
            placeholder={t.amountPlaceholder[lang]}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {error && (
            <p className="text-red-500 text-sm mb-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
          >
            {t.add[lang]}
          </button>
        </>
      )}
    </form>
  );
};

export default AddLedgerEntryForm;
