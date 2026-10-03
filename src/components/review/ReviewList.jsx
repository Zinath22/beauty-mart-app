// "use client";

// import { useEffect, useState } from "react";

// export default function ReviewList({ productId }) {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetch(`/api/reviews?productId=${productId}`)
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, [productId]);

//   return (
//     <div className="mt-10">

//       <h2 className="text-2xl font-bold mb-5">
//         Customer Reviews
//       </h2>

//       {reviews.length === 0 ? (
//         <p>No reviews yet</p>
//       ) : (
//         reviews.map((review) => (
//           <div
//             key={review._id}
//             className="border rounded-xl p-4 mb-3"
//           >
//             <h3 className="font-bold">
//               {review.name}
//             </h3>

//             <p>
//               {"⭐".repeat(review.rating)}
//             </p>

//             <p className="mt-2">
//               {review.review}
//             </p>
//           </div>
//         ))
//       )}

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function ReviewList({
  productId,
}) {
  const [reviews, setReviews] =
    useState([]);

  useEffect(() => {
    fetch(
      `/api/reviews?productId=${productId}`
    )
      .then((res) => res.json())
      .then((data) =>
        setReviews(data)
      );
  }, [productId]);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Customer Reviews
      </h2>

      {reviews.length === 0 ? (
        <p>
          No reviews yet
        </p>
      ) : (
        reviews.map((review) => (
          <div
            key={review._id}
            className="border rounded-xl p-4 mb-3"
          >
            <h3 className="font-bold">
              {review.name}
            </h3>

            <p className="text-yellow-500">
              {"⭐".repeat(
                review.rating
              )}
            </p>

            <p className="mt-2">
              {review.review}
            </p>
          </div>
        ))
      )}
    </div>
  );
}