import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher, FaBook, FaGlobe } from "react-icons/fa";

const AboutDepartment = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-6 text-center text-blue-600">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About CSE Department
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto">
          The Department of Computer Science & Engineering (CSE) at University of
          Barishal is dedicated to fostering innovation, creativity, and research
          in computing and technology.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-md rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To prepare skilled graduates in computer science and engineering who
            can contribute to solving real-world problems, lead innovations, and
            create positive impacts in society and industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-md rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To be a leading center of excellence in computer science and
            engineering education, research, and innovation in Bangladesh and
            beyond.
          </p>
        </motion.div>
      </section>

      {/* Features / Impact */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow rounded-2xl text-center bg-white"
          >
            <FaUsers className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student Community</h3>
            <p className="text-gray-600 text-sm">
              A vibrant environment for learning, collaboration, and growth.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow rounded-2xl text-center bg-white"
          >
            <FaChalkboardTeacher className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">
              Experienced teachers guiding students with knowledge and research.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow rounded-2xl text-center bg-white"
          >
            <FaBook className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Research & Projects</h3>
            <p className="text-gray-600 text-sm">
              Opportunities for research, innovation, and real-world projects.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 shadow rounded-2xl text-center bg-white"
          >
            <FaGlobe className="mx-auto text-blue-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Vision</h3>
            <p className="text-gray-600 text-sm">
              Preparing students for international careers and global research.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutDepartment;
