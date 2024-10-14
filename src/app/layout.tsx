import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import './main.scss'
import capture from '../../public/capture.jpeg'
import Head from "next/head";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Verdès Benjamin",
  description: "Bienvenue sur mon portfolio de développeur web , vous y retrouverez mes projets en cours de développement",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="no-visible-scrollbar">
    <Head>
      <meta property="og:image" content={capture.src}/>
    </Head>
    <body className={`${inter.className} no-visible-scrollbar`}>{children}</body>
    </html>
  );
}
