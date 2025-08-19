
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 min-h-screen bg-blue-50 flex justify-center items-center bo mt-6 border border-gray-300 rounded-lg shadow-lg">
      <div className="contact-card w-full max-w-6xl bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 ">
        
        {/* Left Side - Form Section */}
        <div className="lg:col-span-7 p-8 md:p-12">
          <form className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mt-3">
                Have a question or want to work together? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              {["First Name", "Last Name", "Email Address", "Phone Number"].map((label, idx) => (
                <div className="relative" key={idx}>
                  <input
                    type={label.includes("Email") ? "email" : label.includes("Phone") ? "tel" : "text"}
                    id={label.replace(" ", "").toLowerCase()}
                    placeholder=" "
                    className="peer w-full border-2 border-gray-300 rounded-lg p-4 focus:border-indigo-500 focus:outline-none"
                  />
                  <label
                    htmlFor={label.replace(" ", "").toLowerCase()}
                    className="absolute left-4 top-4 text-gray-500 text-base transition-all duration-300
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                               peer-focus:top-0 peer-focus:text-sm peer-focus:text-indigo-500 bg-white px-1"
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                placeholder=" "
                className="peer w-full border-2 border-gray-300 rounded-lg p-4 h-40 focus:border-indigo-500 focus:outline-none resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-gray-500 text-base transition-all duration-300
                           peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                           peer-focus:top-0 peer-focus:text-sm peer-focus:text-indigo-500 bg-white px-1"
              >
                What do you have in mind?
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-64 py-4 rounded-xl font-bold text-lg text-white
                           bg-gradient-to-r from-indigo-500 to-indigo-700
                           hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Contact Info Section */}
       <div
          className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center rounded-xl"
          style={{
            backgroundColor: "#4A90E2", // Updated to a blue shade
            color: "#FFFFFF", // White text for better contrast
          }}
        >
          
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-bold text-[#2C3539]">Contact Information</h2>
            <p className="mt-3 text-white">
              Feel free to reach out to us through any of these channels. We're here to help!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 w-full mb-10">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#2C3539" }}>
                <FontAwesomeIcon icon={faPhone} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#2C3539]">Phone</p>
                <p className="text-white">+1 (258) 325-5679</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#2C3539" }}>
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#2C3539]">Email</p>
                <p className="text-white">hello@example.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#2C3539" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#2C3539]">Address</p>
                <p className="text-white">102 Street, Y Cross 485656</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
