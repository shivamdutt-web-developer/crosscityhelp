import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// Root layout shell

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-32 scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <Script src="//code.jivosite.com/widget/Kh9JPJLiMo" strategy="lazyOnload" />
      </body>
    </html>
  );
}
