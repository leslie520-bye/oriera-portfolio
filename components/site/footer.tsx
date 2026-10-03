import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">
            {profile.brand}{" "}
            <span className="text-xs uppercase tracking-[0.3em] text-amber-deep">
              {profile.brandEn}
            </span>
          </p>
          <p className="mt-2 text-sm text-muted">
            © 2026 {profile.brandFull} · {profile.name}
          </p>
          <p className="mt-1 font-display text-xs tracking-[0.2em] text-muted">
            {profile.taglineEn}
          </p>
        </div>

        <a
          href="#top"
          aria-label="回到顶部"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-muted transition-colors hover:border-amber-deep hover:text-amber-deep"
        >
          <ArrowUp size={17} />
        </a>
      </div>
    </footer>
  );
}
