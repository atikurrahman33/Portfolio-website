
import profileImg from "../../../public/Images/Atikur_RahmAan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";



const About = () => {
  return (
    <div className="w-full py-16 px-6 bg-white border border-gray-300 rounded-lg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
        {/* Left Side - Text */}
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Who Am I</h2>
          <p className="text-gray-700">
            My name is <span className="font-medium">Atikur Rahman</span> , and I am a dedicated MERN Stack Developer based in Dhaka, Bangladesh.
          </p>
          <p className="text-gray-700">
            I have a strong foundation in front-end technologies such as HTML5, CSS3, JavaScript , and ReactJS. I excel in creating visually appealing and highly functional web applications, utilizing UI libraries like TailwindCSS .
          </p>
          <p className="text-gray-700">
            My backend expertise includes NodeJs, ExpressJs, and MongoDB, allowing me to develop robust full-stack solutions.
          </p>
          <p className="text-gray-700">
            My professional experience includes significant contributions to projects like Learner Cafe, an innovative online course portal, and the HR Management Client-Server system. I have a proven track record of implementing secure authentication systems, integrating payment gateways like Stripe, and managing complex user workflows.
          </p>
          <p className="text-gray-700">
            I am committed to delivering seamless user experiences and continually advancing my skills and knowledge in web development. I am recognized for my outstanding contributions, effective teamwork, and timely project completion.
          </p>
          <p className="text-gray-700">
            Explore my projects and connect with me on LinkedIn or GitHub to learn more about my work and professional journey.
          </p>
           {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-800">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-600 transition">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700 transition">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Right Side - Image with Tailwind Animation */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-80 h-80">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-xl shadow-xl w-full h-full object-contain 
                         animate-[float_4s_ease-in-out_infinite]"
              style={{
                "@keyframes float": "0%,100%{transform:translateY(0px);}50%{transform:translateY(-15px);}"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
