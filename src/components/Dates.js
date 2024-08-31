import React from 'react'

export default function Dates({ indate, innum }) {
  return (
    <div>        
    <article className="mb-8 flex items-end justify-end">
            <ul className="space-y-2">
              <li>
                <span className="font-bold text-gray-700">
                Invoice Number:
                </span>
                {innum}
              </li>
              <li>
                <span className="font-bold text-gray-700">
                Invoiced Date:
                </span>
                {indate}
              </li>
            </ul>
          </article>
          </div>
  )
}