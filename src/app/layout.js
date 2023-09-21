import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/base/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nico Schönfeld",
  description: "Portfolio Nico Schönfeld - Front-End Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
