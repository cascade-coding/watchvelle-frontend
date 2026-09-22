import React, { useState } from "react";
import StarsDisplay from "./StarsDisplay";
import ReviewInput from "./ReviewInput";
import RatingInput from "./RatingInput";
import Button from "../shared/Button";

const WriteAReview = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div>
      <StarsDisplay
        toggleReviewForm={() => setShowReviewForm((prev) => !prev)}
      />

      {showReviewForm && (
        <div className="pt-11">
          <p className="font-semibold text-lg sm:text-xl text-brand tracking-[0.5px] pb-7.5">
            Write a Review
          </p>

          <div className="flex flex-col gap-5.5 md:gap-7.5 max-w-150">
            <ReviewInput
              label="Your Name"
              name="name"
              type="text"
              placeholder="John Reed"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <ReviewInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <ReviewInput
              label="Order Number"
              name="order_number"
              type="text"
              placeholder="WV-10482736"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />

            <div>
              <label
                className={
                  "block mb-2.5 text-sm sm:text-base font-medium text-foreground tracking-[0.5px]"
                }
              >
                Your Rating
              </label>

              <RatingInput value={rating} onChange={setRating} />
            </div>

            <ReviewInput
              label="Your Review"
              name="review"
              type="textarea"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            <div>
              <Button
                onClick={() => {
                  console.log(name, email, orderNumber, rating, reviewText);
                }}
                className="text-[15px] font-bold text-white tracking-[0.5px] hover:bg-zinc-700"
              >
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WriteAReview;
