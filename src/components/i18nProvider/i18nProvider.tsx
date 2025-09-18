"use client";

import { useEffect } from "react";
import i18n from "@/i18n";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lang = navigator.language.split("-")[0];
    i18n.changeLanguage(lang);
  }, []);

  return <>{children}</>;
}
