import React from "react";
import WriteAReview from "./WriteAReview";

const CustomersFeedbackSection = () => {
  return (
    <div className="pt-8 md:pt-9">
      <p className="font-semibold md:font-bold text-base md:text-[24px] tracking-[1px] text-brand mb-2 md:mb-3">
        Customers Feedback
      </p>

      <WriteAReview />

      
    </div>
  );
};

export default CustomersFeedbackSection;
