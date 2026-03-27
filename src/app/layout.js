import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ChatTrigger from "@/components/ChatTrigger";
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
    <html lang="en">
      <body className="antialiased font-sans">
        <ChatTrigger />
        <FloatingContact />
        {children}
        <Script
          id="jivo-chat"
          strategy="afterInteractive"
          src="//code.jivosite.com/widget/Kh9JPJLiMo"
        />
      </body>
    </html>
  );
}
