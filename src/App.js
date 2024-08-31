import React, { useState } from 'react';
import Notes from './components/Notes.js';
import Table from './components/Table.js';
import Date from './components/Dates.js';
import Client from './components/ClientDetails.js';
import Details from './components/MainDetails.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

export default function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cname, setCname] = useState("");
  const [caddress, setCaddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [innum, setInnum] = useState("");
  const [indate, setIndate] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ description: '', quantity: '', price: 0, discount: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ 
      ...prev, 
      [name]: name === 'quantity' ? value : name === 'price' || name === 'discount' ? parseFloat(value) : value 
    }));
  };

  const addItem = () => {
    // Validate inputs before adding
    if (newItem.description && newItem.quantity && !isNaN(newItem.price) && !isNaN(newItem.discount)) {
      const quantity = parseInt(newItem.quantity);
      const total = (quantity * newItem.price) * (1 - newItem.discount / 100);
      setItems([...items, { ...newItem, quantity, total }]);
      setNewItem({ description: '', quantity: '', price: 0, discount: 0 });
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {showInvoice ? (
          <div className="p-8">
            <Header />
            <Details name={name} address={address} />
            <Client cname={cname} caddress={caddress} />
            <Date indate={indate} innum={innum} />
            <Table items={items} deleteItem={deleteItem} />
            <Notes notes={notes} />
            <Footer name={name} address={address} email={email} phone={phone} />
            <button 
              onClick={() => setShowInvoice(false)} 
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center p-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="p-2 border rounded"
              />
              <input 
                type="text" 
                placeholder="Your Address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                className="p-2 border rounded"
              />
              <input 
                type="text" 
                placeholder="Client's Name" 
                value={cname} 
                onChange={(e) => setCname(e.target.value)} 
                className="p-2 border rounded"
              />
              <input 
                type="text" 
                placeholder="Client's Address" 
                value={caddress} 
                onChange={(e) => setCaddress(e.target.value)} 
                className="p-2 border rounded"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="p-2 border rounded"
              />
              <input 
                type="tel" 
                placeholder="Your Phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="p-2 border rounded"
              />
              <input 
                type="text" 
                placeholder="Invoice Number" 
                value={innum} 
                onChange={(e) => setInnum(e.target.value)} 
                className="p-2 border rounded"
              />
              <input 
                type="date" 
                placeholder="Invoice Date" 
                value={indate} 
                onChange={(e) => setIndate(e.target.value)} 
                className="p-2 border rounded"
              />
            </div>
            <textarea 
              placeholder="Notes to Client" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              className="w-full p-2 border rounded mb-6"
              rows="3"
            />
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Invoice Items</h2>
              <div className="grid grid-cols-5 gap-2 mb-2">
                <input 
                  type="text" 
                  name="description"
                  placeholder="Description" 
                  value={newItem.description}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
                <input 
                  type="text" 
                  name="quantity"
                  placeholder="Quantity" 
                  value={newItem.quantity}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
                <input 
                  type="number" 
                  name="price"
                  placeholder="Price" 
                  value={newItem.price}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
                <input 
                  type="number" 
                  name="discount"
                  placeholder="Discount %" 
                  value={newItem.discount}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                />
                <button 
                  onClick={addItem}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Add Item
                </button>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Preview Items</h2>
              <Table items={items} deleteItem={deleteItem} />
            </div>
            <button 
              onClick={() => setShowInvoice(true)} 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Preview Invoice
            </button>
          </div>
        )}
      </main>
    </div>
  );
}