import React from "react";
import bgImage from "../assets/universityBg.jpeg"; 

const facultyMembers = {
  head: [
    {
      name: "Dr. Rahat Hossain Faisal",
      title: "Associate Professor & Head",
      email: "head.cse@bu.ac.bd",
      img: "/assets/chairman.jpg",
    },
  ],
  associate: [
    {
      name: "Dr. Md Manjur Ahmed",
      title: "Associate Professor",
      email: "manjur@bu.ac.bd",
      img: "/assets/monjur.jpg",
    },
  ],
  assistant: [
    {
      name: "Md. Erfan",
      title: "Assistant Professor",
      email: "erfan@bu.ac.bd",
      img: "/assets/erfan.jpg",
    },
    {
      name: "Md Samsuddoha",
      title: "Assistant Professor",
      email: "msamsuddoha@bu.ac.bd",
      img: "/assets/sams.jpg",
    },
    {
      name: "Dr. Tania Islam",
      title: "Assistant Professor",
      email: "tania@bu.ac.bd",
      img: "/assets/tania.jpg",
    },
    {
      name: "Sohely Jahan",
      title: "Assistant Professor",
      email: "sohely@bu.ac.bd",
      img: "/assets/sohely.jpg",
    },
  ],
};

const Faculty = () => {
  return (
    <div className="min-h-screen">
      {/* Header section with bg */}
      <div
        className="h-80 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Our Faculty
        </h1>
      </div>

      {/* Faculty Members */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Head of Department */}
        <Section title="Head of the Department" members={facultyMembers.head} />

        {/* Associate Professors */}
        <Section
          title="Associate Professors"
          members={facultyMembers.associate}
        />

        {/* Assistant Professors */}
        <Section
          title="Assistant Professors"
          members={facultyMembers.assistant}
        />
      </div>
    </div>
  );
};

// Faculty Section Component
const Section = ({ title, members }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
      {title}
    </h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((m, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
        >
          <img
            src={m.img}
            alt={m.name}
            className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-blue-700">{m.name}</h3>
          <p className="text-gray-600 text-sm">{m.title}</p>
          <a
            href={`mailto:${m.email}`}
            className="text-blue-500 text-sm hover:underline"
          >
            {m.email}
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Faculty;
