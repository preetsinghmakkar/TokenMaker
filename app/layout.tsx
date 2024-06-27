import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/contextProvider/Web3ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaia-TokenifyMe App",
  description: "Create ERC20 Tokens Now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/klaytn-logo.png" />
      </head>
      <body className={inter.className}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
