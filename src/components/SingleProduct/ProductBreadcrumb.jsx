import React from "react";
import ArrowRight from "../icons/ArrowRight";
import { Link } from "react-router";
import { cn } from "../../lib/utils";

const ProductBreadcrumb = ({
  brand = "",
  collectionName = "",
  productTitle = "",
}) => {
  const hasCollection = brand || collectionName;

  const collectionQuery = new URLSearchParams({
    ...(brand && { brand }),
    ...(collectionName && { collection: collectionName }),
  });

  const collectionLabel = [brand, collectionName].filter(Boolean).join(" ");

  const LinkClassNames = "text-sm text-muted/80 hover:text-foreground";

  return (
    <>
      <div className="hidden items-center gap-2 lg:gap-3.5 sm:flex">
        <Link to="/" className={cn(LinkClassNames)}>
          Home
        </Link>

        <ArrowRight />

        <Link to="/watches" className={cn(LinkClassNames)}>
          Watches
        </Link>

        {hasCollection && (
          <>
            <ArrowRight />

            <Link
              className={cn(LinkClassNames)}
              to={`/watches?${collectionQuery}`}
            >
              {collectionLabel}
            </Link>
          </>
        )}

        {productTitle && (
          <>
            <ArrowRight />

            <span
              className={cn(
                "inline-block max-w-40 truncate md:font-semibold md:text-brand",
                LinkClassNames,
              )}
            >
              {productTitle}
            </span>
          </>
        )}
      </div>

      {/* Mobile */}
      {hasCollection && (
        <Link
          to={`/watches?${collectionQuery}`}
          className="flex items-center gap-2 sm:hidden"
        >
          <ArrowRight className="rotate-180" />
          <span className={cn("truncate", LinkClassNames)}>
            {collectionLabel}
          </span>
        </Link>
      )}
    </>
  );
};

export default ProductBreadcrumb;
