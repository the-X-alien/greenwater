"use client";

import { useState, useEffect } from "react";
import { Droplets, ArrowRight, Clock, ChevronDown } from "lucide-react";

/* ─── Components ─── */

function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? "opacity-90 hover:opacity-100" : "opacity-100"}`}>
      <div className="floating-nav flex items-center gap-6 px-5 py-2.5">
        <div className="flex items-center gap-2 text-white">
          <Droplets size={20} />
          <span className="font-serif-display text-sm leading-none" style={{ fontSize: "16px", letterSpacing: "-0.02em" }}>Greenwater</span>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <a href="#about" className="text-white/80 hover:text-white text-[13px] font-sans tracking-tight transition-colors">About</a>
          <a href="#how" className="text-white/80 hover:text-white text-[13px] font-sans tracking-tight transition-colors">How it works</a>
          <a href="#pilot" className="text-white/80 hover:text-white text-[13px] font-sans tracking-tight transition-colors">Pilot</a>
        </div>
        <a href="#pilot" className="bg-[#1f1f29] text-white text-[13px] font-medium px-3 py-1.5 rounded-[4px] flex items-center gap-1.5 hover:bg-white hover:text-[#1f1f29] transition-all">
          Get Early Access
          <ArrowRight size={12} strokeWidth={2.5} />
        </a>
        <div className="hidden lg:flex items-center gap-1.5 text-white/60 text-[11px] font-sans tracking-tight">
          <Clock size={10} strokeWidth={2} />
          <LiveTime />
        </div>
      </div>
    </nav>
  );
}

function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZoneName: "short" }));
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

/* ─── Main Page ─── */

export default function Home() {
  return (
    <>
      <FloatingNav />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2135] via-[#1a3f5c] to-[#0a1f2e]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(ellipse at 20% 80%, rgba(0,139,139,0.4) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 20%, rgba(0,129,192,0.3) 0%, transparent 50%)`
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[35vh] opacity-[0.07]" style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Crect x='0' y='200' width='60' height='200' fill='%23fff'/%3E%3Crect x='80' y='150' width='45' height='250' fill='%23fff'/%3E%3Crect x='140' y='220' width='70' height='180' fill='%23fff'/%3E%3Crect x='230' y='100' width='55' height='300' fill='%23fff'/%3E%3Crect x='300' y='180' width='80' height='220' fill='%23fff'/%3E%3Crect x='400' y='60' width='65' height='340' fill='%23fff'/%3E%3C/svg%3E") repeat-x bottom`,
          backgroundSize: "1200px 35vh"
        }} />
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animation: `pulseGlow ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[560px] glass-blue rounded-[24px] p-6 md:p-8 shadow-[rgba(0,0,0,0.06)_0px_2px_2px_0px,rgba(0,0,0,0.04)_0px_0px_0px_5px] animate-fade-in-up">
            <h1 className="font-serif-display text-white text-[42px] md:text-[52px] leading-[1.1] tracking-[-1.04px] mb-4">
              Cut your water use in half.
            </h1>
            <p className="text-white/80 text-[15px] md:text-[16px] font-sans leading-relaxed mb-5 max-w-[480px]">
              Greenwater&apos;s AI-driven gray water system diverts shower and sink water back to your garden. No full replumbing, no maintenance. <span className="text-white font-medium">25,000 gallons saved every year.</span>
            </p>
            <div className="flex items-center gap-5">
              <a href="#pilot" className="text-white text-[15px] font-medium border-b border-white/70 pb-0.5 hover:text-white/80 hover:border-white/40 transition-all flex items-center gap-1.5">
                Get Early Access
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <a href="#how" className="text-white/60 text-[15px] font-sans hover:text-white transition-colors">How it works</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION: The Problem ═══ */}
      <section id="about" className="py-32 bg-[#fefffc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px]">
            <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-5">
              We&apos;re running out of fresh water.{" "}
              <a href="#how" className="text-[#0081c0] underline decoration-1 underline-offset-4 hover:text-[#006b8e] transition-colors">Your home can help.</a>
            </h2>
            <p className="text-[15px] text-[#646464] leading-relaxed max-w-[560px]">
              The average family uses 300 gallons of water per day. Nearly half goes to landscaping. Climate change is straining supplies everywhere, but the answer isn&apos;t using less — it&apos;s using smarter.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION: How It Works ═══ */}
      <section id="how" className="py-32 bg-[#fefffc] border-t border-[#dee2de]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-5">
                Smart diversion, not full replumbing.
              </h2>
              <p className="text-[15px] text-[#646464] leading-relaxed mb-8 max-w-[440px]">
                Existing gray water systems are static and manual. Greenwater&apos;s AI learns your home&apos;s unique water patterns and optimizes every diversion, every filtration cycle, every drop.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Intelligent Diversion", desc: "Our valve pack reads source quality in real-time and diverts only reclaimable water from showers and sinks. Black water lines stay untouched." },
                  { label: "3-Stage Filtration", desc: "Sensor-driven AI models continuously optimize a three-stage process, ensuring every drop meets quality thresholds before reaching your garden." },
                  { label: "Live Insights", desc: "Water use, quality, and savings data at your fingertips. Understand exactly where your water goes and how much you're saving." },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[18px] font-serif leading-[1.3] tracking-[-0.18px] text-[#171717] mb-1">{s.label}</div>
                    <p className="text-[14px] text-[#646464] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Three stages</div>
              <div className="bg-white rounded-[16px] p-6 border border-[#dee2de] shadow-subtle-2">
                <svg width="100%" height="120" viewBox="0 0 400 120" className="opacity-60">
                  <rect x="20" y="35" width="100" height="50" rx="6" fill="none" stroke="#b4b8b4" strokeWidth="1.5" />
                  <text x="70" y="65" textAnchor="middle" fill="#b4b8b4" fontSize="11" fontFamily="sans-serif">Diversion</text>
                  <line x1="120" y1="60" x2="145" y2="60" stroke="#0081c0" strokeWidth="1" />
                  <rect x="150" y="35" width="100" height="50" rx="6" fill="none" stroke="#b4b8b4" strokeWidth="1.5" />
                  <text x="200" y="65" textAnchor="middle" fill="#b4b8b4" fontSize="11" fontFamily="sans-serif">Filtration</text>
                  <line x1="250" y1="60" x2="275" y2="60" stroke="#0081c0" strokeWidth="1" />
                  <rect x="280" y="35" width="100" height="50" rx="6" fill="none" stroke="#b4b8b4" strokeWidth="1.5" />
                  <text x="330" y="65" textAnchor="middle" fill="#b4b8b4" fontSize="11" fontFamily="sans-serif">Garden</text>
                </svg>
                <div className="text-[12px] text-[#b4b8b4] font-sans mt-2">Fig. 1 — Greenwater diversion pipeline</div>
              </div>
              <p className="text-[13px] text-[#646464] mt-4 leading-relaxed font-sans">
                Each stage is monitored and optimized independently by dedicated AI models, creating a system that adapts to your home&apos;s specific water chemistry and usage patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION: Technology / AI ═══ */}
      <section id="features" className="py-32 bg-[#fefffc] border-t border-[#dee2de]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-5">
                AI that optimizes every drop.
              </h2>
              <p className="text-[15px] text-[#646464] leading-relaxed max-w-[440px] mb-8">
                Greenwater uses deep learning models trained on millions of household water chemistry data points. The system continuously adapts its filtration parameters to your specific water profile — getting more efficient with every cycle.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Predictive maintenance", desc: "ML models predict component wear before failure." },
                  { label: "Pattern recognition", desc: "Learns your household usage and optimizes diversion schedules." },
                  { label: "Water quality optimization", desc: "Adapts filtration parameters to your unique water chemistry." },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0081c0] mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-[16px] font-medium text-[#171717] font-sans">{f.label}</div>
                      <p className="text-[14px] text-[#646464] leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">System intelligence</div>
              <div className="bg-white rounded-[16px] p-6 border border-[#dee2de] shadow-subtle-2">
                <div className="text-[15px] font-bold text-[#171717] font-sans mb-3">Model accuracy over time</div>
                <div className="flex items-end gap-2 h-[120px]">
                  {[35, 48, 55, 62, 68, 72, 78, 81, 85, 88, 91, 94].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-[3px] bg-[#0081c0]/60" style={{ height: `${v * 1.2}px`, opacity: 0.4 + (i / 12) * 0.6 }} />
                      <span className="text-[8px] text-[#b4b8b4] font-sans">M{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-[#b4b8b4] font-sans">
                  <span>Month 1</span>
                  <span>94% accuracy</span>
                </div>
              </div>
              <p className="text-[13px] text-[#646464] mt-4 leading-relaxed font-sans">
                The model reaches 94% diversion accuracy within 12 months of installation, continuously improving as it learns your household&apos;s unique patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION: Engineering ═══ */}
      <section id="faq" className="py-32 bg-[#fefffc] border-t border-[#dee2de]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px]">
            <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-5">
              Engineered for a lifetime.{" "}
              <a href="#pilot" className="text-[#0081c0] underline decoration-1 underline-offset-4 hover:text-[#006b8e] transition-colors">Zero maintenance.</a>
            </h2>
            <p className="text-[15px] text-[#646464] leading-relaxed max-w-[560px] mb-6">
              Every component is rated for 100,000+ duty cycles — self-cleaning filters, titanium-grade sensors, and industrial valves. Install it once and forget it exists, except for the savings.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[14px] text-[#646464] font-sans">
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#0081c0]" />15-year transferable warranty</span>
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#0081c0]" />12W standby power</span>
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#0081c0]" />IP67 rated</span>
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#0081c0]" />No permits required</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION: Impact ═══ */}
      <section className="py-32 bg-[#fefffc] border-t border-[#dee2de]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-5">
                Save water. Save money.{" "}
                <a href="#pilot" className="text-[#0081c0] underline decoration-1 underline-offset-4 hover:text-[#006b8e] transition-colors">Save the planet.</a>
              </h2>
              <p className="text-[15px] text-[#646464] leading-relaxed max-w-[440px] mb-6">
                Every Greenwater home saves 25,000 gallons of water and offsets 420 lbs of CO₂ per year — equivalent to planting 8 trees annually. At $1,200 installed, the system pays for itself in water savings within 12-18 months, and most homeowners qualify for $200-800 in rebates.
              </p>
              <p className="text-[15px] text-[#646464] leading-relaxed max-w-[440px]">
                Through our neighborhood challenges and community leaderboard, conservation becomes a shared mission — not just a personal one.
              </p>
            </div>
            <div>
              <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Annual impact per home</div>
              <div className="bg-white rounded-[16px] p-6 border border-[#dee2de] shadow-subtle-2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "25,000", label: "Gallons saved" },
                    { value: "420 lbs", label: "CO₂ offset" },
                    { value: "$1,020", label: "Water + energy savings" },
                    { value: "8 trees", label: "Equivalent planted" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-3 rounded-[8px] bg-[#f9faf7]">
                      <div className="font-serif-md text-[28px] leading-[1.1] tracking-[-0.56px] text-[#0081c0]">{s.value}</div>
                      <div className="text-[12px] text-[#646464] font-sans mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#dee2de] text-[13px] text-[#646464] font-sans leading-relaxed">
                  Imagine what 10,000 homes can do. That&apos;s the mission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION: Pilot / CTA ═══ */}
      <section id="pilot" className="relative py-32 bg-[#fefffc] border-t border-[#dee2de] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-4">Limited pilot program</div>
          <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-5 max-w-[600px] mx-auto">
            Be one of the first 500 homes.
          </h2>
          <p className="text-[15px] text-[#646464] leading-relaxed max-w-[480px] mx-auto mb-8">
            Our pilot program offers discounted pricing, priority installation, and a direct line to our engineering team. Spots are limited.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="#" className="bg-[#1f1f29] text-white text-[15px] font-medium px-5 py-2.5 rounded-[4px] hover:bg-black transition-all flex items-center gap-2">
              Get Early Access
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
            <a href="#" className="text-[#41a1cf] text-[15px] font-sans border border-[#41a1cf] rounded-[4px] px-4 py-2 hover:bg-[#41a1cf] hover:text-white transition-all">
              Schedule a free assessment
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-[13px] text-[#646464] font-sans">
            <span>No commitment</span>
            <span className="text-[#dee2de]">|</span>
            <span>Free site survey</span>
            <span className="text-[#dee2de]">|</span>
            <span>30-day guarantee</span>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-16 bg-[#fefffc] border-t border-[#dee2de]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-10">
            <div>
              <div className="flex items-center gap-2 text-[#171717] mb-3">
                <Droplets size={18} />
                <span className="font-serif-display text-[16px] leading-none tracking-[-0.02em]">Greenwater</span>
              </div>
              <p className="text-[13px] text-[#646464] max-w-[220px] leading-relaxed">AI-powered gray water recycling for the modern home.</p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-[11px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Product</div>
                <div className="space-y-1.5">
                  <a href="#how" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">How It Works</a>
                  <a href="#features" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Features</a>
                  <a href="#pilot" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Pricing</a>
                  <a href="#faq" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">FAQ</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Documentation</a>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Company</div>
                <div className="space-y-1.5">
                  <a href="#about" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">About</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Blog</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Careers</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Press Kit</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Contact</a>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Connect</div>
                <div className="space-y-1.5">
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Twitter / X</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">LinkedIn</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Instagram</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">YouTube</a>
                  <a href="#" className="block text-[13px] text-[#646464] hover:text-[#171717] transition-colors font-sans">Newsletter</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#dee2de] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[12px] text-[#b4b8b4] font-sans">&copy; 2026 Greenwater. All rights reserved.</div>
            <div className="flex items-center gap-4 text-[12px] text-[#b4b8b4] font-sans">
              <a href="#" className="hover:text-[#646464] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#646464] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#646464] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
