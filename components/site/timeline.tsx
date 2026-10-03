import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Timeline() {
  return (
    <section id="career" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading index="03" kicker="履历" title="职业时间线">
          连续创业的轨迹：从 2021 年的校园，到今天的 AI 与游戏。
        </SectionHeading>

        <ol className="relative border-l border-border">
          {profile.timeline.map((item) => (
            <li key={item.company} className="relative pb-12 pl-8 last:pb-0 md:pl-10">
              <span
                aria-hidden
                className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-amber-deep"
              />
              <Reveal>
                <p className="font-display text-sm tracking-[0.18em] text-amber-deep">
                  {item.period}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold md:text-2xl">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-[11px] h-px w-3 shrink-0 bg-amber/60"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
                {item.note ? (
                  <p className="mt-3 text-xs text-muted">{item.note}</p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14">
          <div className="border border-border bg-card p-7 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-display text-sm tracking-[0.18em] text-amber-deep">
                  {profile.education.period}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold md:text-2xl">
                  {profile.education.school}
                </h3>
                <p className="mt-1 text-sm text-muted">{profile.education.major}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="amber">GPA {profile.education.gpa}</Badge>
                <Badge variant="outline">{profile.education.ranking}</Badge>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              主修课程
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.education.courses.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              证书
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.education.certificates.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
