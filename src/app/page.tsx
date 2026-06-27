"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-pure-white border-b border-dove/30">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C10 2 4 8 4 13C4 16.3 6.7 19 10 19C13.3 19 16 16.3 16 13C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M10 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M7 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-signifier text-[18px] leading-none tracking-[-0.2px]">Greenwater</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">About</a>
          <a href="#how" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">How It Works</a>
          <a href="#features" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">Technology</a>
          <a href="#pilot" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">Pilot</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#about" className="hidden sm:inline text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">Learn</a>
          <a href="#pilot" className="inline-flex items-center gap-1.5 bg-ink text-pure-white text-[15px] font-[450] px-5 py-2 rounded-full tracking-[-0.009em] hover:bg-ink/90 transition-all whitespace-nowrap">
            Get Early Access
            <ArrowRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </nav>
  );
}

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink/20 text-[10px] font-sohne tracking-[0.2em] uppercase animate-fade-in-up">
      <span>Scroll</span>
      <ChevronDown size={14} className="animate-bounce" strokeWidth={1.5} />
    </div>
  );
}

function StatCard() {
  return (
    <div className="bg-pure-white rounded-3xl p-5 shadow-subtle w-[190px] relative">
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#d4f0e8] flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
        <span className="text-[11px] font-[500] text-ink">GW</span>
      </div>
      <div className="font-signifier text-[32px] leading-[1.1] tracking-[-0.5px] text-ink">2,500</div>
      <div className="text-[13px] text-graphite font-sohne tracking-[-0.009em]">gal / month saved</div>
      <div className="flex items-center gap-1 mt-2">
        <span className="text-[11px] text-[#22a06b] font-[480]">&#8593; 12%</span>
        <span className="text-[10px] text-graphite">vs last month</span>
      </div>
    </div>
  );
}

function DonutCard() {
  const circumference = 2 * Math.PI * 15.9;
  const grayWater = 68;
  const fresh = 32;
  return (
    <div className="bg-apricot-wash rounded-3xl p-5 shadow-subtle w-[180px]">
      <svg viewBox="0 0 40 40" className="w-full h-[90px]">
        <circle cx="20" cy="20" r="15.9" fill="none" stroke="rgba(93,42,26,0.1)" strokeWidth="3" />
        <circle cx="20" cy="20" r="15.9" fill="none" stroke="var(--color-rust)" strokeWidth="3"
          strokeDasharray={`${grayWater * 0.5} ${fresh * 0.5}`}
          strokeDashoffset="0" strokeLinecap="round"
          transform="rotate(-90 20 20)" />
      </svg>
      <div className="text-[11px] font-[450] text-ink tracking-[-0.009em] text-center -mt-1">68% gray water</div>
      <div className="text-[9px] text-graphite text-center">source split</div>
    </div>
  );
}

function ChartCard() {
  const data = [35, 48, 55, 62, 68, 72, 78, 81, 85, 88, 91, 94];
  return (
    <div className="bg-sky-wash rounded-3xl p-5 shadow-subtle w-[200px]">
      <div className="text-[11px] font-[450] text-ink tracking-[-0.009em] mb-3">Model accuracy</div>
      <svg viewBox="0 0 120 40" className="w-full h-[60px]">
        {data.map((v, i) => (
          <rect key={i} x={i * 10} y={40 - (v / 100) * 38} width="6" height={(v / 100) * 38}
            fill={i === data.length - 1 ? "var(--color-rust)" : "rgba(93,42,26,0.2)"} rx="1.5" />
        ))}
      </svg>
      <div className="flex justify-between mt-2">
        <span className="text-[8px] text-graphite">Month 1</span>
        <span className="text-[8px] text-rust font-[480]">94%</span>
      </div>
    </div>
  );
}

function StatsSummaryCard() {
  return (
    <div className="bg-pure-white rounded-3xl p-5 shadow-subtle w-[170px]">
      <div className="text-[11px] font-[450] text-graphite tracking-[-0.009em]">Active Systems</div>
      <div className="font-signifier text-[28px] leading-[1.1] tracking-[-0.4px] text-ink mt-1">1,247</div>
      <div className="flex items-center gap-1.5 mt-2">
        <div className="flex -space-x-1.5">
          {["#d4f0e8", "#fbe1d1", "#d3e3fc"].map((c, i) => (
            <div key={i} className="w-5 h-5 rounded-full border border-pure-white" style={{ background: c }} />
          ))}
        </div>
        <span className="text-[10px] text-graphite">+12 today</span>
      </div>
    </div>
  );
}

