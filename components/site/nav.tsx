"use client";

import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
import { profile } from "@/data/profile";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "关于" },
  { href: "#career", label: "履历" },
  { href: "#results", label: "成果" },
  { href: "#insights", label: "洞察" },
  { href: "#contact", label: "联系" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-baseline gap-2"
          aria-label="回到顶部"
        >
          <span className="font-display text-lg font-semibold tracking-tight">
            {profile.brand}
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-amber-deep">
            {profile.brandEn}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative py-1 text-sm transition-colors",
                active === l.href.slice(1)
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 h-px bg-amber-deep transition-opacity",
                  active === l.href.slice(1) ? "opacity-100" : "opacity-0"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 py-1 text-sm text-muted transition-colors hover:text-foreground md:flex"
            >
              <Download size={15} />
              简历
            </a>
          ) : null}
          <a href="#contact" className="hidden md:block">
            <Button size="sm">联系我</Button>
          </a>
          <button
            type="button"
            aria-label="打开导航"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-foreground md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <nav
          className="mt-8 flex flex-col gap-1"
          aria-label="移动端导航"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border py-4 text-base text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 border-b border-border py-4 text-base text-muted transition-colors hover:text-foreground"
            >
              <Download size={15} />
              下载简历
            </a>
          ) : null}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6"
          >
            <Button className="w-full">联系我</Button>
          </a>
        </nav>
      </Sheet>
    </header>
  );
}
