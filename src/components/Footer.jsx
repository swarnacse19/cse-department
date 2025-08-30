import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* University Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Department of CSE</h2>
          <p className="text-sm text-gray-200">
            University of Barishal <br />
            Barishal, Bangladesh
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/programs" className="hover:text-white">Programs</a></li>
            <li><a href="/faculty" className="hover:text-white">Faculty</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-200 mt-8 border-t border-gray-400 pt-4">
        © {new Date().getFullYear()} Department of CSE, University of Barishal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
