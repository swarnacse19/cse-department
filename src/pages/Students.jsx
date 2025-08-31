import React from "react";
import student1 from "../assets/hijab1.jpg";
import student2 from "../assets/hijab2.jpg";
import student3 from "../assets/hijab3.jpg";
import student4 from "../assets/hijab4.jpg";

const students = [
  {
    name: "Sharna Akter",
    session: "2019-20",
    email: "sharna@bu.ac.bd",
    img: student1,
  },
  {
    name: "Rafia Jahan",
    session: "2019-20",
    email: "rafia@bu.ac.bd",
    img: student2,
  },
  {
    name: "Karima Hossain",
    session: "2020-21",
    email: "karima@bu.ac.bd",
    img: student3,
  },
  {
    name: "Fatema Jahan",
    session: "2020-21",
    email: "fatema@bu.ac.bd",
    img: student4,
  },
];

const Students = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="h-72 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        <div className="relative text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Students
          </h1>
          <p className="text-gray-200 mt-2">
            Home <span className="text-yellow-400">/</span> Students
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center my-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          OUR STUDENTS
        </h2>
        <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Student List */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {students.map((s, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={s.img}
              alt={s.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700">{s.name}</h3>
            <p className="text-gray-600 text-sm mb-1">{s.session}</p>
            <a
              href={`mailto:${s.email}`}
              className="text-blue-500 text-sm hover:underline"
            >
              {s.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
