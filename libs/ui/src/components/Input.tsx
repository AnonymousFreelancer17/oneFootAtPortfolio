"use client";
import { CircleAlert } from "lucide-react";
import { ReactNode } from "react";

const country_code = [
  {
    country_name: "Afghanistan",
    country_code: "AF",
    phone_code: "+93",
    languages: ["Pashto", "Dari"],
  },
  {
    country_name: "Albania",
    country_code: "AL",
    phone_code: "+355",
    languages: ["Albanian"],
  },
  {
    country_name: "Algeria",
    country_code: "DZ",
    phone_code: "+213",
    languages: ["Arabic", "Berber"],
  },
  {
    country_name: "Argentina",
    country_code: "AR",
    phone_code: "+54",
    languages: ["Spanish"],
  },
  {
    country_name: "Australia",
    country_code: "AU",
    phone_code: "+61",
    languages: ["English"],
  },
  {
    country_name: "Bangladesh",
    country_code: "BD",
    phone_code: "+880",
    languages: ["Bengali"],
  },
  {
    country_name: "Belgium",
    country_code: "BE",
    phone_code: "+32",
    languages: ["Dutch", "French", "German"],
  },
  {
    country_name: "Brazil",
    country_code: "BR",
    phone_code: "+55",
    languages: ["Portuguese"],
  },
  {
    country_name: "Canada",
    country_code: "CA",
    phone_code: "+1",
    languages: ["English", "French"],
  },
  {
    country_name: "China",
    country_code: "CN",
    phone_code: "+86",
    languages: ["Mandarin"],
  },
  {
    country_name: "Denmark",
    country_code: "DK",
    phone_code: "+45",
    languages: ["Danish"],
  },
  {
    country_name: "Egypt",
    country_code: "EG",
    phone_code: "+20",
    languages: ["Arabic"],
  },
  {
    country_name: "Finland",
    country_code: "FI",
    phone_code: "+358",
    languages: ["Finnish", "Swedish"],
  },
  {
    country_name: "France",
    country_code: "FR",
    phone_code: "+33",
    languages: ["French"],
  },
  {
    country_name: "Germany",
    country_code: "DE",
    phone_code: "+49",
    languages: ["German"],
  },
  {
    country_name: "Greece",
    country_code: "GR",
    phone_code: "+30",
    languages: ["Greek"],
  },
  {
    country_name: "Hong Kong",
    country_code: "HK",
    phone_code: "+852",
    languages: ["Cantonese", "English"],
  },
  {
    country_name: "India",
    country_code: "IN",
    phone_code: "+91",
    languages: ["Hindi", "English"],
  },
  {
    country_name: "Indonesia",
    country_code: "ID",
    phone_code: "+62",
    languages: ["Indonesian"],
  },
  {
    country_name: "Ireland",
    country_code: "IE",
    phone_code: "+353",
    languages: ["English", "Irish"],
  },
  {
    country_name: "Israel",
    country_code: "IL",
    phone_code: "+972",
    languages: ["Hebrew", "Arabic"],
  },
  {
    country_name: "Italy",
    country_code: "IT",
    phone_code: "+39",
    languages: ["Italian"],
  },
  {
    country_name: "Japan",
    country_code: "JP",
    phone_code: "+81",
    languages: ["Japanese"],
  },
  {
    country_name: "Kenya",
    country_code: "KE",
    phone_code: "+254",
    languages: ["English", "Swahili"],
  },
  {
    country_name: "Malaysia",
    country_code: "MY",
    phone_code: "+60",
    languages: ["Malay"],
  },
  {
    country_name: "Mexico",
    country_code: "MX",
    phone_code: "+52",
    languages: ["Spanish"],
  },
  {
    country_name: "Nepal",
    country_code: "NP",
    phone_code: "+977",
    languages: ["Nepali"],
  },
  {
    country_name: "Netherlands",
    country_code: "NL",
    phone_code: "+31",
    languages: ["Dutch"],
  },
  {
    country_name: "New Zealand",
    country_code: "NZ",
    phone_code: "+64",
    languages: ["English", "Māori"],
  },
  {
    country_name: "Nigeria",
    country_code: "NG",
    phone_code: "+234",
    languages: ["English"],
  },
  {
    country_name: "Norway",
    country_code: "NO",
    phone_code: "+47",
    languages: ["Norwegian"],
  },
  {
    country_name: "Pakistan",
    country_code: "PK",
    phone_code: "+92",
    languages: ["Urdu", "English"],
  },
  {
    country_name: "Philippines",
    country_code: "PH",
    phone_code: "+63",
    languages: ["Filipino", "English"],
  },
  {
    country_name: "Poland",
    country_code: "PL",
    phone_code: "+48",
    languages: ["Polish"],
  },
  {
    country_name: "Portugal",
    country_code: "PT",
    phone_code: "+351",
    languages: ["Portuguese"],
  },
  {
    country_name: "Qatar",
    country_code: "QA",
    phone_code: "+974",
    languages: ["Arabic"],
  },
  {
    country_name: "Russia",
    country_code: "RU",
    phone_code: "+7",
    languages: ["Russian"],
  },
  {
    country_name: "Saudi Arabia",
    country_code: "SA",
    phone_code: "+966",
    languages: ["Arabic"],
  },
  {
    country_name: "Singapore",
    country_code: "SG",
    phone_code: "+65",
    languages: ["English", "Mandarin", "Malay", "Tamil"],
  },
  {
    country_name: "South Africa",
    country_code: "ZA",
    phone_code: "+27",
    languages: ["Zulu", "Xhosa", "Afrikaans", "English"],
  },
  {
    country_name: "South Korea",
    country_code: "KR",
    phone_code: "+82",
    languages: ["Korean"],
  },
  {
    country_name: "Spain",
    country_code: "ES",
    phone_code: "+34",
    languages: ["Spanish"],
  },
  {
    country_name: "Sri Lanka",
    country_code: "LK",
    phone_code: "+94",
    languages: ["Sinhala", "Tamil"],
  },
  {
    country_name: "Sweden",
    country_code: "SE",
    phone_code: "+46",
    languages: ["Swedish"],
  },
  {
    country_name: "Switzerland",
    country_code: "CH",
    phone_code: "+41",
    languages: ["German", "French", "Italian", "Romansh"],
  },
  {
    country_name: "Thailand",
    country_code: "TH",
    phone_code: "+66",
    languages: ["Thai"],
  },
  {
    country_name: "Turkey",
    country_code: "TR",
    phone_code: "+90",
    languages: ["Turkish"],
  },
  {
    country_name: "United Arab Emirates",
    country_code: "AE",
    phone_code: "+971",
    languages: ["Arabic", "English"],
  },
  {
    country_name: "United Kingdom",
    country_code: "GB",
    phone_code: "+44",
    languages: ["English"],
  },
  {
    country_name: "United States",
    country_code: "US",
    phone_code: "+1",
    languages: ["English"],
  },
  {
    country_name: "Vietnam",
    country_code: "VN",
    phone_code: "+84",
    languages: ["Vietnamese"],
  },
];

