import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function Presence() {
  return (
    <section id="presence" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading index="05" kicker="演讲与媒体" title="现场与表达">
          展位、演讲与公开亮相。
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.presence.map((p) => (
            <Reveal key={p.event}>
              <article className="overflow-hidden border border-border bg-card">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  width={1400}
                  height={933}
                  className="h-auto w-full"
                />
                <div className="p-7 md:p-8">
                  <h3 className="font-display text-xl font-semibold">{p.event}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                    {p.location} · {p.date}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {p.detail}
                  </p>
                  {p.topic ? (
                    <p className="mt-4 text-[15px]">
                      分享主题：{p.topic}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
