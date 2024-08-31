import React from 'react';

export default function Header({ handlePrint }) { // Fixed the prop name here
  return (
    <div>
      <header className="text-white py-6 px-8">
        <h1 className="text-4xl font-bold text-center mb-6">Invoice Maker</h1>
        <ul className="flex justify-center space-x-4">
          <li>
            <button
              onClick={handlePrint} // Using the correct prop name
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Print
            </button>
          </li>
          <li>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
              Download
            </button>
          </li>
          <li>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Send
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}
