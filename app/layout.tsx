import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextJSTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canterbury Utilities",
  description: "Use this site to get various information about the school.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" enableSystem>
          <NextJSTopLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
