import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Features() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Features</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              Every feature of Greenwater is designed around one goal: making water conservation automatic, measurable, and rewarding.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Real-Time Monitoring",
                  desc: "Track water usage, diversion volume, and savings in real time. The dashboard updates every 15 seconds, giving you an accurate picture of your household&apos;s water footprint.",
                },
                {
                  title: "Predictive Maintenance",
                  desc: "Our ML models predict component wear before failure. You&apos;ll receive notifications when a filter is approaching end of life, so you&apos;re never caught off guard.",
                },
                {
                  title: "Adaptive Filtration",
                  desc: "The system continuously adjusts filtration parameters based on your unique water chemistry. Hard water, soft water, city or well &mdash; it optimizes itself automatically.",
                },
                {
                  title: "Smart Diversion",
                  desc: "Intelligent valves distinguish between reclaimable gray water and non-reclaimable black water. The system learns your household&apos;s schedule to maximize diversion during peak usage.",
                },
                {
                  title: "Mobile App Dashboard",
                  desc: "A beautifully simple interface showing your water savings, system status, and environmental impact. Available on iOS and Android with full feature parity.",
                },
                {
                  title: "Weather Integration",
                  desc: "Greenwater connects to local weather data and adjusts diversion based on rainfall predictions. No need to water the garden when a storm is coming.",
                },
                {
                  title: "Community Leaderboards",
                  desc: "See how your household stacks up against neighbors and the broader Greenwater community. Friendly competition drives conservation &mdash; top savers earn recognition each month.",
                },
                {
                  title: "Rebate Finding",
                  desc: "Our system automatically identifies eligible water conservation rebates from your local utility or municipality. Most homeowners qualify for $200&ndash;$800 in rebates.",
                },
              ].map((f) => (
                <div key={f.title} className="bg-pure-white rounded-3xl p-7 shadow-subtle">
                  <h2 className="font-signifier text-[22px] leading-[1.2] tracking-[-0.3px] text-ink mb-3">{f.title}</h2>
                  <p className="text-[14px] text-graphite leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
