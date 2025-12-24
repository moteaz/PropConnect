"use client";

import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";

interface DashboardHeaderProps {
  userName: string;
  onLogout: () => void;
}

export function DashboardHeader({ userName, onLogout }: DashboardHeaderProps) {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              PropertyConnect
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 hidden sm:inline">Welcome, {userName}</span>
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-violet-600 transition-colors">
              <FaSignOutAlt />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
