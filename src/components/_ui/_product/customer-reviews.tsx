import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";


const CustomerReviews = () => {
     const [rating, setRating] = useState<number>(0);
     const [hoverRating, setHoverRating] = useState<number>(0);
     const [review, setReview] = useState<string>("");

     const handleRating = (rate: number) => {
       setRating(rate);
     };

     const handleHover = (rate: number) => {
       setHoverRating(rate);
     };

     const handleSubmit = () => {
       // Submit review logic here
       console.log("Review submitted:", rating, review);
     };
  return (
    <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex-1 flex-col items-center space-y-4">
        <div className="flex items-center gap-3">
          <div className="text-6xl text-blue-500 font-bold">0.0</div>

          <div>
            <div className="text-lg">Average Rating</div>
            <div className="text-yellow-500 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <div className="text-sm text-gray-500">
                (0 Reviews & 0 Ratings)
              </div>
            </div>
          </div>
        </div>

        <div className="text-4xl text-blue-500 font-bold">66.7%</div>
        <div className="text-sm">Recommended (2 of 3)</div>
        <div className="flex flex-col space-y-2 w-full">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center space-x-2">
              <div className="text-yellow-500 flex">
                {Array(star)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
                {Array(5 - star)
                  .fill(0)
                  .map((_, i) => (
                    <FaRegStar key={i} />
                  ))}
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <div className="text-sm text-gray-500">0%</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Submit Your Review</h2>
        <div className="flex items-center mb-4">
          <span className="mr-2">Your Rating Of This Product :</span>
          <div className="text-yellow-500 flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                onMouseEnter={() => handleHover(star)}
                onMouseLeave={() => handleHover(0)}
                className="focus:outline-none"
              >
                {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar />}
              </button>
            ))}
          </div>
          <span className="ml-2">
            {rating === 5
              ? "Excellent"
              : rating === 4
              ? "Very Good"
              : rating === 3
              ? "Good"
              : rating === 2
              ? "Fair"
              : rating === 1
              ? "Poor"
              : "Satisfactory"}
          </span>
        </div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write Your Review Here..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows={5}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
        >
          SUBMIT REVIEW
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
