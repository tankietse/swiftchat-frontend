'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            
            <div className="text-sm text-gray-500 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                This Cookie Policy explains how SwiftChat ("we", "our", or "us") uses cookies and similar technologies to recognize you when you visit our website and use our services, including our mobile application (collectively, "Services"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What are cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites function, work more efficiently, and provide analytic information.
              </p>
              <p>
                Cookies set by the website owner (in this case, SwiftChat) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your device both when it visits the website in question and also when it visits certain other websites.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why do we use cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons for our Services to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Services. Third parties serve cookies through our Services for advertising, analytics, and other purposes.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of cookies we use</h2>
              <p>The specific types of first and third-party cookies served through our Services and their purposes are described below:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
              <p>
                These cookies are strictly necessary to provide you with services available through our Services and to use some of their features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Services, you cannot refuse them without impacting how our Services function.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Session Cookies:</strong> These cookies allow our Services to remember choices you make when you use our website, such as remembering your login details or language preference. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you visit our Services.
                </li>
                <li>
                  <strong>Authentication Cookies:</strong> Used to identify authenticated users, preventing them from having to log in multiple times when navigating between pages or returning to the site.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Performance and Analytics Cookies</h3>
              <p>
                These cookies are used to collect information about traffic to our Services and how users use our Services. The information gathered does not identify any individual visitor. We use this information to help operate our Services more efficiently, to gather broad demographic information, and to monitor the level of activity on our Services.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> We use Google Analytics cookies to help us analyze how users use the Services, to improve their performance, and to provide better user experiences.
                </li>
                <li>
                  <strong>Usage Pattern Cookies:</strong> These cookies track information about how the Services are used so that we can make improvements and report on our performance. We may also use these cookies to test new pages or features to see how users react to them.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Functionality Cookies</h3>
              <p>
                These cookies allow the Services to remember choices you make and provide enhanced, more personal features. For example, they may be used to remember your login details, language preferences, and can also be used to provide services you have asked for.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Social Media Cookies</h3>
              <p>
                Our Services may integrate with social media services (e.g., Facebook, Twitter) and may include buttons that allow you to share content on social media. These social media services may set their own cookies to track your use of our Services and their buttons. We do not control the setting of these cookies, so please check the third-party websites for more information about their cookies and how to manage them.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-party cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Services, deliver advertisements on and through the Services, and so on.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Authentication Services</h3>
              <p>
                When you sign in to SwiftChat using third-party authentication services such as Google, Facebook, or Apple, these services may use cookies to facilitate the authentication process:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google:</strong> Google sets cookies to enable authentication through your Google account. You can learn more about how Google uses cookies in their <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cookie Policy</a>.
                </li>
                <li>
                  <strong>Facebook:</strong> Facebook sets cookies to enable authentication through your Facebook account. You can learn more about how Facebook uses cookies in their <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cookie Policy</a>.
                </li>
                <li>
                  <strong>Apple:</strong> Apple may set cookies to enable authentication through your Apple ID. You can learn more about how Apple uses cookies in their <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How can you control cookies?</h2>
              <p>
                Most browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience. Some browsers offer a "Do Not Track" ("DNT") signal whereby you may indicate your preference regarding tracking and cross-site tracking. Although we do not currently employ technology that recognizes DNT signals, we will only process your personal data in accordance with this Cookie Policy.
              </p>
              <p>
                Below you can find information about how to manage cookies in the most popular browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a>
                </li>
                <li>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple Safari</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to this Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please email us at privacy@swiftchat.com.
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
              <Link href="/policies/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</Link>
              <Link href="/policies/cookies" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">Cookies</Link>
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
