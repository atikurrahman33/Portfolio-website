import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../../Data/ProjectData.json";
import { Globe, Github, Database, ArrowLeft, Calendar, Clock, Users } from "lucide-react";

const Details = () => {
  const { id } = useParams();
  const project = Data.find((p) => p.id.toString() === id);

  // 🔥 Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // run when project id changes

  if (!project) {
    return <p className="text-center text-red-500 mt-20">Project not found!</p>;
  }

  return (
    <div className="w-full px-4 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <div className="rounded-2xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Project Details */}
            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.projectName}</h1>

                {/* Project metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  {project.date && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.date}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{project.teamSize} members</span>
                    </div>
                  )}
                </div>

                {/* Status badge */}
                {project.status && (
                  <span
                    className={`inline-block px-3 py-1 text-xs rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : project.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              {/* Full Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed">{project.projectDetails}</p>
              </div>
            </div>

            {/* Right Column - Project Image & Challenges */}
            <div className="md:w-1/2 p-8 flex flex-col">
              <div className="sticky top-8">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-auto object-cover rounded-xl shadow-lg mb-8"
                />

                {/* Challenges & Solutions */}
                {project.challenges && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Challenges & Solutions</h2>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-gray-700">{project.challenges}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features, Tech, Tags, Links */}
        <div className="px-8 rounded-xl ">
          {project.features && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.tags && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Tags</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.clintlink && (
                <a
                  href={project.clintlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg transition-all hover:bg-gray-800 hover:shadow-md"
                >
                  <Github className="w-5 h-5" /> Client Code
                </a>
              )}
              {project.serverlink && (
                <a
                  href={project.serverlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg transition-all hover:bg-gray-800 hover:shadow-md"
                >
                  <Database className="w-5 h-5" /> Server Code
                </a>
              )}
              {project.livelink && (
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg transition-all hover:bg-blue-700 hover:shadow-md"
                >
                  <Globe className="w-5 h-5" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
