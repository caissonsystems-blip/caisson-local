'use client';

import React, { useState } from 'react';

const BidTakeOff = () => {
  const [items, setItems] = useState([
    { name: 'Conduit (40 DPs)', qty: 0, unitCost: 50 },
    { name: 'Wire (400 Circuits)', qty: 0, unitCost: 10 }
  ]);

  const addItem = () => {
    setItems([...items, { name: 'New Item (e.g., Panels)', qty: 0, unitCost: 0 }]);
  };

  const updateQty = (index: number, newQty: number) => {
    const updated = [...items];
    updated[index].qty = newQty;
    setItems(updated);
  };

  const totalBid = items.reduce((sum, item) => sum + (item.qty * item.unitCost), 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Bid Take-Off: Electrical Scope</h2>
      <button 
        onClick={addItem} 
        className="mb-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
      >
        Add Item (Drag from Plans Later)
      </button>
      <table className="w-full border-collapse bg-gray-50">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left font-semibold">Item</th>
            <th className="p-4 text-left font-semibold">Quantity</th>
            <th className="p-4 text-left font-semibold">Unit Cost</th>
            <th className="p-4 text-left font-semibold">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-4 font-medium">{item.name}</td>
              <td className="p-4">
                <input 
                  type="number" 
                  value={item.qty} 
                  onChange={(e) => updateQty(index, parseInt(e.target.value) || 0)}
                  className="border rounded px-2 py-1 w-20"
                  placeholder="0"
                />
              </td>
              <td className="p-4">${item.unitCost.toLocaleString()}</td>
              <td className="p-4 font-semibold">${(item.qty * item.unitCost).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-800">Total Bid Amount: ${totalBid.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default BidTakeOff;
