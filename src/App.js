function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="p-5 lg:max-w-xl lg:mx-auto">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5">
          <h2 className="text-2xl font-bold mb-2">Invoice Maker</h2>
          <ul className="flex items-center space-x-4">
            <li>
              <button onClick={handlePrint} className="btn-print">
                Print
              </button>
            </li>
            <li>
              <button className="btn-download">Download</button>
            </li>
            <li>
              <button className="btn-send">Send</button>
            </li>
          </ul>
        </header>
        {/* End of Header */}

        {/* Details */}
        <section className="mb-5 text-right">
          <h2 className="text-xl font-semibold">Your Name</h2>
          <p>Your Address</p>
        </section>
        {/* End of Details */}

        {/* Client details */}
        <section className="mb-5">
          <h2 className="text-xl font-semibold">Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* End of Client details */}

        {/* Dates */}
        <article className="mb-5">
          <ul className="space-y-2">
            <li>Invoice Number:</li>
            <li>Invoiced Date:</li>
            <li>Due Date:</li>
          </ul>
        </article>
        {/* End of Dates */}

        {/* Table */}
        {/* Add table structure here if needed */}
        {/* End of Table */}

        {/* Notes */}
        <section className="mb-5">
          <p>Notes to the Client...</p>
        </section>
        {/* End of Notes */}

        {/* Footer */}
        <footer className="text-center mt-5">
          <ul className="space-y-2">
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