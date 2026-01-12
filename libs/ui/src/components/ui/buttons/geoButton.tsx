import { useEffect, useState } from "react";
import axios from "axios";

type Locale = {
  country: string;
  countryCode: string;
  language: string;
};

 

function CountryFlag({ code }: { code: string }) {
  return (
    <img
      src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
      alt={code}
      className="w-5 h-4 rounded-sm object-cover"
    />
  );
}




export default function LocaleButton() {
  const [locale, setLocale] = useState<Locale | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/geo")
      .then(res => setLocale(res.data))
      .catch(() =>
        setLocale({
          country: "United States",
          countryCode: "US",
          language: "English",
        })
      );

      console.log(locale);
      
  }, []);

  if (!locale) return null;

  return (
    <button
      className="
        flex items-center gap-2
        text-white
        rounded-full
        text-sm font-medium
        shadow-sm
        transition-all
      "
    >
      {/* Flag */}
       <CountryFlag code={locale.countryCode} />

      {/* Language */}
      <span>{locale.language}</span>
    </button>
  );
}
