import React from "react";
import StarsGolden from "../icons/StarsGolden";
import StarsLines from "../icons/StarsLines";
import StarLine from "./StarLine";

const StarsDisplay = () => {
  return (
    <div className="flex gap-2.5 min-h-[200px] w-full max-w-[800px]">
      <div className="bg-[#F9FAFB]">
        <p className="font-bold text-4xl lg:text-6xl text-gold-hover">5.0</p>
        <StarsGolden />
      </div>

      <div className="w-[400px] bg-[#F9FAFB] py-8 px-6">
        <div className="w-full flex items-center gap-3.5">
          <StarLine />
          <StarsLines rating={5} />
        </div>

        <div className="flex flex-col gap-5 mt-5 opacity-50">
          <div className="w-full flex items-center gap-3.5">
            <StarLine />
            <StarsLines rating={4} />
          </div>
          <div className="w-full flex items-center gap-3.5">
            <StarLine />
            <StarsLines rating={3} />
          </div>
          <div className="w-full flex items-center gap-3.5">
            <StarLine />
            <StarsLines rating={2} />
          </div>
          <div className="w-full flex items-center gap-3.5">
            <StarLine />
            <StarsLines rating={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarsDisplay;
