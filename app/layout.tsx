import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { montserrat } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
