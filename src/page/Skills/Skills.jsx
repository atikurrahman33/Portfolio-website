


// Add your skill icons in the public folder or import them
import htmlIcon from "../../../public/Images/html.png";
import cssIcon from "../../../public/Images/css.png";

import tailwindIcon from "../../../public/Images/tailwind.png";
import jsIcon from "../../../public/Images/js.png";
import reactIcon from "../../../public/Images/react.png";
import nodeIcon from "../../../public/Images/nodeJS.png";
import expressIcon from "../../../public/Images/expressJS.png";
import mongoIcon from "../../../public/Images/mongoDB.png";


import firebaseIcon from "../../../public/Images/firebase.png";

import githubIcon from "../../../public/Images/github.png";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  
  { name: "Tailwind", icon: tailwindIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React.js", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  
  { name: "Firebase", icon: firebaseIcon },
  
  { name: "GitHub", icon: githubIcon },
];

const Skills = () => {
  return (
    <div id="skill" className="w-full py-16 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          My Technology Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 bg-blue-50 p-8 rounded-lg shadow-lime-50">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-2" />
              <p className="text-gray-700 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
