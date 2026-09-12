import React from "react";
import { cn } from "../../lib/utils";

const SectionHeading = ({
  title,
  coloredTitle,
  subtitle,
  className = "",
  titleClassName = "",
  coloredTitleClassName = "",
  subtitleClassName = "",
  id = "",
  align = "center",
  ...props
}) => {
  const alignClasses = {
    center: "text-left items-start xl:text-center xl:items-center",
    left: "text-left items-start",
  };

  return (
    <div
      id={id}
      className={cn("flex flex-col gap-3", alignClasses[align], className)}
      {...props}
    >
      <h2
        className={cn(
          "font-brand font-bold text-2xl sm:text-[28px] md:text-3xl lg:text-4xl tracking-[1.4px] text-foreground",
          titleClassName,
        )}
      >
        <span>{title} </span>
        <span className={cn("text-gold", coloredTitleClassName)}>
          {coloredTitle && coloredTitle}
        </span>
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-sm md:text-base font-normal md:font-medium text-muted leading-relaxed",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
