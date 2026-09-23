import { useState } from "react";

const useFeedbacksPagination = (
  feedbacks = [],
  { perPage = 5, minLastPage = 3 } = {},
) => {
  const [page, setPage] = useState(1);

  const totalItems = feedbacks.length;
  const naturalLastPageCount = totalItems % perPage;

  const mergeLastPage =
    totalItems > perPage &&
    naturalLastPageCount > 0 &&
    naturalLastPageCount < minLastPage;

  const totalPages = mergeLastPage
    ? Math.floor(totalItems / perPage)
    : Math.ceil(totalItems / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex =
    mergeLastPage && page === totalPages ? totalItems : startIndex + perPage;

  const currentItems = feedbacks.slice(startIndex, endIndex);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return {
    page,
    totalPages,
    currentItems,
    handlePrev,
    handleNext,
    isFirstPage: page === 1,
    isLastPage: page === totalPages,
  };
};

export default useFeedbacksPagination;
