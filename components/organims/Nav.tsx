"use client";
import { useSyncExternalStore, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { getIsDark, subscribeTheme, toggleTheme } from "@/lib/theme";

export function ThemeToggle({ label }: { label: string }) {
  const isDark = useSyncExternalStore(subscribeTheme, getIsDark, () => false);

  return (
    <button
      type="button"
      onClick={() => toggleTheme()}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200/60 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = (href: string) =>
    `text-xs transition-colors ${
      pathname === href
        ? "text-neutral-900 dark:text-neutral-50"
        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
    }`;

  const mobileNavLinkClass = (href: string) =>
    `text-sm font-medium ${
      pathname === href
        ? "text-neutral-950 dark:text-neutral-50"
        : "text-neutral-600 dark:text-neutral-300"
    }`;

  return (
    <nav className="relative bg-white dark:bg-neutral-950 border-b border-neutral-200/60 dark:border-neutral-800 transition-colors duration-300 z-50">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-neutral-900 dark:text-neutral-50 hover:opacity-80 transition-opacity"
        >
          Florencia Scavone
        </Link>
        <div className="hidden md:flex items-center gap-7">
          <Link href="/" className={navLinkClass("/")}>
            {t("home")}
          </Link>
          <Link href="/#about" className={navLinkClass("/#about")}>
            {t("about")}
          </Link>
          <Link href="/#skills" className={navLinkClass("/#skills")}>
            {t("skills")}
          </Link>
          <Link href="/#education" className={navLinkClass("/#education")}>
            {t("education")}
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle label={t("toggleTheme")} />
          <div className="flex bg-neutral-100 dark:bg-neutral-900 p-0.5 rounded-lg border border-neutral-200/50 dark:border-neutral-800">
            <Link href={pathname} locale="en" className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition-all ${locale === "en" ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-sm" : "text-neutral-400"}`}>
              EN
            </Link>
            <Link href={pathname} locale="es" className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition-all ${locale === "es" ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-sm" : "text-neutral-400"}`}>
              ES
            </Link>
          </div>
          <Link href='#contact' className="text-xs px-4 py-1.5 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100">
            {t("contact")}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle label={t("toggleTheme")} />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center text-neutral-700 dark:text-neutral-300 focus:outline-none rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 h-5 relative">
              <span className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`} />
              <span className={`absolute left-0 w-full h-[1.5px] bg-current top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
              }`} />
              <span className={`absolute left-0 w-full h-[1.5px] bg-current transition-all duration-300 ease-in-out ${
                isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`} />
            </div>
          </button>
        </div>
      </div>
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
      }`}>
        <div className="px-6 py-6 flex flex-col gap-5 font-sans">
          <Link href="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClass("/")}>
            {t("home")}
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className={mobileNavLinkClass("/#about")}>
            {t("about")}
          </Link>
           <Link href="/#skills" onClick={() => setIsOpen(false)} className={mobileNavLinkClass("/#skills")}>
            {t("skills")}
          </Link>
           <Link href="/#education" onClick={() => setIsOpen(false)} className={mobileNavLinkClass("/#education")}>
            {t("education")}
          </Link>

          <a href="https://github.com/scavonemf" target="_blank" rel="noreferrer" className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
            GitHub
          </a>
          
          <hr className="border-neutral-200 dark:border-neutral-800 my-1" />
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-neutral-400 font-mono">Language</span>
            <div className="flex gap-4 text-xs font-bold">
              <Link href={pathname} locale="en" className={locale === "en" ? "text-neutral-950 dark:text-neutral-50 underline" : "text-neutral-400"}>EN</Link>
              <Link href={pathname} locale="es" className={locale === "es" ? "text-neutral-950 dark:text-neutral-50 underline" : "text-neutral-400"}>ES</Link>
            </div>
          </div>

          <button className="w-full text-center text-xs py-2.5 bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950 rounded-lg font-medium mt-2">
            {t("contact")}
          </button>
        </div>
      </div>
    </nav>
  );
}