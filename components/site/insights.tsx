import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

const GROUPS = [
  { key: "articles" as const, label: "文章" },
  { key: "podcasts" as const, label: "播客" },
  { key: "views" as const, label: "观点" },
];

export function Insights() {
  return (
    <section id="insights" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading index="06" kicker="洞察" title="文章 · 播客 · 观点">
          对创业、AI 与虚拟现实的思考，持续更新中。
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {GROUPS.map((g) => {
            const items = profile.insights[g.key];
            return (
              <Reveal key={g.key}>
                <div className="border border-dashed border-border p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-amber-deep">
                    {g.label}
                  </p>
                  {items.length > 0 ? (
                    <ul className="mt-4 space-y-3">
                      {items.map((item) => (
                        <li key={item.title}>
                          <a
                            href={item.url}
                            className="text-[15px] font-medium underline-offset-4 hover:underline"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-[15px] text-muted">
                      内容筹备中，即将发布。{" "}
                      <span className="text-xs text-muted">[占位]</span>
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
