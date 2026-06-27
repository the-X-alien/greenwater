import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  const articles = [
    {
      title: "How Gray Water Can Save California",
      date: "March 15, 2026",
      desc: "California is no stranger to drought. But while most conversations focus on conservation &mdash; using less &mdash; there&apos;s a growing movement around reuse. Gray water recycling has the potential to cut household water consumption by 40-50% without changing daily habits. We explore the numbers, the policy landscape, and what it means for California&apos;s water future.",
      tag: "Water Policy",
    },
    {
      title: "Our Pilot Program Results Are In",
      date: "March 1, 2026",
      desc: "After six months and 200 homes, we&apos;re sharing the data. The average participating household saved 2,500 gallons of water per month, reduced their water bill by $85, and reported zero system issues. Learn about what worked, what we improved, and what&apos;s next for Greenwater.",
      tag: "Company",
    },
    {
      title: "Understanding Your Home&apos;s Water Footprint",
      date: "February 15, 2026",
      desc: "Most homeowners don&apos;t realize where their water actually goes. We break down the typical household&apos;s water usage by category, explain the difference between gray and black water, and show how smart diversion can turn your garden from a water drain into a conservation asset.",
      tag: "Education",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Blog</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              Insights, updates, and stories from the Greenwater team. Follow along as we work to make water conservation accessible to every home.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((a) => (
                <div key={a.title} className="bg-pure-white rounded-3xl p-7 shadow-subtle flex flex-col">
                  <div className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[#1a7a5c] mb-3">{a.tag}</div>
                  <h2 className="font-signifier text-[22px] leading-[1.2] tracking-[-0.3px] text-ink mb-3">{a.title}</h2>
                  <p className="text-[14px] text-graphite leading-relaxed flex-1">{a.desc}</p>
                  <div className="text-[13px] text-ash mt-4 pt-4 border-t border-dove/30">{a.date}</div>
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
