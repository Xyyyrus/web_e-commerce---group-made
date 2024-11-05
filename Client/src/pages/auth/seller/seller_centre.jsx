// seller_centre.jsx

import  { useState } from "react";

// UI here is not 100% complete as it is not an exact copy of the figma. 
// Exec Lead na daw bahala magadjust sa UI. Placeholder UI here just to be able to 

/*
    - UI still needs to be corrected by Exec Lead.
    - Lots of placeholders. 
    - No functionality yet.
    - Not connected to DB.
*/

const SellerCentre = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">LOGO Seller Centre</div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-gray-700">Dashboard</li>
            <li className="p-4 hover:bg-gray-700 bg-gray-900">My Product</li>
            <li className="p-4 hover:bg-gray-700">Trade Event Management</li>
            <li className="p-4 hover:bg-gray-700">Bidding Activity</li>
            <li className="p-4 hover:bg-gray-700">Business Insights</li>
            <li className="p-4 hover:bg-gray-700">Promotions and Discounts</li>
            <li className="p-4 hover:bg-gray-700">Customer Feedback</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">My Products</div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">🔔</button>
            <button className="text-gray-600">💬</button>
            <div className="text-gray-600">Cyrus ▼</div>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 ${activeTab === "all" ? "bg-gray-900 text-white" : "bg-gray-200"} `}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "trade" ? "bg-gray-900 text-white" : "bg-gray-200"} `}
            onClick={() => setActiveTab("trade")}
          >
            Trade
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "bid" ? "bg-gray-900 text-white" : "bg-gray-200"} `}
            onClick={() => setActiveTab("bid")}
          >
            Bid
          </button>
        </div>

        {/* Product Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2">Products</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">Sample Item</td>
                <td className="px-4 py-2">Clothing & Apparel</td>
                <td className="px-4 py-2">Available</td>
                <td className="px-4 py-2 text-red-500">Inactive</td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-blue-600">✏️</button>
                  <button className="text-red-600">🗑️</button>
                </td>
              </tr>
              {/* Additional rows here */}
            </tbody>
          </table>
        </div>

        {/* Add Product Button */}
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">+ Add Product</button>
        </div>

        {/* Conditional Form Rendering */}
        {activeTab !== "all" && (
          <div className="mt-4 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              {activeTab === "trade" ? "For Trading" : "For Bidding"}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Product Name</label>
                <input className="w-full p-2 border rounded-md" placeholder="Product Name" />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea className="w-full p-2 border rounded-md" placeholder="Description"></textarea>
              </div>
              <div>
                <label className="block text-gray-700">Category</label>
                <input className="w-full p-2 border rounded-md" placeholder="Category" />
              </div>
              {/* More fields depending on activeTab (Trade or Bid) */}
              {activeTab === "bid" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Starting Price</label>
                    <input className="w-full p-2 border rounded-md" placeholder="Starting Price" />
                  </div>
                  <div>
                    <label className="block text-gray-700">Minimum Bid</label>
                    <input className="w-full p-2 border rounded-md" placeholder="Minimum Bid" />
                  </div>
                </div>
              )}
              <div className="flex justify-end space-x-4">
                <button type="button" className="px-4 py-2 border rounded-md">
                  Back
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  {activeTab === "trade" ? "Save as Draft" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerCentre;
