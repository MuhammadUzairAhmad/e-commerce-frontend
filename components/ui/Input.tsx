import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  touched?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  touched,
  id,
  className = "",
  ...props
}) => {
  const hasError = touched && !!error;

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-wider text-zinc-500 select-none"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:outline-none focus:ring-4 bg-white text-zinc-900 placeholder-zinc-400
          ${
            hasError
              ? "border-rose-500 focus:ring-rose-500/10 focus:border-rose-500"
              : "border-zinc-200 focus:ring-indigo-500/10 focus:border-indigo-500"
          }
          ${className}
        `}
        {...props}
      />
      {hasError && (
        <span className="text-xs font-semibold text-rose-600 animate-fadeIn">
          {error}
        </span>
      )}
    </div>
  );
};
