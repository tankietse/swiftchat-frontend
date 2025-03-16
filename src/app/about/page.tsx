'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
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
          <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
          <Link href="/about" className="text-blue-600 font-medium transition-colors">About</Link>
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
      <section className="container mx-auto px-4 sm:px-6 pt-16 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About This Project
            </h1>
            <p className="text-xl text-gray-600">
              SwiftChat is a personal educational project created to explore and learn modern web development technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Purpose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Purpose</h2>
            
            <div className="prose prose-lg text-gray-600">
              <p>
                SwiftChat is a personal learning project designed to gain hands-on experience with Spring Boot 3 microservices architecture, CI/CD pipelines using Jenkins, and modern frontend development with Next.js.
              </p>
              
              <p>
                This project was developed as part of the University of Technology (Hutech) course to demonstrate the practical application of enterprise software development concepts and explore the challenges of building scalable, real-time communication platforms.
              </p>
              
              <p>
                The development process involved researching industry best practices, implementing secure authentication flows, designing scalable database schemas, and creating an intuitive user experience. It serves as a practical exploration of how modern web applications are architected and deployed in production environments.
              </p>
              
              <p>
                Key learning objectives included mastering microservices communication patterns, implementing proper error handling and logging, securing API endpoints, and optimizing frontend performance for responsive user interactions across devices.
              </p>
              
              <p>
                While SwiftChat presents itself as a messaging platform with a polished interface and comprehensive feature set, it is important to note that this is an educational project and not a commercial product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Learning Goals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-3xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Microservices Architecture</h3>
                <p className="text-gray-600">
                  Exploring Spring Boot 3 microservices patterns, service discovery, API gateways, and distributed system challenges.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-3xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">CI/CD Pipeline</h3>
                <p className="text-gray-600">
                  Implementing continuous integration and deployment with Jenkins, automated testing, and deployment strategies.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-3xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Frontend</h3>
                <p className="text-gray-600">
                  Building responsive UIs with Next.js App Router, TypeScript, and exploring real-time data with Socket.IO.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Technology Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  Backend Technologies
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Spring Boot 3</strong> - Java-based microservices framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Spring Cloud</strong> - For service discovery and configuration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>PostgreSQL</strong> - Primary relational database</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Redis</strong> - For caching and session management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Kafka</strong> - Event streaming and message broker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Docker</strong> - Containerization of services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Jenkins</strong> - CI/CD pipeline automation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Frontend Technologies
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Next.js 19+</strong> - React framework with App Router</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>TypeScript</strong> - For type safety and developer experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>tRPC</strong> - End-to-end typesafe APIs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Zustand/Jotai</strong> - State management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Shadcn UI + Tailwind</strong> - Styling and component library</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>Socket.IO</strong> - Real-time communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span><strong>React Hook Form + Zod</strong> - Form handling with validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Architecture</h2>
            
            <div className="prose prose-lg text-gray-600">
              <p>
                SwiftChat implements a modern microservices architecture with clear separation between frontend and backend components.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Frontend Architecture</h3>
              <p>
                The frontend follows Next.js App Router patterns with server and client components. It communicates with the backend via tRPC and auto-generated client code from OpenAPI specifications, providing end-to-end type safety.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Backend Architecture</h3>
              <p>
                The backend consists of multiple microservices built with Spring Boot 3, each responsible for specific business domains. Services communicate via REST APIs and asynchronous messaging with Kafka.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">CI/CD Pipeline</h3>
              <p>
                The project uses Jenkins for continuous integration and deployment. When code is pushed to the repository, the pipeline runs tests, builds Docker images, and deploys the services to the target environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About the Creator</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-3xl p-8 shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                  alt="Creator" 
                  width={128} 
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">University Project</h3>
                <p className="text-gray-600">
                  This project was created as part of the 4HK2A CCPT course to demonstrate proficiency in full-stack development, microservices architecture, and DevOps practices. It represents a comprehensive exploration of modern web development technologies and practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Explore the Code</h2>
            <p className="text-xl text-blue-100 mb-8">
              View the source code and technical documentation on GitHub
            </p>
            <a 
              href="https://github.com/yourusername/swiftchat-frontend" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
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
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SwiftChat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
