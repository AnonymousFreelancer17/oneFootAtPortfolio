"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchLocale, LocaleData } from "../lib/geo";

type LocaleContextType = {
  locale: LocaleData | null;
  loading: boolean;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: null,
  loading: true,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<LocaleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocale()
      .then((data: any) => setLocale(data))
      .catch(() => setLocale(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, loading }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
