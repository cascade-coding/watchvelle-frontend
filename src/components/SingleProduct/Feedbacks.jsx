import React, { useState } from "react";
import { useCustomerFeedbacks } from "../../store/useCustomerFeedbacks";
import StarsLines from "../icons/StarsLines";

const PER_PAGE = 5;
const MIN_LAST_PAGE = 3;

const Feedbacks = () => {
  const feedbacks = useCustomerFeedbacks((state) => state.CUSTOMER_FEEDBACKS);
  const [page, setPage] = useState(1);

  const totalItems = feedbacks.length;

  const naturalLastPageCount = totalItems % PER_PAGE;

  const mergeLastPage =
    totalItems > PER_PAGE &&
    naturalLastPageCount > 0 &&
    naturalLastPageCount < MIN_LAST_PAGE;

  const totalPages = mergeLastPage
    ? Math.floor(totalItems / PER_PAGE)
    : Math.ceil(totalItems / PER_PAGE);

  let startIndex = (page - 1) * PER_PAGE;
  let endIndex = startIndex + PER_PAGE;

  if (mergeLastPage && page === totalPages) {
    endIndex = totalItems;
  }

  const currentPageFeedbacks = feedbacks.slice(startIndex, endIndex);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div>
      {/* Feedbacks list */}
      <div className="flex flex-col gap-6">
        {currentPageFeedbacks.map((feedback) => (
          <div key={feedback.id} className="border-b border-border pb-6">
            <div className="flex gap-x-5">
              <div className="size-12 rounded-full flex items-center justify-center border-2 border-[#696969] bg-brand">
                <span className="font-semibold text-sm tracking-[1px] text-white">
                  {feedback.name.split(" ")[0][0]}
                  {feedback.name.split(" ")[1][0]}
                </span>
              </div>

              <div>
                <div className="mb-2">
                  <p className="font-semibold sm:font-bold tracking-[0.5px]">
                    <span className=" text-base text-brand">
                      {feedback.name}
                    </span>
                    <span className="text-sm text-success">
                      · Verified Buyer
                    </span>
                  </p>
                  <div className="pt-2">
                    <StarsLines
                      rating={feedback.rating}
                      className="fill-brand"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-muted leading-relaxed mt-2">
                    {feedback.text}
                  </p>

                  <span className="text-sm text-muted">{feedback.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="bg-gray-100 text-foreground hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="text-sm text-muted">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="bg-gray-100 text-foreground hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feedbacks;
