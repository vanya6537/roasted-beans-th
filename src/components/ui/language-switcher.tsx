"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "compact" | "full";
  className?: string;
}

export function LanguageSwitcher({
  variant = "compact",
  className,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  // Remove locale prefix from pathname to get the actual path
  const pathWithoutLocale = pathname.startsWith(`/${locale}/`)
    ? pathname.slice(`/${locale}`.length) || "/"
    : pathname;

  const isEnglish = locale === "en";

  if (variant === "full") {
    return (
      <div
        className={cn(
          "flex gap-2 items-center justify-center",
          className
        )}
      >
        <Link
          href={`/en${pathWithoutLocale}`}
          className={cn(
            "px-4 py-2 rounded-lg font-semibold transition-colors text-sm",
            isEnglish
              ? "bg-amber-600 text-white"
              : "bg-stone-200 text-stone-700 hover:bg-stone-300"
          )}
        >
          English
        </Link>
        <Link
          href={`/th${pathWithoutLocale}`}
          className={cn(
            "px-4 py-2 rounded-lg font-semibold transition-colors text-sm",
            !isEnglish
              ? "bg-amber-600 text-white"
              : "bg-stone-200 text-stone-700 hover:bg-stone-300"
          )}
        >
          ไทย
        </Link>
      </div>
    );
  }

  // Compact variant for navbar
  return (
    <div className={cn("flex gap-1.5 items-center", className)}>
      <Link
        href={`/en${pathWithoutLocale}`}
        className={cn(
          "px-2.5 py-1 rounded-md text-xs font-bold transition-colors whitespace-nowrap",
          isEnglish
            ? "bg-amber-600 text-white"
            : "text-stone-600 hover:text-amber-700"
        )}
      >
        EN
      </Link>
      <span className="text-stone-400">/</span>
      <Link
        href={`/th${pathWithoutLocale}`}
        className={cn(
          "px-2.5 py-1 rounded-md text-xs font-bold transition-colors whitespace-nowrap",
          !isEnglish
            ? "bg-amber-600 text-white"
            : "text-stone-600 hover:text-amber-700"
        )}
      >
        TH
      </Link>
    </div>
  );
}
