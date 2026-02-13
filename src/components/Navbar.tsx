import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Common.nav");

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-amber-900">
          Roasted Beans TH
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition-colors hover:text-amber-700">
            {t("home")}
          </Link>
          <Link
            href="#products"
            className="transition-colors hover:text-amber-700"
          >
            {t("shop")}
          </Link>
          <Link
            href="#wholesale"
            className="transition-colors hover:text-amber-700"
          >
            {t("wholesale")}
          </Link>
          <Link
            href="#about"
            className="transition-colors hover:text-amber-700"
          >
            {t("about")}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          {/* Mobile menu would go here - simplified for now */}
        </div>
      </div>
    </nav>
  );
}
