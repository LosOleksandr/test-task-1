import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProgressProvider } from "./context/authProgressContext";

export const metadata: Metadata = {
  title: "Register Page",
  description: "Register Page",
};

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AuthProgressProvider>{children}</AuthProgressProvider>
      </body>
    </html>
  );
}
