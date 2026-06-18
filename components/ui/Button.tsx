import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost" | "link" | "white" | "glass";
  isLoading?: boolean;
  size?: "sm" | "md" | "lg" | "icon";
  rounded?: "md" | "lg" | "xl" | "full" | "none" | "r-md";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  isLoading = false,
  size = "md",
  rounded = "xl",
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-base",
    icon: "p-2",
  };

  const roundedStyles = {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
    none: "rounded-none",
    "r-md": "rounded-r-md rounded-l-none",
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 focus-visible:ring-indigo-500 border border-transparent",
    secondary:
      "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 focus-visible:ring-zinc-400 border border-zinc-200",
    outline:
      "bg-transparent border border-zinc-200 hover:bg-zinc-50 text-zinc-700 focus-visible:ring-zinc-400",
    danger:
      "bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 focus-visible:ring-rose-500 border border-transparent",
    ghost:
      "bg-transparent hover:bg-zinc-100 text-zinc-700 focus-visible:ring-zinc-400 border border-transparent",
    link:
      "bg-transparent text-gray-700 hover:text-indigo-600 border border-transparent shadow-none focus-visible:ring-0 active:scale-100 !px-0",
    white:
      "bg-white text-gray-900 border border-transparent hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] focus-visible:ring-gray-200",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 focus-visible:ring-white/50 shadow-none",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${roundedStyles[rounded]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
