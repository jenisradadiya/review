import React, { useState } from "react";

const Review = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    mobileNumber: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.mobileNumber && newReview.rating && newReview.comment) {
      console.log("Review Submitted:", newReview);
      // Handle saving the review (e.g., send to API, store in state, etc.)
      setNewReview({ name: "", mobileNumber: "", rating: 0, comment: "" });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto mt-3 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Leave a Review</h1>

      {/* Star Rating Selection */}
      <div className="flex justify-center space-x-2 mb-6">
        <p className="font-semibold">Rating: </p>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            className={`text-3xl ${newReview.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
            onClick={() => setNewReview({ ...newReview, rating: star })}
          >
            ★
          </button>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />

        {/* Mobile Number Input */}
        <input
          type="tel"
          placeholder="Your Mobile Number"
          value={newReview.mobileNumber}
          onChange={(e) =>
            setNewReview({ ...newReview, mobileNumber: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-lg"
        />

        {/* Comment Input */}
        <textarea
          placeholder="Your Comment"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows="4"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
