"use client";

import { ReactElement, ChangeEvent } from "react";

const countryCodes = [
  { code: "+91", label: "IN" },
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+84", label: "VN" },
];

type InputProps = {
  type: "input" | "select";
  label?: string;
  icon?: ReactElement;
  inputType?: string;
  placeholder?: string;
  optionData?: ReactElement;
  iconVisibility?: boolean;
  phoneCode?: boolean;

  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

  className?: string;
  containerClassName?: string;
  inputContainerClassName?: string;
  labelClassName?: string;
};

export const Input = ({
  type,
  label,
  icon,
  inputType = "text",
  placeholder,
  optionData,
  iconVisibility = false,
  phoneCode = false,
  name,
  value,
  onChange,
  className = "",
  containerClassName = "",
  inputContainerClassName = "",
  labelClassName = "",
}: InputProps) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
      )}

      <div className={`relative flex items-center ${inputContainerClassName}`}>
        {(iconVisibility || phoneCode) && (
          <div className="absolute left-0 flex items-center h-full px-3 gap-x-2">
            {iconVisibility && icon}

            {phoneCode && (
              <select
                name="phone_code"
                onChange={onChange}
                className="bg-transparent text-sm outline-none"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        {type === "input" ? (
          <input
            id={name}
            name={name}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
          />
        ) : (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
          >
            {optionData}
          </select>
        )}
      </div>
    </div>
  );
};
