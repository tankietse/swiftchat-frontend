'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 sm:px-6 flex items-center justify-between">
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
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
          <Link href="/auth/register" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Sign up
          </Link>
        </nav>
        
        <button className="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Messaging, simplified.
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Swift, secure, and seamless communication for teams and individuals.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/auth/register" className="bg-blue-600 text-white text-center px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                    Get Started
                  </Link>
                  <Link href="/features" className="bg-white text-blue-600 text-center px-8 py-4 rounded-full text-lg font-medium border border-blue-200 hover:bg-gray-50 transition-colors">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative">
              <motion.div 
                className="relative w-full aspect-square max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Animated glowing border */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-3xl shadow-lg"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(79, 70, 229, 0.4)",
                      "0 0 20px rgba(79, 70, 229, 0.6)",
                      "0 0 0 rgba(79, 70, 229, 0.4)"
                    ],
                    rotate: [3, 3.5, 3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                
                {/* Rotating background element */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl transform shadow-lg"
                  animate={{ rotate: [3, 2, 3] }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut" 
                  }}
                />
                
                {/* Floating image container */}
                <motion.div 
                  className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-lg"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [-3, -2, -3]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  {/* Inner border that animates */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-4 border-white/50 z-10"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                      borderColor: [
                        "rgba(255, 255, 255, 0.3)",
                        "rgba(255, 255, 255, 0.6)",
                        "rgba(255, 255, 255, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <Image 
                    src="/images/chat-ui.png" 
                    alt="SwiftChat interface preview"
                    width={500}
                    height={500}
                    className="object-cover object-center"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Designed for modern communication</h2>
            <p className="text-xl text-gray-600">
              SwiftChat combines simplicity with powerful features to create the perfect messaging experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Messaging</h3>
              <p className="text-gray-600">
                Instant delivery with read receipts and typing indicators. 
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">End-to-End Encryption</h3>
              <p className="text-gray-600">
                Security first approach with encrypted conversations.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rich Media Sharing</h3>
              <p className="text-gray-600">
                Seamlessly share photos, files, and documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Preview */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[40px] p-8 sm:p-12 shadow-xl">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Clean, intuitive interface</h2>
                <p className="text-xl text-blue-100">
                  Designed for both efficiency and aesthetic appeal
                </p>
              </div>
              
              <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image 
                  src="/images/chat-user-interface.png" 
                  alt="SwiftChat full interface"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by teams worldwide</h2>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                  <Image 
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Testimonial avatar"
                  width={96}
                  height={96}
                  loading="lazy"
                  className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-lg italic mb-6">
                    &ldquo;SwiftChat has transformed how our team communicates. The clean interface and reliable performance have made it our go-to messaging platform.&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-gray-500">Product Manager at Acme Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who trust SwiftChat for their communication needs.
            </p>
            <Link href="/auth/register" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Create your account
            </Link>
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
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <span className="ml-2 text-lg font-medium text-gray-800">SwiftChat</span>
            </div>
            
            <div className="grid grid-cols-2 md:flex md:space-x-6 mb-6 md:mb-0 gap-y-2">
              <div className="flex flex-col space-y-2 mr-8 md:mr-0 md:flex-row md:space-y-0 md:space-x-6">
                <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              </div>
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
                <Link href="/policies" className="text-gray-600 hover:text-gray-900 transition-colors">Policies</Link>
                <Link href="/policies/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</Link>
                <Link href="/policies/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</Link>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} SwiftChat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
