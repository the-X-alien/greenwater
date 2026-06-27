import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">How It Works</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              Greenwater is an AI-powered gray water recycling system that captures water from your showers and bathroom sinks, filters it, and
              sends it to your garden &mdash; automatically. No daily maintenance, no full replumbing.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Diversion Valve Pack",
                  desc: "Our smart valve pack installs under your bathroom sink and shower. It continuously monitors water quality in real time, diverting reclaimable gray water to the filtration system while sending black water to your existing sewer line. The valves are self-cleaning and rated for 100,000+ cycles.",
                },
                {
                  step: "02",
                  title: "3-Stage Filtration",
                  desc: "Water passes through three precision stages: a sediment filter removes hair and particulates, a carbon block eliminates soaps and chemicals, and a UV chamber neutralizes 99.9% of microorganisms. The entire process takes seconds and uses just 12W of power.",
                },
                {
                  step: "03",
                  title: "AI Optimization",
                  desc: "Our machine learning models analyze your household&apos;s water chemistry &mdash; pH, turbidity, conductivity, and more. Over time, the system learns your patterns and adapts filtration parameters to maximize both water quality and diversion efficiency. Typical accuracy reaches 94% within 12 months.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-pure-white rounded-3xl p-7 shadow-subtle">
                  <div className="w-10 h-10 rounded-full bg-[#d4f0e8] flex items-center justify-center mb-5">
                    <span className="text-[#1a7a5c] text-[14px] font-signifier">{s.step}</span>
                  </div>
                  <h2 className="font-signifier text-[22px] leading-[1.2] tracking-[-0.3px] text-ink mb-3">{s.title}</h2>
                  <p className="text-[14px] text-graphite leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">The Mobile App</h2>
            <p className="text-body text-ash leading-body mb-6">
              The Greenwater dashboard gives you real-time visibility into your system. Track water diversion volume, savings, and system health
              from anywhere. Receive alerts when it&apos;s time to replace a filter, and see your environmental impact in clear, shareable metrics.
            </p>
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Installation</h2>
            <p className="text-body text-ash leading-body mb-6">
              Installation takes approximately 2 hours and requires no structural modifications or building permits. Our certified technicians
              handle everything &mdash; from assessing your plumbing configuration to mounting the filtration unit and setting up your app account.
            </p>
            <p className="text-body text-ash leading-body">
              Most installations are completed in a single visit. The system connects to your Wi-Fi for cloud monitoring and runs on standard
              household power, drawing just 12W in standby.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
