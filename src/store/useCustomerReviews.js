import { create } from "zustand";

const rand = () => Math.random().toString(36).slice(2, 8);

export const chunkIntoColumns = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export const useCustomerReviews = create((set, get) => ({
  CUSTOMER_REVIEWS: [
    {
      id: rand(),
      name: "William Taylor",
      date: "9 Aug 2026",
      rating: 5,
      text: "Everything was handled perfectly. The watch arrived securely packaged, looked exactly like the pictures, and the overall quality is excellent.",
    },
    {
      id: rand(),
      name: "Amelia Moore",
      date: "17 Aug 2026",
      rating: 5,
      text: "Love the design. Simple, elegant, and easy to wear with almost anything.",
    },
    {
      id: rand(),
      name: "Lucas Wright",
      date: "14 Aug 2026",
      rating: 5,
      text: "Great looking timepiece and excellent packaging. The attention to detail is impressive.",
    },
    {
      id: rand(),
      name: "Lily Walker",
      date: "10 Aug 2026",
      rating: 5,
      text: "Beautiful watch. It feels incredibly well made.",
    },
    {
      id: rand(),
      name: "Henry Lewis",
      date: "1 Aug 2026",
      rating: 5,
      text: "Very impressed with the entire experience. The ordering process was straightforward, delivery was surprisingly quick, and the watch itself feels fantastic on the wrist. Exactly the kind of piece I was looking for.",
    },
    {
      id: rand(),
      name: "Alexander Hall",
      date: "7 Aug 2026",
      rating: 5,
      text: "Bought this as a birthday gift and ended up wanting one for myself. The presentation was excellent and the watch looked even better than expected.",
    },
    {
      id: rand(),
      name: "Jacob Parker",
      date: "6 Aug 2026",
      rating: 5,
      text: "Excellent purchase. The watch feels solid and looks incredibly refined. Everything from ordering to delivery was smooth.",
    },
    {
      id: rand(),
      name: "Logan Edwards",
      date: "11 Aug 2026",
      rating: 5,
      text: "Very happy with the purchase. Clean design, comfortable fit, and the finishing is excellent.",
    },
    {
      id: rand(),
      name: "Samuel Brooks",
      date: "10 Aug 2026",
      rating: 5,
      text: "Ordered this after seeing it on the site and I'm glad I did. The dial looks incredible in natural light, and the strap feels comfortable even after wearing it all day.",
    },
    {
      id: rand(),
      name: "Christopher Evans",
      date: "15 Aug 2026",
      rating: 5,
      text: "The quality is impressive for the price. I've been wearing it every day since it arrived.",
    },
    {
      id: rand(),
      name: "Thomas Richardson",
      date: "4 Aug 2026",
      rating: 5,
      text: "This was my first purchase from Watchvelle and I'm genuinely impressed. The watch feels substantial without being uncomfortable, and the finishing is excellent.",
    },
    {
      id: rand(),
      name: "Matthew Rogers",
      date: "7 Aug 2026",
      rating: 5,
      text: "Everything from ordering to delivery was smooth. The watch itself is gorgeous and keeps excellent time so far.",
    },
  ],
}));
