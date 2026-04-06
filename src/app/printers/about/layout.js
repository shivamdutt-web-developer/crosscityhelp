import Script from 'next/script';

export const metadata = {
  title: "Printer Setup | Official Support & Drivers",
  description: "Easy step-by-step printer setup for HP, Canon, Epson, Brother and more. Download official drivers and software securely.",
};

export default function PrinterLayout({ children }) {
  return (
    <>
      {/* Google Tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18045290315"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-18045290315');
        `}
      </Script>
      {children}
    </>
  );
}