const Input = ({
  label,
  icon,
  inputType,
  placeholder,
  className,
  contClassName,
  phoneCode,
  value,
  name,
  onChange
}: {
  label: string;
  icon: ReactNode;
  inputType: string;
  placeholder: string;
  className: string;
  contClassName: string;
  phoneCode: boolean;
  value: string;
  name: string;
  onChange: any
}) => {
  return (
    <div className={`` + contClassName}>
      <label htmlFor={name} className="block mb-2.5 text-sm font-medium text-heading">
        {label}
      </label>
      <div className={`` + className}>
        <div className="h-full absolute left-0 ps-3 pe-3 z-10 flex justify-center items-center gap-x-2">
          {icon ? icon : <CircleAlert />}

          {phoneCode && (
            <div className="w-16 relative bg-blue-500">
              <select
                name="phone_code"
                className="w-full py-[9px] bg-transparent text-gray-100"
              >
                {country_code?.map((d, index) => {
                  return (
                    <option key={index} value="+91" className="text-gray-900">
                      {d.phone_code}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>

        <div className="flex-1 flex justify-center items-center">
          <input
            type={inputType}
            value={value}
            name={name}
            autoComplete=""
            onChange={onChange}
            id={name}
            className={`flex-1 block ${
              phoneCode ? "" : "ps-12"
            } pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body text-right`}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
