import { FaTwitter, FaFacebookF, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D3142] text-white pt-12 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 relative inline-block">
                Atikur
              </span>
              <p className="text-gray-300 mt-4 text-sm">
                Crafting beautiful digital experiences with precision and creativity.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:-translate-y-1 transition-all"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:-translate-y-1 transition-all"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-400 rounded-full"></span>
            </h3>
            <address className="text-gray-300 not-italic">
              <p className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-400" /> Dhaka, Bangladesh
              </p>
              <p className="mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" /> hello@atikur.com
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-blue-400" /> +880 1234 567890
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-300 mb-4 md:mb-0 flex items-center">
            © {new Date().getFullYear()} All rights reserved. Designed with
            <FaHeart className="text-red-500 mx-1" /> by
            <span className="font-semibold text-blue-400 ml-1">Atikur Rahman</span>
          </p>

          {/* Back to Top Button */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:-translate-y-1 transition-all"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
