"use client";

import * as React from "react";
import { cn } from "../../utils/cn";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
  disabled?: boolean;
  label?: string;
  showValue?: boolean;
  inputClassName?: string;
  unit?: string; // ₹, %, etc.
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value,
      onChange,
      className,
      inputClassName,
      disabled = false,
      label,
      showValue = true,
      unit = "",
    },
    ref,
  ) => {
    const sliderId = React.useId();

    return (
      <div className={cn("w-full space-y-2", className)}>
        {/* Label + Value */}
        {(label || showValue) && (
          <div className="flex items-center justify-between text-sm">
            {label && (
              <label
                htmlFor={sliderId}
                className="font-medium text-neutral-800 dark:text-neutral-200"
              >
                {label}
              </label>
            )}
            {showValue && (
              <span className="text-neutral-600 dark:text-neutral-400">
                {value}
                {unit}
              </span>
            )}
          </div>
        )}

        {/* Slider */}
        <input
          ref={ref}
          id={sliderId}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            `
            w-full h-2 appearance-none rounded-full cursor-pointer
            bg-neutral-200 dark:bg-neutral-700
            focus:outline-none
            accent-green-500
            disabled:opacity-50 disabled:cursor-not-allowed

            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-green-500 dark:[&::-webkit-slider-thumb]:bg-green-500
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110

            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-green-500 dark:[&::-moz-range-thumb]:bg-green-500
            [&::-moz-range-thumb]:border-none
            `,
            inputClassName,
          )}
        />

        {/* Min / Max */}
        <div className="flex justify-between text-xs text-neutral-500">
          <span>
            {min}
            {unit}
          </span>
          <span>
            {max}
            {unit}
          </span>
        </div>
      </div>
    );
  },
);

Slider.displayName = "Slider";
