import type {Metadata} from "next";
import {lusitana} from "@/app/ui/fonts";
import {ThemeProvider} from "@/theme-provider";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "./globals.css";
import {AuthProvider} from "../context/AuthContext";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";

export const metadata: Metadata = {
    title: "Vinicius Leonel",
    description: "Software Developer",
};

export default async function RootLayout({
    children,
    params: {locale}
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    // Providing all languages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={`${lusitana.className} dark:bg-dark-primary`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <NextIntlClientProvider messages={messages}>
                {children}
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}