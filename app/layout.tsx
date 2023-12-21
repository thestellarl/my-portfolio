import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Lucas Stella",
  description: "Software Engineering Portfolio of Lucas Stella",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#2d232e]`}>
        {children}
      </body>
    </html>
  );
}