function FloatingCards() {
  return (
    <div className="hidden xl:block absolute inset-0 pointer-events-none">
      <div className="absolute left-[2%] top-[16%] animate-float">
        <StatCard />
      </div>
      <div className="absolute right-[2%] top-[12%] animate-float-delay">
        <DonutCard />
      </div>
      <div className="absolute left-[2%] bottom-[14%] animate-float-slow">
        <ChartCard />
      </div>
      <div className="absolute right-[2%] bottom-[12%] animate-float-delay">
        <StatsSummaryCard />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <TopNav />

      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden bg-pure-white flex items-center justify-center pt-16">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[900px] h-[900px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(251,225,209,0.35) 0%, transparent 65%)" }} />
        </div>

        <FloatingCards />

        <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 text-center">
          <h1 className="font-signifier text-[56px] md:text-[64px] leading-[1.1] tracking-[-1.6px] text-ink mb-5 animate-fade-in-up">
            Cut your water use in half.
          </h1>
          <p className="text-body-lg text-ash leading-[1.35] max-w-[540px] mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
            Greenwater&apos;s AI-driven gray water system diverts shower and sink water to your garden. No full replumbing, no maintenance.
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            <a href="#pilot" className="inline-flex items-center gap-2 bg-ink text-pure-white text-[15px] font-[450] px-6 py-2.5 rounded-full tracking-[-0.009em] hover:bg-ink/90 transition-all">
              Get Early Access
              <ArrowRight size={14} strokeWidth={2} />
            </a>
            <a href="#how" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">
              How it works
            </a>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* About / Problem */}
      <section id="about" className="py-24 md:py-32 bg-fog">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center">
            <h2 className="font-signifier text-[40px] md:text-heading leading-heading tracking-heading text-ink mb-5">
              We&apos;re running out of fresh water.{" "}
              <a href="#how" className="text-rust underline decoration-1 underline-offset-4 hover:text-rust/80 transition-colors">Your home can help.</a>
            </h2>
            <p className="text-body text-ash leading-body max-w-[580px] mx-auto">
              The average family uses 300 gallons of water per day. Nearly half goes to landscaping. Climate change is straining supplies everywhere, but the answer isn&apos;t using less — it&apos;s using smarter.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 md:py-32 bg-pure-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-signifier text-[40px] md:text-heading leading-heading tracking-heading text-ink">
              Smart diversion, not full replumbing.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            {[
              { step: "01", title: "Intelligent Diversion", desc: "Our valve pack reads source quality in real-time and diverts only reclaimable water from showers and sinks. Black water lines stay untouched." },
              { step: "02", title: "3-Stage Filtration", desc: "Sensor-driven AI models optimize a three-stage process, ensuring every drop meets quality thresholds before reaching your garden." },
              { step: "03", title: "Live Insights", desc: "Water use, quality, and savings data at your fingertips. Understand exactly where your water goes and how much you&apos;re saving." },
            ].map((s) => (
              <div key={s.step} className="bg-pure-white rounded-3xl p-6 shadow-subtle text-center">
                <div className="w-11 h-11 rounded-full bg-apricot-wash flex items-center justify-center mx-auto mb-5">
                  <span className="text-rust text-[15px] font-signifier">{s.step}</span>
                </div>
                <h3 className="text-subheading font-[450] text-ink leading-subheading tracking-subheading mb-2">{s.title}</h3>
                <p className="text-[14px] text-graphite leading-relaxed max-w-[280px] mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="features" className="py-24 md:py-32 bg-fog">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-[1000px] mx-auto">
            <div>
              <h2 className="font-signifier text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.84px] text-ink mb-5">
                AI that optimizes every drop.
              </h2>
              <p className="text-body text-ash leading-body mb-8">
                Greenwater uses deep learning models trained on millions of household water chemistry data points. The system continuously adapts its filtration parameters to your specific water profile — getting more efficient with every cycle.
              </p>
              <div className="space-y-5">
                {[
                  { label: "Predictive maintenance", desc: "ML models predict component wear before failure." },
                  { label: "Pattern recognition", desc: "Learns your usage and optimizes diversion schedules." },
                  { label: "Water quality optimization", desc: "Adapts filtration parameters to your unique water chemistry." },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-rust mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-[15px] font-[450] text-ink">{f.label}</div>
                      <p className="text-[14px] text-graphite leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-pure-white rounded-3xl p-6 shadow-subtle">
                <div className="text-[13px] font-[480] text-ink tracking-[-0.009em] mb-4">Model accuracy over time</div>
                <div className="flex items-end gap-2 h-[140px]">
                  {[35, 48, 55, 62, 68, 72, 78, 81, 85, 88, 91, 94].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div className="w-full rounded-t-[3px] transition-all duration-300"
                        style={{
                          height: `${v * 1.3}px`,
                          background: i === 11 ? "var(--color-rust)" : "var(--color-rust)",
                          opacity: 0.15 + (i / 12) * 0.6
                        }} />
                      <span className="text-[7px] text-graphite">M{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-graphite">
                  <span>Month 1</span>
                  <span className="text-rust font-[480]">94% accuracy</span>
                </div>
              </div>
              <p className="text-[13px] text-graphite mt-4 leading-relaxed">
                The model reaches 94% diversion accuracy within 12 months — continuously improving as it learns your household&apos;s unique patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section id="faq" className="py-24 md:py-32 bg-pure-white">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <h2 className="font-signifier text-[40px] md:text-heading leading-heading tracking-heading text-ink mb-5">
            Engineered for a lifetime.{" "}
            <a href="#pilot" className="text-rust underline decoration-1 underline-offset-4 hover:text-rust/80 transition-colors">Zero maintenance.</a>
          </h2>
          <p className="text-body text-ash leading-body max-w-[600px] mx-auto mb-10">
            Every component is rated for 100,000+ duty cycles — self-cleaning filters, titanium-grade sensors, and industrial valves. Install it once and forget it exists, except for the savings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[650px] mx-auto">
            {[
              "15-year transferable warranty",
              "12W standby power",
              "IP67 rated",
              "No permits required",
            ].map((spec) => (
              <div key={spec} className="bg-fog rounded-3xl px-4 py-3 text-[13px] text-ash text-center font-sohne">{spec}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 md:py-32 bg-fog">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-[1000px] mx-auto">
            <div>
              <h2 className="font-signifier text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.84px] text-ink mb-5">
                Save water. Save money.{" "}
                <a href="#pilot" className="text-rust underline decoration-1 underline-offset-4 hover:text-rust/80 transition-colors">Save the planet.</a>
              </h2>
              <p className="text-body text-ash leading-body mb-6">
                Every Greenwater home saves 25,000 gallons of water and offsets 420 lbs of CO₂ per year — equivalent to planting 8 trees annually. The system pays for itself within 12-18 months, and most homeowners qualify for $200-800 in rebates.
              </p>
              <p className="text-body text-ash leading-body">
                Through neighborhood challenges and community leaderboards, conservation becomes a shared mission.
              </p>
            </div>
            <div>
              <div className="bg-pure-white rounded-3xl p-6 shadow-subtle">
                <div className="text-[13px] font-[480] text-graphite tracking-[-0.009em] mb-5 text-center">Annual impact per home</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "25,000", label: "Gallons saved" },
                    { value: "420 lbs", label: "CO\u2082 offset" },
                    { value: "$1,020", label: "Water + energy savings" },
                    { value: "8 trees", label: "Equivalent planted" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl bg-fog">
                      <div className="font-signifier text-[28px] leading-[1.1] tracking-[-0.5px] text-rust">{s.value}</div>
                      <div className="text-[11px] text-graphite mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-dove/40 text-[13px] text-graphite leading-relaxed text-center">
                  Imagine what 10,000 homes can do. That&apos;s the mission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot */}
      <section id="pilot" className="relative py-24 md:py-32 bg-pure-white overflow-hidden">
        <div className="max-w-[650px] mx-auto px-6 text-center">
          <h2 className="font-signifier text-[40px] md:text-heading leading-heading tracking-heading text-ink mb-5">
            Be one of the first 500 homes.
          </h2>
          <p className="text-body text-ash leading-body max-w-[520px] mx-auto mb-10">
            Our pilot program offers discounted pricing, priority installation, and a direct line to our engineering team. Spots are limited.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="mailto:hello@waterwz.com" className="inline-flex items-center gap-2 bg-ink text-pure-white text-[15px] font-[450] px-6 py-2.5 rounded-full tracking-[-0.009em] hover:bg-ink/90 transition-all">
              Get Early Access
              <ArrowRight size={14} strokeWidth={2} />
            </a>
            <a href="mailto:hello@waterwz.com" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">
              Schedule a free assessment
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-[13px] text-graphite">
            <span className="flex items-center gap-1.5">No commitment</span>
            <span className="text-dove/60">|</span>
            <span className="flex items-center gap-1.5">Free site survey</span>
            <span className="text-dove/60">|</span>
            <span className="flex items-center gap-1.5">30-day guarantee</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-pure-white border-t border-dove/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-10">
            <div>
              <div className="flex items-center gap-2 text-ink mb-3">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C10 2 4 8 4 13C4 16.3 6.7 19 10 19C13.3 19 16 16.3 16 13C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M10 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="font-signifier text-[16px] leading-none tracking-[-0.02em]">Greenwater</span>
              </div>
              <p className="text-[13px] text-graphite max-w-[220px] leading-relaxed">AI-powered gray water recycling for the modern home.</p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-[11px] font-[500] text-graphite uppercase tracking-[0.05em] mb-3">Product</div>
                <div className="space-y-1.5">
                  <a href="#how" className="block text-[13px] text-ash hover:text-ink transition-colors">How It Works</a>
                  <a href="#features" className="block text-[13px] text-ash hover:text-ink transition-colors">Features</a>
                  <a href="#pilot" className="block text-[13px] text-ash hover:text-ink transition-colors">Pricing</a>
                  <a href="#faq" className="block text-[13px] text-ash hover:text-ink transition-colors">FAQ</a>
                  <a href="/docs" className="block text-[13px] text-ash hover:text-ink transition-colors">Documentation</a>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-[500] text-graphite uppercase tracking-[0.05em] mb-3">Company</div>
                <div className="space-y-1.5">
                  <a href="#about" className="block text-[13px] text-ash hover:text-ink transition-colors">About</a>
                  <a href="/blog" className="block text-[13px] text-ash hover:text-ink transition-colors">Blog</a>
                  <a href="/careers" className="block text-[13px] text-ash hover:text-ink transition-colors">Careers</a>
                  <a href="/press" className="block text-[13px] text-ash hover:text-ink transition-colors">Press Kit</a>
                  <a href="mailto:hello@waterwz.com" className="block text-[13px] text-ash hover:text-ink transition-colors">Contact</a>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-[500] text-graphite uppercase tracking-[0.05em] mb-3">Connect</div>
                <div className="space-y-1.5">
                  <a href="https://x.com/waterwz" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-ash hover:text-ink transition-colors">Twitter / X</a>
                  <a href="https://linkedin.com/company/waterwz" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-ash hover:text-ink transition-colors">LinkedIn</a>
                  <a href="https://instagram.com/waterwz" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-ash hover:text-ink transition-colors">Instagram</a>
                  <a href="https://youtube.com/@waterwz" target="_blank" rel="noopener noreferrer" className="block text-[13px] text-ash hover:text-ink transition-colors">YouTube</a>
                  <a href="mailto:hello@waterwz.com?subject=Subscribe" className="block text-[13px] text-ash hover:text-ink transition-colors">Newsletter</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-dove/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[12px] text-graphite">&copy; 2026 Greenwater. All rights reserved.</div>
            <div className="flex items-center gap-4 text-[12px] text-graphite">
              <a href="/privacy" className="hover:text-ink transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-ink transition-colors">Terms</a>
              <a href="/sitemap" className="hover:text-ink transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
