import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-base-200 text-base-content px-4 py-16">
        <div className="w-full max-w-2xl bg-base-100 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-center text-gray-500 mb-8">
            Have questions, feedback, or suggestions? Fill out the form below.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1 font-medium">Message</label>
              <textarea
                placeholder="Your message"
                rows={5}
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full text-white text-md font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
