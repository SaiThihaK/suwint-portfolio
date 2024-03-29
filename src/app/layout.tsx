import Navbar from "@/components/navbar/index";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Su Wint Thida",
  description: "UX/UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 max-w-7xl mx-auto relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
