function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5">
          <h1 className="uppercase tracking-wide text-4xl font-bold mb-3">Invoice Maker</h1>
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
          <h2 className="text-xl font-semibold uppercase">Your Name</h2>
          <p>Your Address</p>
        </section>
        {/* End of Details */}

        {/* Client details */}
        <section className="mt-5">
          <h2 className="text-4xl uppercase">Client's Name</h2>
          <p>Client's Address</p>
        </section>
        {/* End of Client details */}

        {/* Dates */}
        <article className="my-5 flex items-end justify-end">
          <ul className="space-y-2">
            <li>
              <span className="font-bold">
              Invoice Number:
              </span>
              </li>
            <li>
              <span className="font-bold">
              Invoiced Date:
              </span>
              </li>
          </ul>
        </article>
        {/* End of Dates */}

        {/* Table */}
<div className="my-5">
  this is the table
</div>
{/* End of Table */}

        {/* Notes */}
        <section className="mb-5">
          <p>Notes to the Client...</p>
        </section>
        {/* End of Notes */}

        {/* Footer */}
        <footer className="">
          <ul className="flex flex-wrap items-center justify-between">
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
        {/* End of Footer */}
      </main>
    </>
  );
}

export default App;