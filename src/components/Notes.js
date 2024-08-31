import React from 'react'

export default function Notes({ notes }) {
  return (
    <div>
           <section className="mb-8">
            <p className="text-gray-600">{notes}</p>
          </section>
    </div>
  )
}