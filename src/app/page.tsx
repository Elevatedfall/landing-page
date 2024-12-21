import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AuthPage() {
  return (
    <div className="min-h-screen w-full bg-black flex p-0 m-0">
      {/* Left side - Auth Form */}
      <div className="w-[520px] min-h-screen bg-black flex flex-col justify-center px-16">
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white">Welcome</h1>
            <h1 className="text-4xl font-bold text-white">Developer</h1>
            <p className="text-gray-400">Join the elite coding community</p>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3">
            <button className="w-full h-12 px-4 flex items-center justify-center space-x-2 bg-[#121212] hover:bg-[#1a1a1a] text-white rounded transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
            
            <button className="w-full h-12 px-4 flex items-center justify-center space-x-2 bg-[#121212] hover:bg-[#1a1a1a] text-white rounded transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-gray-500">OR</span>
            </div>
          </div>

          {/* Email Form */}
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Email address"
              className="h-12 bg-[#121212] border-0 text-white placeholder:text-gray-500 focus:ring-0"
            />
            <Input 
              type="password" 
              placeholder="Password"
              className="h-12 bg-[#121212] border-0 text-white placeholder:text-gray-500 focus:ring-0"
            />
            <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Sign In
            </Button>
          </div>

          {/* Footer Links */}
          <div className="space-y-2 text-sm">
            <a href="#" className="block text-gray-400 hover:text-white transition-colors">
              Forgot your password?
            </a>
            <p className="text-gray-400">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="flex-1 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <img 
              src="/api/placeholder/700/500" 
              alt="Welcome illustration" 
              className="rounded-lg opacity-75"
            />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}