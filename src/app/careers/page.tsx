import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Careers() {
  const roles = [
    {
      title: "Senior Machine Learning Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      desc: "Design and train the models that power our adaptive filtration and predictive maintenance systems. You&apos;ll work on time-series forecasting, anomaly detection, and optimization algorithms that run on edge devices. Strong background in Python, TensorFlow, and deploying models to production required.",
    },
    {
      title: "Hardware Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      desc: "Design and iterate on the diversion valve pack and filtration hardware. You&apos;ll own the full hardware lifecycle from PCB design through enclosure development and certification. Experience with fluid systems, sensors, and low-power embedded systems is a plus.",
    },
    {
      title: "Growth Lead",
      location: "San Francisco, CA",
      type: "Full-time",
      desc: "Own the growth strategy for Greenwater&apos;s pilot and launch. You&apos;ll build and optimize the acquisition funnel, manage partnerships with utilities and homebuilders, and lead a small marketing team. Background in marketplace or hardware growth preferred.",
    },
    {
      title: "Customer Success Manager",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Be the primary point of contact for our pilot program homeowners. You&apos;ll guide customers through installation, onboarding, and ongoing use of their Greenwater system. You&apos;ll also collect feedback that shapes our product roadmap. Empathy and technical curiosity are essential.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Careers</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              Join us in building the future of home water conservation. We&apos;re a small, multidisciplinary team passionate about climate tech
              and great product design.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="space-y-6">
              {roles.map((r) => (
                <div key={r.title} className="bg-pure-white rounded-3xl p-7 shadow-subtle">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h2 className="font-signifier text-[22px] leading-[1.2] tracking-[-0.3px] text-ink">{r.title}</h2>
                    <div className="flex gap-2">
                      <span className="text-[11px] font-[500] text-graphite bg-fog px-3 py-1 rounded-full">{r.location}</span>
                      <span className="text-[11px] font-[500] text-[#1a7a5c] bg-[#d4f0e8] px-3 py-1 rounded-full">{r.type}</span>
                    </div>
                  </div>
                  <p className="text-[14px] text-ash leading-relaxed">{r.desc}</p>
                  <a
                    href="mailto:hello@waterwz.com"
                    className="inline-block mt-4 text-[14px] font-[450] text-ink underline decoration-1 underline-offset-2 hover:text-graphite transition-colors"
                  >
                    Apply for this role &rarr;
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-[14px] text-graphite">
                Don&apos;t see a role that fits? Send us your resume at <a href="mailto:hello@waterwz.com" className="text-ink underline decoration-1 underline-offset-2 hover:text-graphite">hello@waterwz.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
