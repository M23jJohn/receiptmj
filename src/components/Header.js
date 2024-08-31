import React from 'react';

export default function Header({ comname, handlePrint }) {

  return (
    <div>
      <style>
        {`
          @media print {
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>
      <header className="py-6 px-8">
        <h1 className="text-sm font-bold text-left mb-6 text-black">{comname}</h1>
        <ul className="flex justify-center space-x-4 no-print">
          <li>
            <button
              onClick={handlePrint}
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