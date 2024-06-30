
import type { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import { Providers } from "./providers";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

export const metadata: Metadata = {
  title: "Vinicius Leonel",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lusitana.className} dark:bg-dark-primary`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}