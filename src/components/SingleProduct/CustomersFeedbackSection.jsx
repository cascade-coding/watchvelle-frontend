import React from "react";
import WriteAReview from "./WriteAReview";
import Feedbacks from "./Feedbacks";

const CustomersFeedbackSection = () => {
  return (
    <div className="pt-8 md:pt-9 pb-20">
      <p className="font-semibold md:font-bold text-base md:text-[24px] tracking-[1px] text-brand mb-4 md:mb-7">
        Customers Feedback
      </p>

      <WriteAReview />

      <div className="pt-11">
        <Feedbacks />
      </div>
    </div>
  );
};

export default CustomersFeedbackSection;
