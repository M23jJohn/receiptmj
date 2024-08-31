function App() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main>
        {/* Header */}
        <header>
          <div>
            <h2>Invoice Maker</h2>
          </div>
          
          <div>
            <ul>
              <li><button onClick={handlePrint}>Print</button></li>
              <li>Download</li>
              <li>Send</li>
            </ul>
          </div>
        </header>
        {/* End of Header */}
        
        {/* Details */}
        <section>
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
