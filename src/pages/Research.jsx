import React from "react";

const Research = () => {
  const projects = []; 

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="h-72 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        <div className="relative text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Research Project
          </h1>
          <p className="text-gray-200 mt-2">
            Home <span className="text-yellow-400">/</span> Research Project
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center my-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING RESEARCH PROJECTS
        </h2>
        <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Research Table */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-center text-sm">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-2 border">SL</th>
                <th className="px-4 py-2 border">Name/PI</th>
                <th className="px-4 py-2 border">Project / Workshop Title</th>
                <th className="px-4 py-2 border">Funding Agency</th>
                <th className="px-4 py-2 border">Project Duration</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Attachment</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((p, idx) => (
                  <tr key={idx} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-2 border">{idx + 1}</td>
                    <td className="px-4 py-2 border">{p.name}</td>
                    <td className="px-4 py-2 border">{p.title}</td>
                    <td className="px-4 py-2 border">{p.agency}</td>
                    <td className="px-4 py-2 border">{p.duration}</td>
                    <td className="px-4 py-2 border">{p.status}</td>
                    <td className="px-4 py-2 border">
                      {p.attachment ? (
                        <a
                          href={p.attachment}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-4 py-6 text-gray-500 border bg-gray-50"
                  >
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Research;
