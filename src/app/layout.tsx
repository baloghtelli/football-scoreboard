import '../styles/globals.scss';
import Header from '../components/Header';
import { Rajdhani, Inter } from "next/font/google";


const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
  variable: '--font-rajdhani',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${inter.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
