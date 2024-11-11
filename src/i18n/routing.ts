import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {locales} from "@/locales";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'pt',
    localePrefix: {
        mode: 'always',
        prefixes: {
            'pt': '/pt',
            'en': '/en'
        }
    }

});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
    createNavigation(routing);