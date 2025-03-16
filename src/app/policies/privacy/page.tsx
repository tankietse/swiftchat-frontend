'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            
            <div className="text-sm text-gray-500 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                This Privacy Policy describes how SwiftChat (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares your personal information when you use our SwiftChat messaging platform (the "Service").
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information you provide to us</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information: When you register, we collect your name, email address, and password.</li>
                <li>Profile information: Any information you add to your profile, such as a profile picture, bio, or phone number.</li>
                <li>Communications: Messages, images, files, and other content you send through our Service.</li>
                <li>Customer support: Information you provide when you contact our support team.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information we collect automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information: IP address, device type, operating system, and browser type.</li>
                <li>Usage information: How you use our Service, including time spent, features used, and actions taken.</li>
                <li>Location information: General location based on IP address.</li>
                <li>Cookies and similar technologies: We use these to enhance your experience and collect information about your usage patterns. See our <Link href="/policies/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link> for more details.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information from third parties</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Social login: If you choose to register or login using a social media account (such as Google, Facebook, or Apple), we receive certain information from that platform, such as your name, email address, and profile picture.</li>
                <li>Other third-party services: We may receive information from other third-party services integrated into our platform.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process and complete transactions</li>
                <li>Send administrative messages, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Share Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With other users: Your profile information and messages are shared with users you communicate with.</li>
                <li>Service providers: We share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                <li>Third-party integrations: When you use third-party services that integrate with our Service.</li>
                <li>Legal requirements: We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                <li>Business transfers: In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li>With your consent: We may share information with your consent or at your direction.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide the Service and fulfill the purposes described in this Privacy Policy. We may also retain and use this information to comply with our legal obligations, resolve disputes, prevent abuse, and enforce our agreements.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access: You can request a copy of the personal information we hold about you.</li>
                <li>Correction: You can ask us to correct inaccurate or incomplete information.</li>
                <li>Deletion: You can ask us to delete your personal information in certain circumstances.</li>
                <li>Restriction: You can ask us to restrict the processing of your personal information.</li>
                <li>Data portability: You can ask for a copy of your personal information in a machine-readable format.</li>
                <li>Objection: You can object to our processing of your personal information in certain circumstances.</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@swiftchat.com.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Authentication Services</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Google</h3>
              <p>
                Our Service offers sign-in and authentication through Google. When you sign in using your Google account, we collect information that Google provides to us, which may include your name, email address, and profile picture. This information is processed in accordance with this Privacy Policy.
              </p>
              <p>
                Google's privacy practices are governed by their own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>, which we encourage you to review.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Facebook</h3>
              <p>
                Our Service offers sign-in and authentication through Facebook. When you sign in using your Facebook account, we collect information that Facebook provides to us, which may include your name, email address, and profile picture. This information is processed in accordance with this Privacy Policy.
              </p>
              <p>
                Facebook's privacy practices are governed by their own <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Data Policy</a>, which we encourage you to review.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Apple</h3>
              <p>
                Our Service offers sign-in and authentication through Apple. When you sign in using your Apple ID, we collect information that Apple provides to us, which may include your name and email address. This information is processed in accordance with this Privacy Policy.
              </p>
              <p>
                Apple's privacy practices are governed by their own <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>, which we encourage you to review.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">International Transfers</h2>
              <p>
                Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our Service is not directed to individuals under the age of 13 (or the minimum age required in your country). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information from our servers.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@swiftchat.com.
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
              <Link href="/policies/privacy" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Privacy</Link>
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
