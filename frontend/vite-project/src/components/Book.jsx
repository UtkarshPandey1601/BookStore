import React from 'react';

function BookCard({ book }) {
  return (
    <div className="
      card w-64 md:w-72 lg:w-80
      bg-white dark:bg-gray-800
      shadow-lg hover:shadow-xl
      transition-all duration-300 ease-in-out
      rounded-2xl overflow-hidden
      transform hover:-translate-y-1
      border border-gray-200 dark:border-gray-700
    ">
      {/* Book Image Section */}
      <figure className="
        relative h-48 bg-gray-100 dark:bg-gray-700
        flex items-center justify-center
        overflow-hidden
      ">
        {book.url ? (
          <img
            src={book.url}
            alt={book.name}
            className="object-contain h-full w-full p-4"
            loading="lazy"
          />
        ) : (
          <div className="text-gray-400 dark:text-gray-500 text-sm">
            No Image Available
          </div>
        )}

      </figure>

      <div className="card-body p-5">
        {/* Book Title */}
        <h2 className="
          card-title text-xl font-semibold text-gray-900 dark:text-white
          truncate
          mb-1
        ">
          {book.name}
        </h2>

        {/* Book Category */}
        <p className="
          text-sm text-gray-600 dark:text-gray-400
          capitalize
          mb-3
        ">
          {book.category}
        </p>

        {/* Book Price */}
        <div className="
          mt-2 text-primary font-bold text-lg
          dark:text-blue-400
        ">
          {book.price === '0' || book.price === 0 ? 'Free' : `₹${book.price}`}
        </div>

        {/* Call to Action Button */}
        <div className="card-actions mt-5">
          <button className="
            btn btn-primary w-full
            py-2 px-4 rounded-lg
            text-white font-medium
            bg-blue-600 hover:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            transition-all duration-200 ease-in-out
            transform hover:scale-105
          ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;