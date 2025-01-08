"use client";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import SearchInput from "@/components/SearchInput/SearchInput";
import Footer from "@/components/Footer/Footer";
import { Rajdhani, Inter } from "next/font/google";
import React, { useState } from "react";

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
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${inter.variable}`}>
        <div className="layoutContainer">
          <Header onSearchClick={handleOpenSearch} />
          {openSearch && (
            <SearchInput openSearch={openSearch} onClose={handleCloseSearch} />
          )}
          <main className='content'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
