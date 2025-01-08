"use client";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import SearchInput from "@/components/SearchInput/SearchInput";
import Footer from "@/components/Footer/Footer";
import { Rajdhani, Inter } from "next/font/google";
import React from "react";
import { SearchProvider } from "@/contexts/SearchContext";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  variable: "--font-rajdhani",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${inter.variable}`}>
        <SearchProvider>
        <div className="layoutContainer">
          <Header />
          <SearchInput />
          <main className='content'>{children}</main>
          <Footer />
        </div>
        </SearchProvider>
        
      </body>
    </html>
  );
}
