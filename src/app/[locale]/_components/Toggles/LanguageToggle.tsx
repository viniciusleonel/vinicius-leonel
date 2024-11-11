"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {usePathname, useRouter} from "@/i18n/routing";
import {useParams} from "next/navigation";
import {useTranslations} from "next-intl";
import {BrFlag, UsFlag} from "@/languages/flags";
import {useState, useEffect} from "react";

export function LanguageToggle() {

    const t = useTranslations('Languages');
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const { locale } = useParams();

    const [language, setLanguage] = useState(locale || 'pt');
    
    useEffect(() => {
        setLanguage(locale || 'pt');
    }, [locale]);

    function toggleLanguage(nextLocale: string) {
        router.replace(
            // @ts-ignore
            { pathname, params },
            { locale: nextLocale },
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" >
                    {language === "en" ? <UsFlag alt={t('en-alt')} />  : <BrFlag alt={t('pt-alt')} />}
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem className="gap-2" onClick={() => toggleLanguage('pt')}>
                    {t('pt')}
                    <BrFlag alt={t('pt-alt')}/>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2" onClick={() => toggleLanguage('en')}>
                    {t('en')}
                    <UsFlag alt={t('en-alt')}/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
