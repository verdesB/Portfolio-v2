import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import './global.scss'
import {Toaster} from "@/app/components/ui/Toaster";

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
    <html lang="fr">
    <head>
      <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
      <title>Portfolio - Verdès Benjamin</title>
    </head>
    <body className={inter.className}>{children}</body>

    </html>
  );
}
