import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFT Creon",
  description: "First Tokenizing AI blockchain projects platform",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-stsh-reg bg-black text-white">{children}</body>
    </html>
  );
}