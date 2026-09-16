import { cn } from "../../../../lib/utils";

const FooterColumnTitle = ({
  children,
  className = "",
  as: Tag = "p",
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "font-medium md:font-semibold text-base uppercase tracking-[1.5px] text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default FooterColumnTitle;