import { cn } from "../../lib/utils";

const ReviewInput = ({
  label,
  name,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  labelClassName = "",
  ReviewInputClassName = "",
  required = false,
  disabled = false,
  autoComplete = "off",
  ...props
}) => {
  const ReviewInputId = id || name;
  const isTextarea = type === "textarea";

  const sharedProps = {
    id: ReviewInputId,
    name,
    placeholder,
    value,
    onChange,
    required,
    disabled,
    autoComplete,
    className: cn(
      "block w-full outline-none placeholder:text-muted text-foreground text-sm px-3 border-[1.5px] border-[#DDDDDD] rounded-md transition focus:border-gold",
      "h-12",
      isTextarea && "h-[120px] py-3 resize-none custom-scrollbar",
      ReviewInputClassName,
    ),
    ...props,
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={ReviewInputId}
          className={cn(
            "block mb-2.5 text-sm sm:text-base font-medium text-foreground tracking-[0.5px]",
            labelClassName,
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {isTextarea ? (
        <textarea {...sharedProps}></textarea>
      ) : (
        <input type={type} {...sharedProps} />
      )}
    </div>
  );
};

export default ReviewInput;
