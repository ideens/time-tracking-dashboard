import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time tracking dashboard",
  description: "Time tracking dashboard frontend project from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='sm:py-12 sm:px-0 lg:p-0 bg-blue-dark'>{children}</body>
    </html>
  );
}
