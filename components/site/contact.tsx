"use client";

import { useEffect, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { Separator } from "@/components/ui/separator";

function CopyWechat() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.wechat);
      setCopied(true);
    } catch {
      /* 剪贴板不可用时静默 */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="text-xs font-medium text-amber-deep underline-offset-4 hover:underline"
    >
      {copied ? "已复制" : "复制微信号"}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading index="07" kicker="联系" title="找到我">
          媒体约访、合作与交流，欢迎来信。
        </SectionHeading>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          <Reveal className="bg-card">
            <div className="flex h-full flex-col p-7 md:p-8">
              <Mail size={18} className="text-amber-deep" aria-hidden />
              <h3 className="font-display mt-5 text-lg font-semibold">邮箱</h3>
              <a
                href={`mailto:${profile.contact.email}`}
                className="mt-2 break-all text-[15px] text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                {profile.contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="bg-card">
            <div className="flex h-full flex-col p-7 md:p-8">
              <MessageCircle size={18} className="text-amber-deep" aria-hidden />
              <h3 className="font-display mt-5 text-lg font-semibold">微信</h3>
              <p className="mt-2 text-[15px] text-muted">
                {profile.contact.wechat}
              </p>
              <p className="mt-4 text-xs text-muted">
                <CopyWechat />
                <span className="ml-2">（公开 ID，添加请备注来意）</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="bg-card">
            <div className="flex h-full flex-col p-7 md:p-8">
              <span
                aria-hidden
                className="font-display text-lg font-semibold leading-none text-amber-deep"
              >
                X
              </span>
              <h3 className="font-display mt-5 text-lg font-semibold">X（Twitter）</h3>
              <a
                href={profile.contact.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[15px] text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                {profile.contact.xHandle}
              </a>
            </div>
          </Reveal>
        </div>

        {profile.resumeUrl ? (
          <Reveal className="mt-10">
            <Separator className="mb-8" />
            <p className="text-sm text-muted">
              需要完整履历？{" "}
              <a
                href={profile.resumeUrl}
                download
                className="font-medium text-amber-deep underline-offset-4 hover:underline"
              >
                下载简历（PDF）
              </a>
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
