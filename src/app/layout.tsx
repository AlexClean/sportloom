import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";


export const metadata: Metadata = {
  title: "Sportloom — Your Source for Sports Gear & News",
  description: "Latest sport news and overviews about sport equipments",
  manifest:"/manifest.json",
  icons: {
    icon: [
    {url:"/favicon-16x16.png", sizes:"16x16", type:"image/png"},
    {url:"/favicon-32x32.png", sizes:"32x32", type:"image/png"},
    {url:"/favicon-48x48.png", sizes:"48x48", type:"image/png"},
    {url:"/favicon-180x180.png", sizes:"180x180", type:"image/png"},
    {url:"/favicon.ico", sizes:"any"}
  ],
  apple: [{url:"/apple-touch-icon.png", sizes:"180x180"}],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='app-shell bg-white text-gray-900'>
        <Header/>
        <main className='app-content min-h-screen container mx-auto px-4 py-6 pt-16'>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
