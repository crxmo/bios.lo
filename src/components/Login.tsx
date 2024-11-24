import React, { useState } from 'react';
import { Mail, Key, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    if (!email.includes('@')) {
      setErrors(prev => ({
        ...prev,
        email: 'Veuillez entrer une adresse email valide'
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        email: undefined
      }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setFormData(prev => ({ ...prev, email: newEmail }));
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData(prev => ({ ...prev, password: newPassword }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(formData.email);
    if (!errors.email) {
      console.log('Form submitted:', formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  required
                  className={`block w-full pl-10 pr-3 py-3 bg-gray-900/50 border-0 rounded-xl text-white placeholder-gray-500 focus:ring-0 ${
                    errors.email ? 'ring-2 ring-red-500' : ''
                  }`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleEmailChange}
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 text-red-400 text-sm px-2 animate-fadeIn">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full pl-10 pr-12 py-3 bg-gray-900/50 border-0 rounded-xl text-white placeholder-gray-500 focus:ring-0"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-white text-sm font-medium transition-all bg-purple-600 hover:bg-purple-700 hover:scale-[1.02]"
            >
              Login
            </button>

            <p className="text-center text-gray-400 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-500 hover:text-purple-400 transition-colors">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}