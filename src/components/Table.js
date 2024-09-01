import React from 'react'

export default function Table({ items }) {
  return (
    <table className="w-full mb-8">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 text-left">Item</th>
          <th className="border p-2 text-right">Quantity</th>
          <th className="border p-2 text-right">Price</th>
          <th className="border p-2 text-right">Discount</th>
          <th className="border p-2 text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className="border p-2">{item.item}</td>
            <td className="border p-2 text-right">{item.quantity}</td>
            <td className="border p-2 text-right">₱{item.price.toFixed(2)}</td>
            <td className="border p-2 text-right">{item.discount}%</td>
            <td className="border p-2 text-right">₱{item.total.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="font-bold">
          <td colSpan="4" className="border p-2 text-right">Total:</td>
          <td className="border p-2 text-right">
            ₱{items.reduce((sum, item) => sum + item.total, 0).toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}