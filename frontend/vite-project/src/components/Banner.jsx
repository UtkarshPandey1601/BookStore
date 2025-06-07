import React from 'react';

function Banner() {
  return (
    <div className="
      mt-20 lg:mt-24                
      px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-24
      bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800
      flex flex-col lg:flex-row items-center justify-between
      gap-10 md:gap-12 lg:gap-16                 
      rounded-b-3xl shadow-xl           
    ">
      {/* Text Section */}
      <div className="lg:w-3/5 space-y-6 md:space-y-8 text-center lg:text-left">
        <h1 className="
          text-4xl md:text-5xl lg:text-6xl     {/* Larger, responsive heading */}
          font-extrabold leading-tight text-gray-900 dark:text-white
        ">
          Unlock the <span className="text-primary">Power of Books</span> and Knowledge
        </h1>
        <p className="
          text-lg md:text-xl text-base-content/80 dark:text-gray-300 
          max-w-prose mx-auto lg:mx-0          
        ">
          Dive into a world of knowledge and wisdom. Explore thousands of captivating books across diverse genres and ignite your learning journey today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email to get started..."
            className="
              input input-bordered input-lg
              w-full sm:w-80 md:w-96
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              border-gray-300 dark:border-gray-600
              focus:ring-2 focus:ring-primary focus:border-transparent
            "
            aria-label="Email for getting started"
          />
          <button className="
            btn btn-primary btn-lg
            w-full sm:w-auto px-8 py-3
            rounded-full transition-transform transform hover:scale-105
          ">
            Start Learning
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-2/5 flex justify-center lg:justify-end">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="A stack of beautifully arranged books"
          className="
            rounded-2xl shadow-2xl
            w-full max-w-md lg:max-w-none
            object-cover h-64 sm:h-72 lg:h-96
            transition-transform transform hover:scale-[1.02] duration-300
          "
        />
      </div>
    </div>
  );
}

export default Banner;