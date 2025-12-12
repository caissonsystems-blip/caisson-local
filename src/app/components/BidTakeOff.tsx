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
    <div className="p-8 bg-white rounded-xl shadow-xl max-w-6xl mx-auto mt-16 mb-16">
      <h2 className="text-4xl font-black mb-8 text-gray-800 border-b-2 pb-4 border-blue-200">Bid Take-Off: Electrical Scope</h2>
      <button 
        onClick={addItem} 
        className="mb-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-bold text-lg shadow-md"
      >
        Add Item (Drag from Plans Later)
      </button>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-gray-50 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-6 text-left font-bold text-lg text-gray-800 border-b-2 border-blue-200">Item</th>
              <th className="p-6 text-left font-bold text-lg text-gray-800 border-b-2 border-blue-200">Quantity</th>
              <th className="p-6 text-left font-bold text-lg text-gray-800 border-b-2 border-blue-200">Unit Cost</th>
              <th className="p-6 text-left font-bold text-lg text-gray-800 border-b-2 border-blue-200">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-colors">
                <td className="p-6 font-semibold text-gray-700 border-b border-gray-200">{item.name}</td>
                <td className="p-6">
                  <input 
                    type="number" 
                    value={item.qty} 
                    onChange={(e) => updateQty(index, parseInt(e.target.value) || 0)}
                    className="border-2 border-blue-200 rounded-lg px-4 py-2 w-24 text-lg font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="0"
                  />
                </td>
                <td className="p-6 font-semibold text-blue-600">${item.unitCost.toLocaleString()}</td>
                <td className="p-6 font-bold text-green-600 text-lg">${(item.qty * item.unitCost).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
        <h3 className="text-3xl font-black text-blue-800">Total Bid Amount: ${totalBid.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default BidTakeOff;