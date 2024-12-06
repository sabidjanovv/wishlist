import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import icons
import bg from "../../assets/two_waters.png"

const SoyWaxInfo = () => {
  return (
    <section className="container mt-8 bg-gray-100 py-20 px-10 flex flex-col lg:flex-row items-center">
      <div className="max-w-lg mb-10 lg:mb-0 lg:mr-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Clean and fragrant soy wax
        </h2>
        <p className="text-green-600 mb-6">
          Made for your home and for your wellness
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <FaCheckCircle className="text-green-600 mt-1 mr-2" />
            <span>
              <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2
              emissions
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-600 mt-1 mr-2" />
            <span>
              <strong>Hypoallergenic:</strong> 100% natural, human-friendly
              ingredients
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-600 mt-1 mr-2" />
            <span>
              <strong>Handmade:</strong> All candles are craftily made with love
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-600 mt-1 mr-2" />
            <span>
              <strong>Long burning:</strong> No more waste. Created to last long
            </span>
          </li>
        </ul>

        <button className="mt-8 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition">
          Learn more
        </button>
      </div>

      <div className="flex justify-center ml-12">
        <img
          src={bg}
          alt="Candleaf Soy Wax Candles"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default SoyWaxInfo;
