import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Newsletter() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Newsletter</h1>
            <p className="text-body text-ash leading-body mb-8 max-w-[600px]">
              Join 500+ readers who get monthly updates on water conservation, Greenwater product news, and early access to pilot
              program openings. No spam, just thoughtful content straight to your inbox.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="bg-pure-white rounded-3xl p-8 shadow-subtle text-center mb-16">
              <h2 className="font-signifier text-[24px] leading-[1.2] tracking-[-0.4px] text-ink mb-2">Subscribe</h2>
              <p className="text-[14px] text-graphite mb-6">Get the Greenwater newsletter delivered monthly.</p>
              <a
                href="mailto:hello@waterwz.com?subject=Subscribe"
                className="inline-flex items-center gap-2 bg-ink text-pure-white text-[15px] font-[450] px-6 py-2.5 rounded-full tracking-[-0.009em] hover:bg-ink/90 transition-all"
              >
                Subscribe via Email
              </a>
            </div>

            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-6">What You&apos;ll Get</h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {[
                { title: "Monthly Updates", desc: "Product launches, feature releases, and company milestones delivered every month." },
                { title: "Water Tips", desc: "Practical advice for reducing your household water footprint and saving on utility bills." },
                { title: "Pilot Announcements", desc: "Be the first to know when we open new pilot slots in your area." },
              ].map((item) => (
                <div key={item.title} className="bg-fog rounded-3xl p-6">
                  <h3 className="font-signifier text-[20px] leading-[1.3] tracking-[-0.2px] text-ink mb-2">{item.title}</h3>
                  <p className="text-[14px] text-graphite leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-6">Past Issues</h2>
            <div className="space-y-4 mb-16">
              {[
                { title: "March 2026: Our First 500 Homes", desc: "A look back at the pilot program milestones, user stories, and what we&apos;ve learned." },
                { title: "February 2026: Understanding Gray Water Quality", desc: "A technical deep dive into water chemistry and how our filtration adapts to your home." },
                { title: "January 2026: New Year, Less Water", desc: "Practical tips for setting water conservation goals and how Greenwater helps you achieve them." },
              ].map((issue) => (
                <div key={issue.title} className="bg-pure-white rounded-3xl p-6 shadow-subtle">
                  <div className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[#1a7a5c] mb-1">{issue.title}</div>
                  <p className="text-[14px] text-graphite leading-relaxed">{issue.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-[14px] text-graphite">
                Join <span className="font-[450] text-ink">500+</span> homeowners already saving water with Greenwater.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
