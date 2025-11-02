import React from "react";

export default function GradientBar({ className = "", height = "h-3" }) {
  return (
    <div
      className={`${height} bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5 ${className}`}
    />
  );
}
