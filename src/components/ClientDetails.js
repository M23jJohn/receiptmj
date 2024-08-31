import React from 'react'

export default function ClientDetails({ cname, caddress}) {
  return (
    <div>       
    <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 uppercase">{cname}</h2>
            <p className="text-gray-600">{caddress}</p>
          </section>
          </div>
  )
}