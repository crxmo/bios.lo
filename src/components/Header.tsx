import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl bg-gray-900/90 backdrop-blur-md z-50 rounded-2xl border border-gray-800/50">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gray-800 p-2 rounded-xl">
                <span className="text-2xl">🎯</span>
              </div>
              <span className="text-xl font-semibold text-white">bios.lol</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Hone.gg Partnership
            </Link>
            <Link
              to="https://discord.gg/bioslol"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discord</span>
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors text-sm">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-all hover:scale-105 text-sm"
            >
              Sign Up Free
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}