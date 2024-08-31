import React from 'react'

export default function Footer({ name, address, email, phone }) {
  return (
    <div>
           <footer className="border-t pt-4">
            <ul className="flex flex-wrap items-center justify-between text-sm text-gray-600">
              <li>
                <span>
                {name}
                </span>
              </li>
              <li>
                <span>
                {email}
                </span>
              </li>
              <li>
                <span>
                {phone}
                </span>
              </li>
              <li>
                <span>
                {address}
                </span>
              </li>
            </ul>
          </footer>
    </div>
  )
}