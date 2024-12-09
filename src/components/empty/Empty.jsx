import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({ title, url }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        className="w-40 h-40 mx-auto mb-4 rounded-lg shadow-md"
        src={url}
        alt="Empty State"
      />
      <p className="text-lg font-semibold text-gray-700 mb-4">{title}</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Go Home
      </button>
    </div>
  );
};

export default Empty;
