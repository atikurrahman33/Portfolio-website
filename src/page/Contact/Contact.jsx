import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyqxhxd", // Replace with your EmailJS service ID
        "template_wi4tlqk", // Replace with your EmailJS template ID
        form.current,
        "blrROPaNUM-y3X8ir" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire("Good job!", "Your message has been sent!", "success");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          Swal.fire("Oops!", "Failed to send message. Please try again.", "error");
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 min-h-screen flex justify-center items-center">
      <div className="contact-card w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 shadow-xl rounded-xl overflow-hidden">
        
        {/* Left Side - Form Section */}
        <div className="lg:col-span-7 p-8 md:p-12 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Have a question or want to work together? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-800 text-white font-bold px-6 py-2 rounded-lg transition duration-300"
            >
              Send Mail
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info Section */}
        <div
          className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center rounded-r-xl"
          style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
        >
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-bold text-white">Contact Information</h2>
            <p className="mt-3 text-white">
              Feel free to reach out to us through any of these channels. We're here to help!
            </p>
          </div>

          <div className="space-y-6 w-full mb-10">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2C3539]">
                <FontAwesomeIcon icon={faPhone} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-white">+880 1822988250</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2C3539]">
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-white">foysalatik33@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2C3539]">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
