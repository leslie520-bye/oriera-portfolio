import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const serifLatin = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-latin",
});

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sansCn = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-sans-cn",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} · ${profile.brand} ${profile.brandEn}`,
    template: `%s · ${profile.brand}`,
  },
  description: profile.seoDescription,
  keywords: profile.seoKeywords,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: profile.siteUrl,
    siteName: `${profile.brand} ${profile.brandEn}`,
    title: `${profile.name} · ${profile.brand} ${profile.brandEn}`,
    description: profile.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const themeScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    var dark = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: profile.brandFull },
  email: profile.contact.email,
  sameAs: [profile.contact.xUrl],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={`${serifLatin.variable} ${serif.variable} ${sans.variable} ${sansCn.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          跳到正文
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
