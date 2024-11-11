
import type { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import { ThemeProvider } from "../theme-provider";
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
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${lusitana.className} dark:bg-dark-primary`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}