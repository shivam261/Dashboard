
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { WavyBackground } from "@/components/ui/wavy-background";


export default function LoginComponent() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [client_id, setClientId] = useState<string>('');
  const [client_secret, setClientSecret] = useState<string>('');
  const [token_url, setTokenUrl] = useState<string>('');
  const [tenant_url, setTenantUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSignupClick = () => {
    router.push('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          client_id: client_id,
          client_secret: client_secret,
          token_url: token_url,
          tenent_url: tenant_url,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        // Handle successful signup here (e.g., redirect to login page)
        router.push('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
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
              Sign up
            </h2>

            {/* Signup Form */}
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
                            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Client Id
                </label>
                <input
                  type="text"
                  value={client_id || ''}
                  onChange={(e) => setClientId(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your client id"
                  required
                />
              </div>
                            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Client Secret
                </label>
                <input
                  type="password"
                  value={client_secret || ''}
                  onChange={(e) => setClientSecret(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your client secret"
                  required
                />
              </div>
                            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tenant Url
                </label>
                <input
                  type="text"
                  value={tenant_url || ''}
                  onChange={(e) => setTenantUrl(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your tenant url"
                  required
                />
              </div>
                            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Token Url
                </label>
                <input
                  type="text"
                  value={token_url || ''}
                  onChange={(e) => setTokenUrl(e.target.value)}
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
                {isLoading ? 'registering...' : 'Sign In'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <button 
                  onClick={handleSignupClick}
                  className="text-indigo-400 hover:text-indigo-300 underline cursor-pointer bg-transparent border-none"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
