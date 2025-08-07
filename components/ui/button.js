import React from "react";

export function Button({ children, className = "", variant = "default", ...props }) {
  const base = "px-4 py-2 font-medium rounded text-white";
  const variants = {
    default: "bg-blue-600 hover:bg-blue-700",
    outline: "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
