import React from "react";

const programs = [
  {
    name: "B.Sc. in Computer Science and Engineering (CSE)",
    duration: "4 Years (8 Semesters)",
    credits: "150+ Credits",
    description:
      "The undergraduate program aims to provide students with a strong foundation in computer science, software engineering, data structures, algorithms, and modern technologies.",
  },
  {
    name: "M.Sc. in Computer Science and Engineering (CSE)",
    duration: "1.5 – 2 Years",
    credits: "36+ Credits",
    description:
      "The postgraduate program offers advanced knowledge in computer science, research methodologies, and specialization in areas such as AI, Data Science, and Networking.",
  },
  {
    name: "Ph.D. in Computer Science and Engineering",
    duration: "3 - 5 Years",
    credits: "Research Based",
    description:
      "The Ph.D. program focuses on high-quality research, publications, and innovative contributions in emerging areas of computer science and engineering.",
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="h-72 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        <div className="relative text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Programs
          </h1>
          <p className="text-gray-200 mt-2">
            Home <span className="text-yellow-400">/</span> Programs
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center my-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          PROGRAMS OFFERED BY THE DEPARTMENT
        </h2>
        <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Programs List */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {p.name}
            </h3>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Duration:</strong> {p.duration}
            </p>
            <p className="text-gray-600 text-sm mb-1">
              <strong>Credits:</strong> {p.credits}
            </p>
            <p className="text-gray-600 text-sm">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
