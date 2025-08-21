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
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

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
      <section className="max-w-6xl w-full p-4 sm:p-6 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mx-auto mt-20 md:my-12 lg:my-16 relative overflow-hidden">
        {/* Left Side */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4 md:space-y-6 relative z-10 text-center lg:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Are you looking for a{" "}
            <span className="text-blue-500 block sm:inline-block mt-2 sm:mt-0">
              MERN Stack Developer?
            </span>
          </motion.h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-lg">
            I build stunning, functional websites with React. Explore my projects and see my
            passion for seamless user experiences.
          </p>

          {/* Buttons Container - Made more responsive */}
          <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-4 relative z-10">
           <button
  onClick={handleDownload}
  className="bg-gray-800 text-white px-4 py-3 sm:px-5 sm:py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-900 hover:shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-48"
>
  <i className="fas fa-download mr-2"></i> Download Resume
</button>


<Link to="/resume" className="w-full sm:w-auto flex">
  <button
    onClick={() => setIsModalOpen(true)}
    className="border border-gray-800 text-gray-800 px-8 py-3 sm:px-7 sm:py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
  >
    <i className="fas fa-eye mr-2"></i> Preview Resume
  </button>
</Link>
          </div>
        </div>

        {/* Right Side - Animated Tools */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10 mt-4 lg:mt-0">
          <div className="grid grid-cols-3 xs:grid-cols-6 lg:flex gap-4 sm:gap-6 justify-items-center">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                className="text-3xl sm:text-4xl cursor-pointer flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={tool.name}
              >
                {tool.icon}
                <span className="text-xs mt-1 hidden xs:inline-block">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backgrounds */}
        <BackgroundBlobs />
        <RadialBackground />
      </section>

      {/* Resume Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <span
            className="absolute top-4 right-4 sm:top-6 sm:right-8 text-white text-3xl sm:text-4xl cursor-pointer z-50"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </span>

          <div className="w-full h-4/5 bg-white rounded-lg overflow-hidden max-w-4xl">
            <iframe
              src={resumeUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Resume Preview"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;