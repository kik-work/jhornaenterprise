"use client";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function GoBackButton() {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  // Translations
  const label = lang === "bn" ? "← ফিরে যান" : "← Back";

  return (
    <Button
      onClick={() => navigate(-1)}
      className="mb-2 bg-background text-foreground hover:bg-background hover:text-red-500 cursor-pointer w-full justify-end"
    >
      {label}
    </Button>
  );
}
