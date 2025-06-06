"use client";

import { useState } from "react";
import {
  PlusIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { initialVerifiers } from "../../../../lib/mockVerifiers";

export default function Page() {
  const [verifiers] = useState(initialVerifiers);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("All"); // New state for filter

  const handleRowSelect = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === currentVerifiers.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentVerifiers.map((verifier) => verifier.id));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const filteredVerifiers = verifiers.filter((verifier) => {
    const matchesSearch = Object.values(verifier).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesFilter =
      filterStatus === "All" || verifier.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentVerifiers = filteredVerifiers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredVerifiers.length / rowsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between space-x-8 w-full">
        <div className="relative flex items-center">
          <select
            className="bg-white w-[212px] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
            value={filterStatus}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Active">Active verifiers</option>
            <option value="Awaiting approval">Pending verifiers</option>
            <option value="Deactivated">Deactivated verifiers</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Name/Phone no/ Location"
              className="bg-white shadow placeholder:text-sm appearance-none border rounded py-2 px-6 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Verifier
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto mt-8 w-full">
        <div className="max-h-[calc(100vh-270px)] overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                    checked={
                      selectedRows.length === currentVerifiers.length &&
                      currentVerifiers.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-6 py-3 text-left font-bold text-xs text-black uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Partner
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-bold text-black uppercase tracking-wider flex items-center justify-end">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentVerifiers.map((verifier) => (
                <tr
                  key={verifier.id}
                  className={
                    selectedRows.includes(verifier.id) ? "bg-blue-50" : ""
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      checked={selectedRows.includes(verifier.id)}
                      onChange={() => handleRowSelect(verifier.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {verifier.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {verifier.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {verifier.phoneNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {verifier.partner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {verifier.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        verifier.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : verifier.status === "Awaiting approval"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {verifier.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-500 hover:text-gray-700">
                      <EllipsisHorizontalIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white flex justify-between items-center p-4 border-t border-gray-200">
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-2">Rows per page:</span>
            <div className="relative">
              <select
                className="bg-white shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm w-[89px] pr-8"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`${
                currentPage > 1
                  ? "text-blue-500 hover:text-blue-400"
                  : "text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              Previous
            </button>
            {totalPages > 1 &&
              pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`${
                    currentPage === page
                      ? "font-bold text-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`${
                currentPage < totalPages
                  ? "text-blue-500 hover:text-blue-400"
                  : "text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
