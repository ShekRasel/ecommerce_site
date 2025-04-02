import Container from '@/components/Container';
import React from 'react';

const Contact = () => {
  return (
    <Container>
      <div className=" mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 font-sans">Contact Us</h1>
        <p className="text-gray-600 text-md mb-4 font-sans">
          Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <form className="space-y-3 font-sans">
          <div>
            <label className="block text-gray-700 text-md mb-1">Your Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 text-md mb-1">Email Address</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 text-md mb-1">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 h-44" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg text-md font-semibold hover:bg-gray-900 transition">
            Send Message
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;