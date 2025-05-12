import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white px-4 text-center">
      <div>
        <h1 className="text-[80px] font-['RethinkSans-Bold'] font-bold text-[#FF7900]">
          404
        </h1>
        <h2 className="text-[24px] font-[Inter] font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-[#8F8F8F] font-[Inter] mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#FF7900] font-[Inter] text-black px-6 py-2 rounded-lg hover:bg-[#101010] hover:text-white transition cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
