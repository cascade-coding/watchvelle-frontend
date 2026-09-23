import { useState } from "react";
import StarsLines from "../icons/StarsLines";

const TRUNCATE_LENGTH = 180;

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const FeedbackItem = ({ feedback }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLong = feedback.text.length > TRUNCATE_LENGTH;

  const displayText =
    isLong && !isExpanded
      ? `${feedback.text.slice(0, TRUNCATE_LENGTH).trim()}...`
      : feedback.text;

  return (
    <div className="py-4">
      <div className="flex gap-x-5">
        {/* Avatar */}
        <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#696969] bg-brand">
          <span className="font-semibold text-sm tracking-[1px] text-white">
            {getInitials(feedback.name)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold sm:font-bold tracking-[0.5px]">
            <span className="text-base text-brand">{feedback.name}</span>
            <span className="text-sm text-success">· Verified Buyer</span>
          </p>

          <div className="pt-1.5 sm:pt-2">
            <StarsLines
              className="[&_path]:fill-brand"
              rating={feedback.rating}
            />
          </div>

          <p className="text-foreground text-base font-medium tracking-[0.5px] leading-relaxed mt-3 max-w-180">
            {displayText}
            {isLong && (
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="ml-0.5 text-brand font-semibold tracking-[0.5px] hover:underline hover:cursor-pointer"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>

          <p className="font-semibold text-[13px] text-muted tracking-[0.5px] mt-2.5">
            {feedback.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
