import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import "./bento-grid.css";

const BentoGrid = ({ children, className }) => {
  return (
    <div className={cn("bento-grid", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  onClickButton, // Optional custom click handler for button
}) => {
  return (
    <div className={cn("bento-card group", className)}>
      {/* Background layer */}
      <div className="bento-bg-container">{background}</div>

      {/* Primary content info wrapper */}
      <div className="bento-info-panel">
        {Icon && <div className="bento-icon-wrapper">{Icon}</div>}
        <h3 className="bento-title">{name}</h3>
        <p className="bento-description">{description}</p>
      </div>

      {/* Hover action CTA panel */}
      <div className="bento-action-panel">
        {onClickButton ? (
          <Button
            variant="ghost"
            size="sm"
            className="bento-button"
            onClick={onClickButton}
          >
            {cta}
            <ArrowRight size={14} className="bento-arrow-icon" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="bento-button"
          >
            <a href={href}>
              {cta}
              <ArrowRight size={14} className="bento-arrow-icon" />
            </a>
          </Button>
        )}
      </div>

      {/* Card tint hover overlay */}
      <div className="bento-hover-overlay" />
    </div>
  );
};

export { BentoCard, BentoGrid };
