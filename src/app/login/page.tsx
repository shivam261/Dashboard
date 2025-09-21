
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { WavyBackground } from "@/components/ui/wavy-background";


export default function LoginComponent() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSignupClick = () => {
    router.push('/login/signup');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Login response data:', data);
        

        const token = data.Token;
        


        
        // store username and token in localStorage  
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        
        console.log('About to redirect to dashboard...');
        router.push('/dashboard');
        console.log('Redirect called');
      } else {
        const errorData = await response.json();
        console.log('Login error response:', errorData);
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      {/* Two column flex container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-8">
        
        {/* Left Column - Content/Branding */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
             <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        SAPians
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        get details of Integration content at your fingertips.
      </p>
    </WavyBackground>
        </div>

        {/* Right Column - Login Form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Sign In
            </h2>
            
            {/* Login Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-2 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your username"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password || ''}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <button 
                  onClick={handleSignupClick}
                  className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer bg-transparent border-none"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
