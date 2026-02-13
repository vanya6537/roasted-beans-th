import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Common.nav');

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-amber-900">
          Roasted Beans TH
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-amber-700 transition-colors">{t('home')}</Link>
          <Link href="#products" className="hover:text-amber-700 transition-colors">{t('shop')}</Link>
          <Link href="#wholesale" className="hover:text-amber-700 transition-colors">{t('wholesale')}</Link>
          <Link href="#about" className="hover:text-amber-700 transition-colors">{t('about')}</Link>
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          {/* Mobile menu would go here - simplified for now */}
        </div>
      </div>
    </nav>
  );
}
