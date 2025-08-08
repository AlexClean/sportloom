import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";


export const metadata: Metadata = {
  title: "Sportloom — Your Source for Sports Gear & News",
  description: "Latest sport news and overviews about sport equipments",
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
