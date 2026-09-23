import { useCustomerFeedbacks } from "../../store/useCustomerFeedbacks";
import useFeedbacksPagination from "../../hooks/useFeedbacksPagination";
import FeedbackItem from "./FeedbackItem";
import NextArrow from "../icons/NextArrow";
import BackArrow from "../icons/BackArrow";
import PaginationButton from "./PaginationButton";

const Feedbacks = () => {
  const feedbacks = useCustomerFeedbacks((state) => state.CUSTOMER_FEEDBACKS);

  const {
    page,
    totalPages,
    currentItems,
    handlePrev,
    handleNext,
    isFirstPage,
    isLastPage,
  } = useFeedbacksPagination(feedbacks, { perPage: 5, minLastPage: 3 });

  return (
    <div className="w-full max-w-200">
      {/* Feedbacks list */}
      <div className="flex flex-col gap-2">
        {currentItems.map((feedback) => (
          <FeedbackItem key={feedback.id} feedback={feedback} />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-4.5 mt-8">
        <PaginationButton
          onClick={handlePrev}
          disabled={isFirstPage}
          ariaLabel="Previous page"
        >
          <BackArrow />
        </PaginationButton>

        <span className="text-sm text-muted">
          {page} of {totalPages}
        </span>

        <PaginationButton
          onClick={handleNext}
          disabled={isLastPage}
          ariaLabel="Next page"
        >
          <NextArrow />
        </PaginationButton>
      </div>
    </div>
  );
};

export default Feedbacks;
