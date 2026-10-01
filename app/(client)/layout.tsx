import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'react-hot-toast';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Shynzo — Everyday style, considered", template: "%s | Shynzo" },
  description: "Curated clothing and lifestyle essentials designed for modern everyday living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.variable} flex min-h-screen flex-col antialiased`}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: '#000000',
                color: '#ffffff'
              }
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
