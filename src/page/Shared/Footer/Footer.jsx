import { FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-6 pb-8 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="container mx-auto max-w-7xl">
        {/* Divider */}
        <div className="border-t border-blue-400 pt-1"></div>

        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 space-y-4 sm:space-y-0">
          
          {/* Name Tag */}
          <p className="text-3xl font-bold text-blue-500 text-center sm:text-left">
            &lt;Atikur/&gt;
          </p>

          {/* Copyright */}
          <p className="text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1">
            © {new Date().getFullYear()} All rights reserved. Designed with
            <FaHeart className="text-red-500 mx-1 inline" /> by
            <span className="font-semibold text-blue-400 ml-1">Atikur Rahman</span>
          </p>

          {/* Back to Top Button */}
          <div className="flex justify-center sm:justify-end">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <FaArrowUp className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
