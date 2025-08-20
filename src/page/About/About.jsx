import profileImg from "../../../public/Images/Atikur_RahmAan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import BackgroundBlobs from "../Banner/BackgroundBlobs";
import RadialBackground from "../Banner/RadialBackground";

const About = () => {
  return (
    <div className="relative max-w-6xl mx-auto py-16 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <BackgroundBlobs />
        <RadialBackground />
      </div>

      {/* Main Content */}
      <div className=" border-2 rounded-lg p-10 grid md:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Side - Text */}
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Who Am I</h2>
          <p className="text-gray-700">
            My name is <span className="font-medium">Atikur Rahman</span>, and I am a dedicated MERN Stack Developer based in Dhaka, Bangladesh.
          </p>
          <p className="text-gray-700">
            I have a strong foundation in front-end technologies such as HTML5, CSS3, JavaScript, and ReactJS. I excel in creating visually appealing and highly functional web applications, utilizing UI libraries like TailwindCSS.
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
            <a
              href="https://github.com/atikurrahman33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-600 transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/atikur-rahman03/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/atikurrahman.foysal.3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 transition"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://x.com/AtikurRahm59719"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:col-span-5 flex justify-center bg-white">
          <div className="relative w-80 h-80">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
