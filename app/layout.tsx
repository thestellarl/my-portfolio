import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Lucas Stella",
  description: "Software Engineering Portfolio of Lucas Stella",
  metadataBase: new URL("https://lstelladev.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
