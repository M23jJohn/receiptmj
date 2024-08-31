function App() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="p-5 lg:max-w-xl lg:mx-auto">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5">
          <div>
            <h2>Invoice Maker</h2>
          </div>
          
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li><button onClick={handlePrint} className="btn-print">Print</button></li>
              <li><button className="btn-download">Download</button></li>
              <li><button className="btn-send">Send</button></li>
            </ul>
          </div>
        </header>
        {/* End of Header */}
        
        {/* Details */}
        <section className="flex items-center justify-end flex-col items-end">
           <h2>Name</h2>
           <p>Your Address</p>
        </section>
        {/* End of Details */}
        
        {/* Client details */}
        <section>
          <h2>Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* End of Client details */}
        
        {/* Dates */}
        <article>
          <ul>
            <li>Invoicer Number</li>
            <li>Invoiced Date:</li>
            <li></li>
          </ul>
        </article>
        {/* End of Dates */}
        
        {/* Table */}
        
        {/* End of Table */}
        
        {/* Notes */}
        <section>
          {/* Textarea */}
        <p>Notes to the Client...</p>
        </section>
        {/* End of Notes */}
        
        {/* Footer */}
        <footer>
          <ul>
            <li>Your Name</li>
            <li>Your Email</li>
            <li>Phone Number</li>
          </ul>
        </footer>
        {/* End of Footer */}
      </main>
  </>
  );
}

export default App;
