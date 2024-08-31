import React, { useState } from 'react'
import Notes from './components/Notes.js'
import Table from './components/Table.js'
import Date from './components/Dates.js'
import Client from './components/ClientDetails.js'
import Details from './components/MainDetails.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

export default function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {showInvoice ?
        <div className="p-8">
       <Header handlePrint={handlePrint} />
          <Details />
          <Client />
          <Date />
          <Table />
          <Notes />
          <Footer />
        </div> : (
        <>
          <div className="flex flex-col justify-center">
          <input type="text" name="text" id="text" placeholder="Enter Your Name" autoComplete="off" />
          <button className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300">Preview Invoice</button>
          </div>
        </>
        
        )
          }
      </main>
    </div>
  );
}