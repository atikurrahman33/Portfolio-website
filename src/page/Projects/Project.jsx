
import Data from "../../Data/ProjectData.json";
import { Globe, Github, Database } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ add router link

const Project = () => {
  // helper to truncate
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="w-full px-6 mt-3">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-blue-50 p-8 rounded-lg shadow-lg">
          {Data.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition"
            >
              {/* Name & Short Description */}
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{project.projectName}</h2>
                <p className="text-gray-700 mb-4">
                  {truncateText(project.projectDetails, 15)}
                  {" "}
                  <Link
                    to={`/details/${project.id}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    See More
                  </Link>
                </p>
              </div>

              {/* Image */}
              <figure className="w-full h-48 p-3">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover rounded-lg"
                />
              </figure>

              {/* Links */}
              <div className="flex items-center justify-around pb-2 ">
                {project.clintlink && (
                  <a
                    href={project.clintlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-2 rounded-lg hover:bg-blue-100 hover:scale-110 transition"
                  >
                    <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200">
                      <Github className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="mt-1 text-xs font-medium text-gray-700 group-hover:text-blue-600">
                      Client
                    </span>
                  </a>
                )}

                {project.serverlink && (
                  <a
                    href={project.serverlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-2 rounded-lg hover:bg-green-100 hover:scale-110 transition"
                  >
                    <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200">
                      <Database className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="mt-1 text-xs font-medium text-gray-700 group-hover:text-green-600">
                      Server
                    </span>
                  </a>
                )}

                {project.livelink && (
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-2 rounded-lg hover:bg-purple-100 hover:scale-110 transition"
                  >
                    <div className="bg-purple-100 p-2 rounded-full group-hover:bg-purple-200">
                      <Globe className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="mt-1 text-xs font-medium text-gray-700 group-hover:text-purple-600">
                      Live
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
