import React from 'react';

export default function Header({ comname, handlePrint, lgm }) {

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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-sm font-bold text-left text-black capitalize">{comname}</h1>
          <img src={lgm} alt={comname} className="rounded-full h-12 w-12 object-cover" />
        </div>
        <ul className="flex justify-center space-x-4 no-print">
          <li>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Print
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}