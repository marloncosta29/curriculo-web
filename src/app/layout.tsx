import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";
import { Head } from "next/document";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Curriculo de Marlon da costa",
  description: "Site gerado em NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
