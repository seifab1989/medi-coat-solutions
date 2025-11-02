import React from "react";

export default function GradientCard({ children, className = "", borderWidth = 2, radiusRem = 1.5, style = {}, ...rest }) {
  const bw = Number(borderWidth) || 2;
  const radius = Number(radiusRem) || 1.5;
  return (
    <div
      className={`bg-white p-6 rounded-3xl ${className}`}
      style={{
        border: `${bw}px solid transparent`,
        borderRadius: `${radius}rem`,
        backgroundImage:
          "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: "#000000",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
