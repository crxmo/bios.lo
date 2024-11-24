import React, { useState } from 'react';
import { Mail, Key, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SignUpProps {
  defaultUsername?: string;
}

interface FormData {
  email: string;
  password: string;
  username: string;
  acceptedTos: boolean;
}

export default function SignUp({ defaultUsername = '' }: SignUpProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    username: defaultUsername,
    acceptedTos: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-gray-800 p-2 rounded-xl">
            <span className="text-2xl">🎯</span>
          </div>
          <span className="text-xl font-semibold text-white">bios.lol</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800/30 backdrop-blur-sm py-8 px-6 shadow-xl sm:rounded-2xl border border-gray-700/30">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-3 bg-gray-900/50 border-0 rounded-xl text-white placeholder-gray-500 focus:ring-0"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                required
                className="block w-full pl-10 pr-3 py-3 bg-gray-900/50 border-0 rounded-xl text-white placeholder-gray-500 focus:ring-0"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div className="relative">
              <div className="flex rounded-xl bg-gray-900/50 overflow-hidden">
                <div className="flex items-center px-4 bg-gray-800/50 border-r border-gray-700/30">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-500 ml-2">bios.lol/</span>
                </div>
                <input
                  type="text"
                  required
                  className="flex-1 py-3 px-3 bg-transparent border-0 text-white placeholder-gray-500 focus:ring-0"
                  placeholder="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="tos"
                type="checkbox"
                className="h-4 w-4 bg-gray-900/50 border-gray-700 rounded text-purple-600 focus:ring-purple-500"
                checked={formData.acceptedTos}
                onChange={(e) => setFormData({ ...formData, acceptedTos: e.target.checked })}
              />
              <label htmlFor="tos" className="ml-2 block text-sm text-gray-400">
                I agree to ToS
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.acceptedTos}
              className={`w-full py-3 px-4 rounded-xl text-white text-sm font-medium transition-all ${
                formData.acceptedTos 
                  ? 'bg-purple-600 hover:bg-purple-700 hover:scale-[1.02]' 
                  : 'bg-gray-700 cursor-not-allowed'
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}