import React from "react";

export default function Container({ as: As = "main", className = "", children, ...rest }) {
  return (
    <As className={`flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 ${className}`} {...rest}>
      {children}
    </As>
  );
}
