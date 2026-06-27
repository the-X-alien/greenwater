import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Pricing</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              Simple, transparent pricing. Every plan includes system hardware, installation, and full app access.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Pilot",
                  monthly: "$49",
                  yearly: "$499",
                  desc: "For early adopters who want to start saving water and money today.",
                  features: ["Full system hardware", "Professional installation", "Mobile app dashboard", "Real-time monitoring", "Email support"],
                },
                {
                  name: "Standard",
                  monthly: "$79",
                  yearly: "$799",
                  desc: "The complete water recycling experience with advanced features.",
                  features: ["Everything in Pilot", "Predictive maintenance", "Weather integration", "Rebate finding", "Priority support"],
                  popular: true,
                },
                {
                  name: "Premium",
                  monthly: "$129",
                  yearly: "$1,299",
                  desc: "Maximum performance and insights for the most demanding homes.",
                  features: ["Everything in Standard", "Community leaderboards", "Multi-unit support", "Custom reports", "24/7 phone support"],
                },
              ].map((p) => (
                <div key={p.name} className={`rounded-3xl p-7 shadow-subtle ${p.popular ? "bg-ink text-pure-white ring-2 ring-[#1a7a5c]" : "bg-pure-white"}`}>
                  {p.popular && (
                    <div className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[#1a7a5c] mb-2">Most Popular</div>
                  )}
                  <h2 className={`font-signifier text-[28px] leading-[1.15] tracking-[-0.5px] mb-1 ${p.popular ? "text-pure-white" : "text-ink"}`}>{p.name}</h2>
                  <div className="mt-4 mb-2">
                    <span className={`font-signifier text-[40px] leading-none tracking-[-0.8px] ${p.popular ? "text-pure-white" : "text-ink"}`}>{p.monthly}</span>
                    <span className={`text-[14px] ${p.popular ? "text-pure-white/60" : "text-graphite"}`}> /mo</span>
                  </div>
                  <p className={`text-[13px] mb-2 ${p.popular ? "text-pure-white/60" : "text-graphite"}`}>or {p.yearly}/yr &mdash; save 15%</p>
                  <p className={`text-[14px] leading-relaxed mb-6 ${p.popular ? "text-pure-white/80" : "text-ash"}`}>{p.desc}</p>
                  <div className="space-y-2.5 mb-8">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-[14px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={p.popular ? "text-[#1a7a5c]" : "text-[#1a7a5c]"}>
                          <path d="M11.5 3.5L5.5 10.5L2.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={p.popular ? "text-pure-white" : "text-ink"}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/pricing"
                    className={`block text-center text-[15px] font-[450] px-6 py-2.5 rounded-full tracking-[-0.009em] transition-all ${
                      p.popular ? "bg-pure-white text-ink hover:bg-pure-white/90" : "bg-ink text-pure-white hover:bg-ink/90"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Installation &amp; Warranty</h2>
            <p className="text-body text-ash leading-body mb-4">
              A one-time installation fee of $199 covers the full site assessment and professional installation. Most installations take about
              2 hours and require no permits or structural changes.
            </p>
            <p className="text-body text-ash leading-body mb-4">
              All plans include a 1-year parts and labor warranty. Extended coverage is available: 3 years for $99 or 5 years for $199.
              The system itself is designed with components rated for 100,000+ duty cycles.
            </p>
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mt-12 mb-4">Savings Calculator</h2>
            <p className="text-body text-ash leading-body">
              Curious what Greenwater could save you? The average homeowner saves $85&ndash;$120 per month on their water bill and qualifies for
              $200&ndash;$800 in rebates. Use our savings calculator on the dashboard to get a personalized estimate based on your household size,
              location, and water rates.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
