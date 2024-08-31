import React from 'react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Invoice Maker</h1>
          <ul className="flex justify-center space-x-4">
            <li>
              <button onClick={handlePrint} className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
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

        <div className="p-8">
          {/* Details */}
          <section className="mb-8 text-right">
            <h2 className="text-2xl font-semibold text-gray-800 uppercase">Your Name</h2>
            <p className="text-gray-600">Your Address</p>
          </section>

          {/* Client details */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 uppercase">Client's Name</h2>
            <p className="text-gray-600">Client's Address</p>
          </section>

          {/* Dates */}
          <article className="mb-8 flex items-end justify-end">
            <ul className="space-y-2">
              <li>
                <span className="font-bold text-gray-700">
                Invoice Number:
                </span>
              </li>
              <li>
                <span className="font-bold text-gray-700">
                Invoiced Date:
                </span>
              </li>
            </ul>
          </article>

          {/* Table */}
          <div className="mb-8">
            <p className="text-gray-600">this is the table</p>
          </div>

          {/* Notes */}
          <section className="mb-8">
            <p className="text-gray-600">Notes to the Client...</p>
          </section>

          {/* Footer */}
          <footer className="border-t pt-4">
            <ul className="flex flex-wrap items-center justify-between text-sm text-gray-600">
              <li>
                <span>
                Your Name
                </span>
              </li>
              <li>
                <span>
                Your Email
                </span>
              </li>
              <li>
                <span>
                Phone Number
                </span>
              </li>
            </ul>
          </footer>
        </div>
      </main>
    </div>
  );
}