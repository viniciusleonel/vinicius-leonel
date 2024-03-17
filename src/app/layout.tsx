import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-bt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
//   isDarkMode, // Recebendo isDarkMode como uma propriedade
// }: Readonly<{
//   children: React.ReactNode;
//   isDarkMode: boolean; // Definindo o tipo da propriedade
// }>) {
//   return (
//     <html lang="pt-bt" className={isDarkMode ? 'dark' : ''}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
