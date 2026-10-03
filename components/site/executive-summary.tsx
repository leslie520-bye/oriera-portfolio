import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const ITEMS = [
  { label: "我是谁", text: profile.summary.who },
  { label: "我相信什么", text: profile.summary.belief },
  { label: "我正在做什么", text: profile.summary.doing },
];

export function ExecutiveSummary() {
  return (
    <section id="about" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading index="01" kicker="关于" title="我是谁，相信什么，正在做什么">
          从校园里的一台共享雨伞架，到人工智能与游戏。
        </SectionHeading>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06} className="bg-card">
              <div className="flex h-full flex-col p-7 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-amber-deep">
                  {item.label}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
