'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
          <Link href="/policies" className="text-gray-600 hover:text-gray-900 transition-colors">All Policies</Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            
            <div className="text-sm text-gray-500 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the SwiftChat messaging platform (the &quot;Service&quot;) operated by SwiftChat (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;).
              </p>

              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>

              <p className="font-semibold">
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use a &quot;strong&quot;password (passwords that use a combination of upper and lower case letters, numbers, and symbols) for your account.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Content</h2>
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p>
                By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
              </p>
              <p>
                We reserve the right to remove any Content from the Service at our discretion, without prior notice, for any reason, including but not limited to, if we believe that such Content violates these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Third-Party Authentication Services</h2>
              <p>
                Our Service allows you to sign in using third-party authentication services provided by Google, Facebook, and Apple. By using these authentication methods, you agree to comply with their respective terms of service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Terms of Service</a></li>
                <li><a href="https://www.facebook.com/terms.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Terms of Service</a></li>
                <li><a href="https://www.apple.com/legal/internet-services/itunes/us/terms.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple Terms of Service</a></li>
              </ul>
              <p>
                We are not responsible for the privacy practices or content of these third-party services. We encourage you to review their privacy policies.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Prohibited Uses</h2>
              <p>
                You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any&quot;junk mail&quot;,&quot;chain letter&quot;,&quot;spam&quot;, or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate SwiftChat, a SwiftChat employee, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone`s use or enjoyment of the Service, or which may harm SwiftChat or users of the Service.</li>
                <li>To use the Service in any manner that could disable, overburden, damage, or impair the Service or interfere with any other party`s use of the Service.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
              <p>
                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of SwiftChat and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SwiftChat.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service. You can also request to have your account deleted by contacting us at support@swiftchat.com.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall SwiftChat, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an&quot;AS IS&quot;and&quot;AS AVAILABLE&quot;basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>
              <p>
                SwiftChat, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days` notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at legal@swiftchat.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with navigation */}
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
              <Link href="/policies/terms" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Terms</Link>
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
