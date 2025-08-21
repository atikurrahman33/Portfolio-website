import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundBlobs from "./BackgroundBlobs";
import RadialBackground from "./RadialBackground";

const tools = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "JavaScript", icon: "🟨" },
  { name: "HTML5", icon: "📄" },
  { name: "CSS3", icon: "🎨" },
];

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeUrl =
    "/public/Document/Atikur_Rahman_2.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Atikur_Rahman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="max-w-6xl w-full p-4 sm:p-8 lg:p-12 grid lg:grid-cols-12 gap-8 mx-auto mt-20 relative overflow-hidden">
        {/* Left Side */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 relative z-10">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Are you looking for a{" "}
            <span className="text-blue-300 border-gray-800 text-3xl sm:text-4xl md:text-5xl">
              MERN Stack Developer?
            </span>
          </motion.h1>
          <p className="text-gray-700 text-base sm:text-lg">
            I build stunning, functional websites with React. Explore my projects and see my
            passion for seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-4">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-900 hover:shadow-lg transition-all duration-300"
            >
              <i className="fas fa-download mr-2"></i> Download Resume
            </button>
            <Link to="/resume" className="w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto border border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-eye mr-2"></i> Preview Resume
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Animated Tools */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10 flex-wrap gap-6">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              className="text-4xl cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={tool.name}
            >
              {tool.icon}
            </motion.div>
          ))}
        </div>

        {/* Backgrounds */}
        <BackgroundBlobs />
        <RadialBackground />
      </section>

      {/* Resume Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <span
            className="absolute top-6 right-4 sm:right-8 text-white text-4xl cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </span>

          <div className="w-full sm:w-4/5 h-96 sm:h-4/5 bg-white rounded-lg overflow-hidden">
            <iframe
              src={resumeUrl}
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
