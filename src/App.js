import React from 'react'
import Notes from './components/Notes.js'
import Table from './components/Table.js'
import Date from './components/Dates.js'
import Client from './components/ClientDetails.js'
import Details from './components/MainDetails.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
<Header />
        <div className="p-8">
          <Details />
          <Client />
          <Date />
          <Table />
          <Notes />
          <Footer />
        </div>
      </main>
    </div>
  );
}