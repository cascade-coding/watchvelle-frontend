import StarsGolden from "../icons/StarsGolden";
import StarsLines from "../icons/StarsLines";
import StarLine from "./StarLine";
import Button from "../shared/Button";

const StarsDisplay = ({ toggleReviewForm = null }) => {
  return (
    <div className="flex flex-col min-[480px]:flex-row gap-2.5 min-h-50 w-full max-w-200">
      <div className="bg-[#F9FAFB] w-full min-[480px]:w-60 md:w-70 flex flex-col items-center justify-center py-16 px-6">
        <p className="font-bold text-5xl lg:text-6xl text-gold-hover pb-3">
          5.0
        </p>
        <StarsGolden />
      </div>

      <div className="w-full min-[480px]:w-100 lg:w-120 bg-[#F9FAFB] py-8 px-6">
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

        {/* Button */}
        <div className="mt-5">
          <Button
            onClick={toggleReviewForm}
            className="bg-gold-hover text-white hover:bg-gold font-bold text-sm tracking-[0.5px] h-10.5"
          >
            Write A Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StarsDisplay;
