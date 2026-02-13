"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => onSelectChange("th")}
        className={`rounded px-2 py-1 text-sm ${
          locale === "th"
            ? "bg-amber-800 text-white"
            : "bg-gray-200 text-gray-700"
        } ${isPending ? "opacity-50" : ""}`}
        disabled={isPending}
      >
        TH
      </button>
      <button
        onClick={() => onSelectChange("en")}
        className={`rounded px-2 py-1 text-sm ${
          locale === "en"
            ? "bg-amber-800 text-white"
            : "bg-gray-200 text-gray-700"
        } ${isPending ? "opacity-50" : ""}`}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}
