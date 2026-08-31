import "./globals.css";
import { Inter, VT323, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
});
const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Portfolio - Lucas Stella",
  description: "Software Engineering Portfolio of Lucas Stella",
  metadataBase: new URL("https://lstelladev.com"),
  openGraph: {
    title: "Portfolio - Lucas Stella",
    description: "Software Engineering Portfolio of Lucas Stella",
    url: new URL("/", "https://lstelladev.com"),
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${vt323.variable} ${shareTechMono.variable} min-h-screen bg-background`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
