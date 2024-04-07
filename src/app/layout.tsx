import type { Metadata } from "next";
import { lusitana } from "@/app/ui/fonts";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinicius Leonel",
  description: "Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-bt" suppressHydrationWarning>
      <body className={`${lusitana.className} bg-zinc-200 dark:bg-bg-default`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}