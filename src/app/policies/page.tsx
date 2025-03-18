'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="SwiftChat Logo" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-medium text-gray-800">SwiftChat</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
          <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              SwiftChat Policies
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 text-center">
              We`re committed to transparency and protecting your privacy. 
              Please review our policies to understand how we handle your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/policies/privacy">
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Privacy Policy</h2>
                <p className="text-gray-600 mb-4">
                  Learn how we collect, use, and protect your personal information.
                </p>
                <div className="text-blue-600 font-medium flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>

            <Link href="/policies/terms">
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Terms of Service</h2>
                <p className="text-gray-600 mb-4">
                  Guidelines for using our services and your responsibilities.
                </p>
                <div className="text-blue-600 font-medium flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>

            <Link href="/policies/cookies">
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookie Policy</h2>
                <p className="text-gray-600 mb-4">
                  Information about how we use cookies and similar technologies.
                </p>
                <div className="text-blue-600 font-medium flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="mt-16 bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Authentication</h3>
            <p className="text-gray-600 mb-4">
              SwiftChat uses authentication services from Google, Facebook, and other providers. By using these services, you agree to their respective terms and privacy policies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Data Policy</a>
              </li>
              <li>
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image 
                src="/logo.svg" 
                alt="SwiftChat Logo" 
                width={32} 
                height={32} 
                className="rounded-full"
              />
              <span className="ml-2 text-lg font-medium text-gray-800">SwiftChat</span>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <Link href="/policies/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</Link>
              <Link href="/policies/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</Link>
              <Link href="/policies/cookies" className="text-gray-600 hover:text-gray-900 transition-colors">Cookies</Link>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SwiftChat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
