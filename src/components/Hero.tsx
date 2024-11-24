import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleClaim = () => {
    if (username) {
      navigate(`/signup?username=${username}`);
    } else {
      navigate('/signup');
    }
  };

  return (
    <section className="pt-32 pb-16 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
          Everything you want, right here.
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
          bios.lol is your go-to for modern, feature-rich biolinks and fast, secure file hosting. 
          Everything you need — right here.
        </p>
        
        <div className="max-w-md mx-auto mb-8 animate-fade-in delay-200">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 flex items-center mb-4 border border-gray-700/50">
            <span className="text-gray-400">bios.lol/</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-transparent text-white outline-none flex-1 ml-1 placeholder-gray-500"
            />
          </div>
          <button
            onClick={handleClaim}
            className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all hover:scale-105"
          >
            Claim Now
          </button>
        </div>

        <div className="mt-16 animate-fade-in delay-300">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
            alt="Platform Preview"
            className="rounded-2xl shadow-2xl border border-gray-800/50"
          />
        </div>
      </div>
    </section>
  );
}