import { useState } from "react";
import { motion } from "framer-motion";

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
      <section className="max-w-5xl w-full p-8 lg:p-12 grid lg:grid-cols-12 gap-8 mx-auto my-7">
        {/* Left Side */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Are you looking for a{" "}
            <p className="text-blue-300 border-gray-800 text-4xl">MERN Stack Developer?</p>
          </motion.h1>
          <p className="text-gray-700 text-lg">
            I build stunning, functional websites with React. Explore my projects and see my
            passion for seamless user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleDownload}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-900 hover:shadow-lg transition-all duration-300"
            >
              <i className="fas fa-download mr-2"></i> Download Resume
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              <i className="fas fa-eye mr-2"></i> Preview Resume
            </button>
          </div>
        </div>

        {/* Right Side - Animated Tools */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="flex space-x-6">
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
        </div>
      </section>

      {/* Resume Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
          onClick={() => setIsModalOpen(false)}
        >
          <span
            className="absolute top-6 right-8 text-white text-4xl cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </span>
          <div className="w-4/5 h-4/5 bg-white rounded-lg overflow-hidden">
            <iframe src={resumeUrl} width="100%" height="100%" frameBorder="0"></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
