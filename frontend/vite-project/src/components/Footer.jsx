import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className=" bg-white dark:bg-gray-900 text-base-content dark:text-gray-300 px-6 md:px-10 lg:px-16 py-12 md:py-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12">
        
        {/* Branding */}
        <div className="flex flex-col items-start min-w-[200px]">
          <h2 className="text-3xl font-bold text-primary mb-4">MySite</h2>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Empowering your learning journey with quality courses and resources. Join our community today!
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-primary dark:text-gray-400 dark:hover:text-primary" /></a>
            <a href="https://twitter.com" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-primary dark:text-gray-400 dark:hover:text-primary" /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-primary dark:text-gray-400 dark:hover:text-primary" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-primary dark:text-gray-400 dark:hover:text-primary" /></a>
          </div>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-start min-w-[200px]">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary text-gray-700 dark:text-gray-400 dark:hover:text-primary">Home</a></li>
            <li><a href="/courses" className="hover:text-primary text-gray-700 dark:text-gray-400 dark:hover:text-primary">Courses</a></li>
            <li><a href="/about" className="hover:text-primary text-gray-700 dark:text-gray-400 dark:hover:text-primary">About</a></li>
            <li><a href="/contact" className="hover:text-primary text-gray-700 dark:text-gray-400 dark:hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col items-start min-w-[200px]">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-primary text-gray-700 dark:text-gray-400 dark:hover:text-primary">Terms of Use</a></li>
            <li><a className="hover:text-primary text-gray-700 dark:text-gray-400 dark:hover:text-primary">Privacy Policy</a></li>
            <li><a className="hover:text-primary text-gray-700 dark:text-gray-400 dark:hover:text-primary">Jobs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start min-w-[200px]">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-400">
            <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /><span>support@mysite.com</span></li>
            <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-primary" /><span>+91-9876543210</span></li>
            <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /><span>Delhi, India</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-500">
        &copy; {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
