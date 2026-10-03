import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CountUp } from "@/components/site/count-up";
import { Badge } from "@/components/ui/badge";

type ResultBlock =
  | { type: "text"; content: string }
  | { type: "metric"; value: number; prefix?: string; suffix?: string };

function renderBlock(block: ResultBlock, key: number) {
  if (block.type === "metric") {
    return (
      <span key={key} className="font-display text-2xl font-semibold text-amber-deep">
        <CountUp
          value={block.value}
          prefix={block.prefix ?? ""}
          suffix={block.suffix ?? ""}
        />
      </span>
    );
  }
  return <span key={key}>{block.content}</span>;
}

export function Results() {
  return (
    <section id="results" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading index="04" kicker="成果" title="代表成果">
          按「背景 — 动作 — 结果」记录，关键数字以可公开口径为准。
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.results.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <article className="flex h-full flex-col border border-border bg-card p-7 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{r.title}</h3>
                  <Badge variant="amber">{r.status}</Badge>
                </div>
                <dl className="mt-6 space-y-5 text-[15px] leading-relaxed">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      背景
                    </dt>
                    <dd className="mt-1.5">{r.background}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      我的动作
                    </dt>
                    <dd className="mt-1.5">{r.action}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      可公开结果
                    </dt>
                    <dd className="mt-1.5">
                      {r.result.map((block, i) => renderBlock(block, i))}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="font-display text-lg font-semibold">转折与认知</h3>
          <p className="mt-2 max-w-2xl text-[15px] text-muted">
            从几次「没做成」里得到的，和成绩一样值钱。
          </p>
          <div className="mt-6 divide-y divide-border border-t border-border">
            {profile.lessons.map((l) => (
              <div
                key={l.title}
                className="grid gap-3 py-6 md:grid-cols-[96px_1fr_2fr] md:gap-8 md:py-7"
              >
                <Badge variant="amber">{l.tag}</Badge>
                <h4 className="font-display font-semibold md:text-lg">{l.title}</h4>
                <p className="text-[15px] leading-relaxed text-muted">{l.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
