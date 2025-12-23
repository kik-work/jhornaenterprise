// src/components/DualLangText.tsx
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  textKey: string;
}

const DualLangText: React.FC<Props> = ({ textKey }) => {
  const { t } = useTranslation();

  return (
    <>
      {t(textKey, { lng: "en" })} ({t(textKey, { lng: "bn" })})
    </>
  );
};

export default DualLangText;
