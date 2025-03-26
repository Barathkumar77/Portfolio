"use client";
import React from "react";
import { FlipText } from "./magicui/flip-text";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="body-font relative text-gray-400 overflow-hidden" >
      <div className="container mx-auto px-5 py-24 relative" id="contact">
        {/* Glowing Background Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-10 left-10 h-16 w-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full opacity-60 blur-md"
        ></motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.3 }}
          className="absolute bottom-10 right-10 h-24 w-24 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full opacity-50 blur-lg"
        ></motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute left-1/2 top-16 h-32 w-32 border-4 border-orange-500 rounded-full opacity-30 shadow-orange-500 shadow-lg"
        ></motion.div>

        {/* Animated Particles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-20 left-40 h-4 w-4 bg-white rounded-full opacity-50 blur-sm"
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          className="absolute bottom-10 left-20 h-3 w-3 bg-orange-400 rounded-full opacity-70 blur-sm"
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.8 }}
          className="absolute top-5 right-16 h-5 w-5 bg-yellow-300 rounded-full opacity-60 blur-sm"
        ></motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex w-full flex-col text-center"
        >
          <FlipText className="text-5xl font-extrabold -tracking-widest text-orange-500 pb-9">
            CONTACT ME
          </FlipText>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form Card with Glassmorphism Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mx-auto md:w-2/3 lg:w-1/2 flex items-center justify-center relative"
        >
          <div className="p-8 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-2xl bg-gray-800 border border-gray-600">
            <form action="" method="post">
              <div className="p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded-lg border border-gray-700 bg-gray-900 bg-opacity-40 py-2 px-4 text-base leading-8 text-white placeholder-transparent outline-none transition-all duration-200 ease-in-out focus:border-orange-500 focus:bg-gray-800 focus:ring-2 focus:ring-orange-900"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-6 bg-transparent text-sm text-orange-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="p-2 pt-5">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded-lg border border-gray-700 bg-gray-900 bg-opacity-40 py-2 px-4 text-base leading-8 text-white placeholder-transparent outline-none transition-all duration-200 ease-in-out focus:border-orange-500 focus:bg-gray-800 focus:ring-2 focus:ring-orange-900"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-6 bg-transparent text-sm text-orange-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded-lg border border-gray-700 bg-gray-900 bg-opacity-40 py-2 px-4 text-base leading-6 text-white placeholder-transparent outline-none transition-all duration-200 ease-in-out focus:border-orange-500 focus:bg-gray-800 focus:ring-2 focus:ring-orange-900"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-6 bg-transparent text-sm text-orange-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #ff6600" }}
                  whileTap={{ scale: 0.9 }}
                  className="mx-auto flex rounded-lg bg-orange-500 py-2 px-8 text-lg text-white transition-all duration-300 hover:bg-orange-600 focus:outline-none cursor-none"
                >
                  Send
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
