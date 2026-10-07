"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories, nav, type NavItem } from "@/lib/data";

const iconBySlug = Object.fromEntries(categories.map((c) => [c.slug, c.icon]));
const descBySlug = Object.fromEntries(categories.map((c) => [c.slug, c.text]));

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null); // desktop dropdown
  const [acc, setAcc] = useState<string | null>(null); // mobile accordion

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeAll = () => {
    setMenu(null);
    setMobileOpen(false);
  };

  const isActive = (item: NavItem) => {
    const base = item.children ? "/" + item.href.split("/")[1] : item.href;
    return pathname === base || pathname.startsWith(base + "/");
  };

  return (
    <header className="sticky top-0 z-50 h-16">
      <div
        className={`mx-auto transition-all duration-300 ${
          scrolled
            ? "mt-3 w-[calc(100%-1.5rem)] max-w-6xl rounded-2xl border border-black/10 bg-white/85 shadow-lg shadow-navy/10 backdrop-blur-xl sm:w-[calc(100%-2.5rem)]"
            : "w-full max-w-[100vw] border-b border-black/5 bg-white"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-5 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" onClick={closeAll} aria-label="BBSV – Startseite" className="shrink-0 justify-self-start">
          <Image src="/bbsv_logo.png" alt="Berlin-Brandenburger Sportverein e. V." width={800} height={231} priority className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <nav className="hidden h-full items-center justify-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const mega = item.children?.some((c) => c.children);
            const open = menu === item.label;
            const active = isActive(item);
            return (
              <div
                key={item.label}
                className={`flex h-full items-center ${mega ? "" : "relative"}`}
                onMouseEnter={() => item.children && setMenu(item.label)}
                onMouseLeave={() => setMenu(null)}
                onFocus={() => item.children && setMenu(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setMenu(null);
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeAll}
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children ? open : undefined}
                  className={`group/link relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold leading-none transition-colors ${
                    active || open ? "text-brand" : "text-navy hover:text-brand"
                  }`}
                >
                  {item.label}
                  {item.children && <Chevron open={open} />}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                    }`}
                  />
                </Link>

                {item.children && !mega && (
                  <div
                    className={`absolute left-0 top-full w-64 pt-3 transition duration-200 ${
                      open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <ul className="rounded-2xl border border-black/10 bg-white p-2 shadow-2xl shadow-navy/15">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={closeAll}
                            className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-soft hover:text-brand ${
                              pathname === c.href ? "bg-soft text-brand" : "text-navy"
                            }`}
                          >
                            {c.label}
                            <span aria-hidden className="text-navy/30">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.children && mega && (
                  <div
                    className={`absolute inset-x-0 top-full pt-3 transition duration-200 ${
                      open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-2 rounded-2xl border border-black/10 bg-white p-3 shadow-2xl shadow-navy/15">
                      {item.children.map((cat) => {
                        const slug = cat.href.split("/").pop()!;
                        return (
                          <div key={cat.href} className="rounded-xl p-4 transition-colors hover:bg-soft/70">
                            <Link href={cat.href} onClick={closeAll} className="group/cat flex items-start gap-3">
                              <Image src={iconBySlug[slug]} alt="" width={143} height={143} className="h-11 w-11 shrink-0 rounded-xl" />
                              <span>
                                <span className="block font-display text-base font-bold uppercase tracking-wide text-navy group-hover/cat:text-brand">
                                  {cat.label}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-navy/60">{descBySlug[slug]}</span>
                              </span>
                            </Link>
                            <ul className="mt-3 space-y-0.5 border-l-2 border-navy/10 pl-3">
                              {cat.children?.map((s) => (
                                <li key={s.href}>
                                  <Link
                                    href={s.href}
                                    onClick={closeAll}
                                    className={`block rounded-md px-2 py-1 text-sm transition-colors hover:text-brand ${
                                      pathname === s.href ? "font-semibold text-brand" : "text-navy/80"
                                    }`}
                                  >
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/verein/mitgliedschaft"
            onClick={closeAll}
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark lg:inline-block"
          >
            Mitglied werden
          </Link>
          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-soft text-navy transition-colors hover:bg-navy hover:text-white lg:hidden"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h10" />}
            </svg>
          </button>
        </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`fixed inset-x-0 bottom-0 ${scrolled ? "top-[5.5rem]" : "top-16"} z-40 overflow-y-auto bg-white/95 px-5 pb-10 pt-4 backdrop-blur-xl transition duration-300 lg:hidden ${
          mobileOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="mx-auto max-w-lg">
          {nav.map((item) => {
            const open = acc === item.label;
            return (
              <div key={item.label} className="border-b border-black/5">
                {item.children ? (
                  <button
                    onClick={() => setAcc(open ? null : item.label)}
                    aria-expanded={open}
                    className={`flex w-full items-center justify-between py-4 font-display text-2xl font-bold uppercase ${isActive(item) ? "text-brand" : "text-navy"}`}
                  >
                    {item.label}
                    <Chevron open={open} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className={`block py-4 font-display text-2xl font-bold uppercase ${isActive(item) ? "text-brand" : "text-navy"}`}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && open && (
                  <div className="pb-4 pl-1">
                    {item.children.map((c) => (
                      <div key={c.href} className="mt-1">
                        <Link href={c.href} onClick={closeAll} className="block rounded-lg px-3 py-2 font-semibold text-navy hover:bg-soft">
                          {c.label}
                        </Link>
                        {c.children && (
                          <div className="ml-4 border-l-2 border-brand/30 pl-3">
                            {c.children.map((s) => (
                              <Link key={s.href} href={s.href} onClick={closeAll} className="block rounded-lg px-3 py-1.5 text-sm text-navy/70 hover:bg-soft hover:text-brand">
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/verein/mitgliedschaft" onClick={closeAll} className="mt-8 block rounded-full bg-brand px-6 py-4 text-center font-semibold text-white shadow-lg shadow-brand/30">
            Mitglied werden
          </Link>
        </nav>
      </div>
    </header>
  );
}
