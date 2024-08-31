import React from 'react'

export default function MainDetails({ name, address }) {
  return (
    <>
                <section className="mb-8 text-right">
            <h2 className="text-2xl font-semibold text-gray-800 uppercase">{name}</h2>
            <p className="text-gray-600">{address}</p>
          </section>
    </>
  )
}