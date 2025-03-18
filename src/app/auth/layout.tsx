import { Metadata } from "next/types";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication - SwiftChat",
  description: "Login, register or reset your password for SwiftChat",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="SwiftChat Logo" 
            width={32} 
            height={32} 
            priority 
          />
          <span className="text-xl font-semibold">SwiftChat</span>
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
      <footer className="border-t p-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} SwiftChat. All rights reserved.</p>
      </footer>
    </div>
  );
}
