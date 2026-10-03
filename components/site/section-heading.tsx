import type { ReactNode } from "react";
import { Reveal } from "@/components/site/reveal";

export function SectionHeading({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-amber-deep">
        <span className="font-display text-sm">{index}</span>
        <span className="hairline w-10" />
        <span>{kicker}</span>
      </p>
      <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          {children}
        </p>
      ) : null}
    </Reveal>
  );
}
