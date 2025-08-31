import React from "react";
import chairman from "../assets/chairman.jpg";

const DeptHead = () => {
  const head = {
    name: "Dr. Rahat Hossain Faisal",
    title: "Associate Professor & Head",
    email: "head.cse@bu.ac.bd",
    img: chairman,
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={head.img}
            alt={head.name}
            className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-blue-100"
          />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
            Message from the Head of the Department
          </h2>
          <h3 className="text-xl font-semibold text-blue-700">{head.name}</h3>
          <p className="text-gray-600 mb-2">{head.title}</p>
          <a
            href={`mailto:${head.email}`}
            className="text-blue-500 hover:underline"
          >
            {head.email}
          </a>

          {/* Optional short message */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            Welcome to the Department of Computer Science and Engineering. 
            Our mission is to provide quality education, foster innovation, 
            and prepare students for the challenges of the modern tech world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeptHead;
