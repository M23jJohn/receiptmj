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
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [cname, setCname] = useState("")
  const [caddress, setCaddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [innum, setInnum] = useState("")
  const [indate, setIndate] = useState("")
  const [notes, setNotes] = useState("")
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {showInvoice ?
          <div className="p-8">
            <Header handlePrint={handlePrint} />
            <Details name={name} address={address} />
            <Client cname={cname} caddress={caddress} />
            <Date indate={indate} innum={innum} />
            <Table />
            <Notes notes={notes} />
            <Footer name={name} address={address} email={email} phone={phone} />
            <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
          </div> : (
            <>
              <div className="flex flex-col justify-center p-8">
                <input type="text" placeholder="Enter Your Name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Enter Your Address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Enter Client's Name" autoComplete="off" value={cname} onChange={(e) => setCname(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Enter Client's Address" autoComplete="off" value={caddress} onChange={(e) => setCaddress(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Enter Your Email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Enter Your Phone" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Invoice Number" autoComplete="off" value={innum} onChange={(e) => setInnum(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="date" placeholder="Invoice Date" autoComplete="off" value={indate} onChange={(e) => setIndate(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Enter Your Notes To Client" autoComplete="off" value={notes} onChange={(e) => setNotes(e.target.value)} className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button onClick={() => setShowInvoice(true)} className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300">Preview Invoice</button>
              </div>
            </>
          )
        }
      </main>
    </div>
  );
}