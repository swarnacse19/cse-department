import React, { useState } from "react";

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4];
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Our Gallery
        </h2>
        <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal (Lightbox) */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative">
            <img
              src={selectedImg}
              alt="Selected"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full px-3 py-1 shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
