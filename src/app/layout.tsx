import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap', // Важно для производительности
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sportloom.com'),
  title: "Sportloom — Your Source for Sports Gear & News",
  description: "Latest sport news and overviews about sport equipments",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FC0DD7LVEM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FC0DD7LVEM');`}
        </Script>
      </head>
      <body className='app-shell bg-white text-gray-900'>
        <Header />
        <main className='app-content min-h-screen container mx-auto px-4 py-6 pt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
