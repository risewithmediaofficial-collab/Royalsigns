import React from "react";
import "./FlippingCard.css";

export function FlippingCard({
  frontContent,
  backContent,
  height = 300,
  width = 320,
  className = "",
}) {
  return (
    <div
      className={`fc-perspective ${className}`}
      style={{ "--fc-height": `${height}px`, "--fc-width": `${width}px` }}
    >
      <div className="fc-inner">
        {/* Front face */}
        <div className="fc-face fc-front">
          {frontContent}
        </div>
        {/* Back face — already dark via .fc-back CSS */}
        <div className="fc-face fc-back">
          {backContent}
        </div>
      </div>
    </div>
  );
}

