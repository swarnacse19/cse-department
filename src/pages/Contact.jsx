import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            Department of Computer Science & Engineering <br />
            University of Barishal, Bangladesh
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Phone:</span> +8801824311959
            </li>
            <li>
              <span className="font-semibold">Email:</span> cse@bu.ac.bd
            </li>
            <li>
              <span className="font-semibold">Address:</span> Kornokathi, Barishal, Bangladesh
            </li>
          </ul>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Send us a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
