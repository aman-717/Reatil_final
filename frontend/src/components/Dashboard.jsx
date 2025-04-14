import React, { useState } from "react";
import '../styles/styles.css'; // Assuming external CSS for fonts and transitions

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // State to manage theme

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen px-6 py-4 space-y-6 transition-colors duration-500 ${
        isDarkMode ? "bg-gradient-to-r from-gray-900 to-black text-white" : "bg-gradient-to-r from-white to-gray-200 text-zinc-900"
      }`}
    >
      {/* Header */}
      <header className="flex justify-between items-center border-b border-zinc-700 pb-4">
        <h1 className="text-2xl font-bold font-sans">Billing System</h1>
        <nav className="flex items-center space-x-6 text-sm font-semibold">
          <a href="#">ADMIN</a>
          <a href="#">CREATE BILL</a>
          <a href="#">LOGOUT</a>
          <button className="text-xl" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "🌞"}
          </button>
        </nav>
      </header>

      {/* Sales Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["7 Days Sale", "1 Month Sale", "3 Months Sale"].map((label, idx) => (
          <div
            key={idx}
            className={`${
              isDarkMode ? "bg-zinc-800" : "bg-zinc-200"
            } rounded-md p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-2xl font-bold">₹ 0</div>
            <div className="mt-2 text-sm text-zinc-400">{label}</div>
          </div>
        ))}
      </div>

      {/* Recent Bills Section */}
      <div
  className={`min-h-screen px-6 py-4 space-y-6 transition-colors duration-500 ${
    isDarkMode ? "bg-marble-pattern" : "bg-white text-zinc-900"
  }`}
>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Bills (0)</h2>
          <div className="flex flex-wrap gap-2">
            <input
              type="date"
              className={`${
                isDarkMode ? "bg-zinc-900" : "bg-white"
              } border ${
                isDarkMode ? "border-zinc-700" : "border-zinc-300"
              } text-sm px-3 py-2 rounded-md focus:outline-none shadow-sm transition-all duration-300`}
            />
            <select
              className={`${
                isDarkMode ? "bg-zinc-900" : "bg-white"
              } border ${
                isDarkMode ? "border-zinc-700" : "border-zinc-300"
              } text-sm px-3 py-2 rounded-md focus:outline-none shadow-sm transition-all duration-300`}
            >
              <option>Bill By</option>
              <option>Admin</option>
              <option>Staff</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by Customer Name or Bill No"
                className={`${
                  isDarkMode ? "bg-zinc-900" : "bg-white"
                } border ${
                  isDarkMode ? "border-zinc-700" : "border-zinc-300"
                } text-sm px-3 py-2 rounded-md pl-10 w-72 focus:outline-none shadow-sm transition-all duration-300`}
              />
              <span className="absolute left-3 top-2.5 text-zinc-500">🔍</span>
            </div>
          </div>
        </div>

        {/* Table Headers */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-zinc-400 border-b border-zinc-700">
                <th className="py-2 px-2">BILL NO.</th>
                <th className="py-2 px-2">CUSTOMER NAME</th>
                <th className="py-2 px-2">MOBILE NO.</th>
                <th className="py-2 px-2">DATE</th>
                <th className="py-2 px-2">BILLED BY</th>
                <th className="py-2 px-2">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-zinc-700 transition-all duration-200">
                <td colSpan="6" className="text-center py-6 text-zinc-400">
                  No bills found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
