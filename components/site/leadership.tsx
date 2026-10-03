import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function Leadership() {
  return (
    <section id="leadership" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading index="02" kicker="领导力" title="三条原则">
          带团队的方式，就是相信人的方式。
        </SectionHeading>

        <div className="divide-y divide-border border-t border-border">
          {profile.leadership.map((p, i) => (
            <Reveal key={p.title}>
              <div className="grid gap-3 py-8 md:grid-cols-[72px_1fr_2fr] md:items-baseline md:gap-8">
                <span className="font-display text-2xl font-medium text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
