import React from "react";
import SectionHeading from "../shared/SectionHeading";
import Container from "../shared/Container";
import Stars from "../icons/Stars";
import {
  chunkIntoColumns,
  useCustomerReviews,
} from "../../store/useCustomerReviews";

const CustomerReviews = () => {
  const reviews = useCustomerReviews((state) => state.CUSTOMER_REVIEWS);

  const columns = chunkIntoColumns(reviews, 3);

  return (
    <div className="bg-white">
      <Container className="pt-16 md:pt-20 pb-18 ">
        <SectionHeading
          title="CUSTOMER REVIEWS"
          subtitle="Rated by 18,803 customers"
          subtitleClassName="text-brand"
        />

        {/* Review cards wrapper */}

        <div className="no-scrollbar pt-10 w-full flex gap-x-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {/* Review cards */}

          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-row lg:flex-col gap-5">
              {column.map((review) => (
                <div key={review.id} className="min-w-75 max-w-80">
                  <Stars />
                  <p>
                    {review.name} · {review.date}
                  </p>
                  <p>{review.text}</p>
                </div>
              ))}
            </div>
          ))}

          {/* Review cards */}
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
