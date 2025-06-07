import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BookCard from './Book'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Course() {
  const [freeBooks, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book/getbook");
        console.log(res.data);
        setBook(res.data.books);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <Navbar />
     
      <main className="min-h-screen bg-base-100 text-base-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative px-6 py-16 md:py-24">
            <div className="max-w-6xl mx-auto">
              {/* Welcome Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 text-success border border-success/30">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-sm">Course Purchased Successfully</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                  Welcome to Your Learning Journey!
                </h1>
                <p className="text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
                  We're thrilled you've joined our course! Here's your exclusive collection of 
                  <span className="font-semibold text-primary"> free premium resources</span> to accelerate your learning.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-base-200/50 backdrop-blur-sm border border-base-300 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{freeBooks.length}+</h3>
                  <p className="text-base-content/70">Free Books</p>
                </div>

                <div className="bg-base-200/50 backdrop-blur-sm border border-base-300 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Instant</h3>
                  <p className="text-base-content/70">Access</p>
                </div>

                <div className="bg-base-200/50 backdrop-blur-sm border border-base-300 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-2">Premium</h3>
                  <p className="text-base-content/70">Quality</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-base-200/80 backdrop-blur-sm border border-base-300">
                  <span className="text-base-content/70 mr-3">Ready to start?</span>
                  <div className="flex items-center">
                    <span className="text-primary font-semibold">Scroll down to explore</span>
                    <svg className="w-4 h-4 ml-2 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                Your Free Resource Library
              </h2>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                Handpicked books and materials to complement your course and enhance your learning experience.
              </p>
            </div>

            {/* Book Grid */}
            <div className="flex flex-wrap justify-center gap-6">
              {freeBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Course