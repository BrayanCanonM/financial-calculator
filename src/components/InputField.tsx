"use client";

import React from "react";

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
}: InputFieldProps) {
  return (
    <label className="flex flex-col gap-2 mb-4">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="placeholder:text-gray-400 border border-purple-200 rounded-2xl px-4 py-3 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
        inputMode="decimal"
      />
    </label>
  );
}