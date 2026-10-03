import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { ExecutiveSummary } from "@/components/site/executive-summary";
import { Leadership } from "@/components/site/leadership";
import { Timeline } from "@/components/site/timeline";
import { Results } from "@/components/site/results";
import { Presence } from "@/components/site/presence";
import { Insights } from "@/components/site/insights";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ExecutiveSummary />
        <Leadership />
        <Timeline />
        <Results />
        <Presence />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
