import React from "react";
import Data from "../../Data/ProjectData.json";

const Project = () => {
  return (
    <div className="w-full px-6  mt-3">
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
              {/* Name */}
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{project.projectName}</h2>
                <p className="text-gray-700 mb-4">{project.projectDetails}</p>
                <button className="text-blue-400 font-medium">See More</button>
              </div>

              {/* Image */}
              <figure className="w-full h-48">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </figure>

              {/* Links */}
              <div className="p-4 flex flex-wrap gap-2">
                {project.clintlink && (
                  <a
                    href={project.clintlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary btn-sm flex-1"
                  >
                    Client
                  </a>
                )}
                {project.serverlink && (
                  <a
                    href={project.serverlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-secondary btn-sm flex-1"
                  >
                    Server
                  </a>
                )}
                {project.livelink && (
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-success btn-sm flex-1"
                  >
                    Live
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
