import React, { useState } from "react";

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = isExpanded ? description.full : description.excerpt;

  return (
    <div>
      <p className="font-semibold md:font-bold text-base md:text-lg text-brand mb-2 md:mb-3">
        Description
      </p>

      <p className="text-base text-foreground leading-relaxed max-w-[900px]">{text}</p>

      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-1.5 text-[13px] font-semibold text-brand hover:text-foreground transition-colors hover:cursor-pointer"
      >
        {isExpanded ? "Read Less ←" : "Read More →"}
      </button>
    </div>
  );
};

export default ProductDescription;
