import React from "react";
import notice from "../assets/notice.jpg";

const Notice = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Latest Notice
        </h2>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Notice Image */}
          <img
            src={notice}
            alt="Notice"
            className="w-full h-84 object-cover"
          />

          {/* Notice Details */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Semester Final Examination 2025 Notice
            </h3>
            <p className="text-gray-600 mb-4">
              Published on: 28 August 2025
            </p>
            <p className="text-gray-700">
              This is to inform all students of CSE Department that the Semester Final Examination 
              will start from 10th September 2025. Students are advised to collect their admit cards 
              from the department office within the given date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notice;
