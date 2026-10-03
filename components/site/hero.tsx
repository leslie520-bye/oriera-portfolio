import Image from "next/image";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-navy/10 blur-3xl dark:bg-navy/40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
      </div>

      <div className="container relative grid items-center gap-14 pb-16 pt-28 md:grid-cols-[1fr_auto] md:pb-24 md:pt-36">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-amber-deep">
              <span className="h-px w-8 bg-amber-deep" />
              {profile.brand} {profile.brandEn} · {profile.role}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display mt-6 text-5xl font-semibold tracking-tight text-balance md:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-3 font-display text-sm tracking-[0.24em] text-amber-deep">
              {profile.taglineEn}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#about">
                <Button variant="outline">了解我的故事</Button>
              </a>
              <a href="#contact">
                <Button>联系我</Button>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <figure className="w-full max-w-sm">
            <Image
              src="/portrait.jpg"
              alt={`${profile.name}个人形象照`}
              width={1400}
              height={933}
              priority
              sizes="(max-width: 768px) 100vw, 448px"
              className="h-auto w-full"
            />
            <figcaption className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted">
              <span>{profile.name}</span>
              <span>{profile.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
