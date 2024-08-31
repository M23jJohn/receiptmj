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
          {/* Details:
          Name
          Address
          Email
          Cname
          Caddress
          Invoice Number
          Invoiced Date
          Notes
          */}
          <div className="flex flex-col justify-center">
          <input type="text" name="text" id="name" placeholder="Enter Your Name" autoComplete="off" value={name} ononChange={(e) => setName(e.target.value)} />
          <input type="text" name="text" id="name" placeholder="Enter Your Address" autoComplete="off" value={address} ononChange={(e) => setAddress(e.target.value)} />
          <input type="text" name="text" id="name" placeholder="Enter Client's Address" autoComplete="off" value={cname} ononChange={(e) => setCname(e.target.value)} />
          <input type="text" name="text" id="name" placeholder="Enter Client's Address" autoComplete="off" value={caddress} ononChange={(e) => setCaddress(e.target.value)} />
          <input type="text" name="text" id="name" placeholder="Enter Your Email" autoComplete="off" value={email} ononChange={(e) => setEmail(e.target.value)} />
          <input type="text" name="text" id="name" placeholder="Enter Your Phone" autoComplete="off" value={phone} ononChange={(e) => setPhone(e.target.value)} />
          <input type="text" name="text" id="name" placeholder="Invoice Number" autoComplete="off" value={innum} ononChange={(e) => setInnum(e.target.value)} />
          <input type="date" name="text" id="name" placeholder="Invoice Date" autoComplete="off" value={indate} ononChange={(e) => setIndate(e.target.value)} />
          <textarea type="text" name="text" id="name" placeholder="Enter Your Notes To Client" autoComplete="off" value={notes} onChange={(e) => setNotes(e.target.value)} />
          <button onClick={() => setShowInvoice(true)} className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 font-bold transition-all duration-300">Preview Invoice</button>
          </div>
        </>
        
        )
          }
      </main>
    </div>
  );
}