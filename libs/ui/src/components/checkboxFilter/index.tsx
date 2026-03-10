"use client";

import * as React from "react";
import { cn } from "../../utils/cn";

export interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxFilterProps {
  label: string;
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
}

export function CheckboxFilter({
  label,
  options,
  selectedValues,
  onChange,
  className,
}: CheckboxFilterProps) {
  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className={cn("flex flex-col gap-3 w-11/12", className)}>
      {/* Label */}
      <h3 className="font-medium text-gray-900 dark:text-white">
        {label}
      </h3>

      {/* Checkboxes */}
      <div className="flex flex-col gap-2">
        {/* {options.map((option) => (
          option.
        ))} */}
      </div>
    </div>
  );
}
