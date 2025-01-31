import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import { ScrollingTechIcons } from '../Skills/skills';

export default function Footer () {

    const t = useTranslations('Footer');

    return (
        <footer className="">
            <ScrollingTechIcons />
            <div className='bg-cyan-700 dark:bg-cyan-500 flex items-center justify-center py-3 gap-1'>
            <Link 
                href={"https://www.linkedin.com/in/viniciuslps/"}
                className="hover:text-cyan-500 dark:hover:text-black"
            >
                {t('text')}
            </Link>
            </div>
            
        </footer>
    )
}