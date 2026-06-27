"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Feature Data ─── */
const features = [
  { icon: "💧", title: "Real-Time Water Savings Dashboard", desc: "Live display of every gallon saved, updated in real-time. Watch your impact grow throughout the day with beautiful data visualizations.", tag: "Core" },
  { icon: "🔮", title: "AI Predictive Maintenance Alerts", desc: "Our ML models predict component wear before failure. Get notified 2-3 weeks in advance so you never experience downtime.", tag: "AI" },
  { icon: "📊", title: "Usage Pattern Recognition", desc: "AI learns your household's water usage patterns and optimizes diversion schedules automatically. The system gets smarter every week.", tag: "AI" },
  { icon: "🕵️", title: "Leak & Anomaly Detection", desc: "Detects micro-leaks and irregular flow patterns instantly. Alerts your phone before a small drip becomes a costly problem.", tag: "Safety" },
  { icon: "🏢", title: "Multi-Property Management", desc: "Manage all your properties from one dashboard. Ideal for landlords, property managers, and real estate portfolios.", tag: "Pro" },
  { icon: "📈", title: "Water Quality Historical Trending", desc: "Track pH, turbidity, and contaminant levels over months. Export full reports for compliance or personal analysis.", tag: "Analytics" },
  { icon: "🎯", title: "Annual Savings Projections", desc: "See your projected 1, 5, and 10-year water savings based on current usage patterns. Powerful motivation to keep going.", tag: "Core" },
  { icon: "⏰", title: "Smart Valve Scheduling", desc: "Program valves to divert during optimal garden watering hours. Integrates with local weather forecasts for rain skip logic.", tag: "Smart" },
  { icon: "🌵", title: "Drought Response Auto-Mode", desc: "When local drought alerts trigger, the system automatically prioritizes essential garden water and maximizes storage.", tag: "Smart" },
  { icon: "🏖️", title: "Vacation Mode", desc: "System maintains itself while you're away. Remote monitoring, automatic flushing, and real-time alerts give total peace of mind.", tag: "Smart" },
  { icon: "🗣️", title: "Alexa Voice Control", desc: '"Alexa, ask Greenwater how much water I saved today." Full voice integration for hands-free insights.', tag: "Integration" },
  { icon: "🏠", title: "Google Home Integration", desc: "Works seamlessly with your Google Home ecosystem. Ask Google to show your water savings on any Nest Hub.", tag: "Integration" },
  { icon: "🍎", title: "Apple HomeKit Support", desc: "Native HomeKit integration. Monitor and control your system from the Apple Home app alongside all your smart devices.", tag: "Integration" },
  { icon: "⚡", title: "IFTTT Automation Recipes", desc: "Connect Greenwater to 800+ apps. Create automations like 'If tank is full, turn on garden lights' in minutes.", tag: "Integration" },
  { icon: "📱", title: "Mobile App with Push Notifications", desc: "Native iOS and Android apps with customizable push alerts for savings milestones, maintenance, and system status.", tag: "Core" },
  { icon: "💰", title: "Tax Credit & Rebate Calculator", desc: "Instantly calculate eligible federal, state, and local rebates. Updates automatically as new green incentives are announced.", tag: "Finance" },
  { icon: "🏛️", title: "Municipal Rebate Assistant", desc: "We auto-generate and submit rebate applications to your local water authority. No paperwork, no chasing, you just save.", tag: "Finance" },
  { icon: "🏡", title: "Property Value Impact Calculator", desc: "See how much a Greenwater system adds to your home's resale value. Average increase: 3-5% in water-conscious markets.", tag: "Finance" },
  { icon: "📋", title: "HOA Compliance Auto-Docs", desc: "Auto-generate HOA-compliant documentation packages. Approval-ready submissions that meet even the strictest community standards.", tag: "Pro" },
  { icon: "📝", title: "Automated Permit Filing", desc: "We handle permit applications with local jurisdictions. In most areas, permits are filed and approved within 48 hours.", tag: "Pro" },
  { icon: "⚡", title: "Energy Savings Calculator", desc: "Less water to treat means lower energy bills. Calculate your combined water + energy savings. Average: $400/year.", tag: "Finance" },
  { icon: "🛡️", title: "Insurance Discount Integration", desc: "Auto-generate documentation for home insurance green discounts. Many insurers offer 5-15% for water conservation systems.", tag: "Finance" },
  { icon: "🌍", title: "Carbon Footprint Tracker", desc: "Every gallon saved = less energy for treatment and transport. Watch your CO₂ offset grow in real-time, visualized as trees planted.", tag: "Impact" },
  { icon: "🌳", title: "Environmental Impact Visualization", desc: "See your impact in tangible terms: gallons saved = swimming pools, CO₂ offset = miles not driven, energy saved = phone years charged.", tag: "Impact" },
  { icon: "🏆", title: "Neighborhood Challenges", desc: "Compete with neighbors in friendly water conservation challenges. Top savers earn badges, recognition, and local spotlight.", tag: "Social" },
  { icon: "👑", title: "Community Leaderboard", desc: "See how your home ranks in your city, state, and nationwide. Gamification that turns conservation into a movement.", tag: "Social" },
  { icon: "🔌", title: "Developer API", desc: "RESTful API for home builders, contractors, and proptech companies. Integrate water data into your platforms. Full documentation.", tag: "API" },
  { icon: "🏷️", title: "White-Label for Developers", desc: "Property developers can rebrand Greenwater as their own. Pre-installed in new builds as a premium green amenity.", tag: "API" },
  { icon: "🔧", title: "Installer Network & Marketplace", desc: "Find certified Greenwater installers in your area. Read reviews, compare quotes, and book installation in one click.", tag: "Pro" },
  { icon: "🛡️", title: "Warranty Tracking & Renewal", desc: "Automatic warranty registration and renewal reminders. Extended coverage available with annual system health checks.", tag: "Core" },
  { icon: "🌐", title: "Multi-Language Support", desc: "Full interface in 12 languages: English, Spanish, French, German, Chinese, Japanese, Korean, Portuguese, Arabic, Hindi, Italian, Dutch.", tag: "Core" },
  { icon: "📊", title: "ESG Reporting for Businesses", desc: "Enterprise-grade sustainability reports compliant with SASB, GRI, and TCFD standards. Perfect for corporate ESG initiatives.", tag: "API" },
  { icon: "🧒", title: "Kids' Educational Dashboard", desc: "Fun, gamified interface for children shows water savings as tree-growing and ocean-filling games. Builds lifelong conservation habits.", tag: "Social" },
  { icon: "🌱", title: "Smart Gardening Recommendations", desc: "Based on your water quality data, the system suggests which plants will thrive. Rotate recommendations seasonally.", tag: "Smart" },
  { icon: "🔄", title: "Community Water Marketplace", desc: "Trade excess gray water with neighbors in water-conscious communities. Surplus becomes a community resource.", tag: "Social" },
  { icon: "📜", title: "Shareable Impact Certificates", desc: "Generate beautiful, verifiable impact certificates. Share on LinkedIn, add to your home listing, or frame for your wall.", tag: "Social" },
  { icon: "🏘️", title: "Neighborhood Comparison", desc: "See how your water use compares to similar homes in your area. Anonymous benchmarking that drives friendly competition.", tag: "Analytics" },
  { icon: "📅", title: "Water Budget Planner", desc: "Set monthly conservation goals. The system tracks progress and adjusts diversion strategies to help you hit every target.", tag: "Core" },
  { icon: "📬", title: "Automated Monthly Impact Reports", desc: "Beautiful monthly PDF reports with savings data, environmental impact, and personalized tips. Ready to share or file.", tag: "Core" },
  { icon: "🤖", title: "AI-Powered Water Quality Optimization", desc: "Deep learning models continuously optimize filtration parameters for your specific water chemistry. Adapts in real-time.", tag: "AI" },
];

const features2 = [
  { icon: "☀️", title: "Solar Integration", desc: "Pairs with existing solar systems. During peak sun hours, filtration runs at maximum efficiency, storing more water for evening garden use." },
  { icon: "🌧️", title: "Rainwater Integration", desc: "Seamlessly combines gray water with rainwater harvesting. Smart routing selects the best source based on quality and availability." },
  { icon: "🧪", title: "Lab-Grade Water Testing", desc: "Optional monthly lab analysis of your output water. Full chemical and biological panel with digital results delivered to your phone." },
  { icon: "🔐", title: "Military-Grade Encryption", desc: "End-to-end encryption for all data. SOC 2 Type II compliant. Your water data is as secure as your bank account." },
  { icon: "🎮", title: "Twitch/Stream Integration", desc: "Live-stream your conservation dashboard. Perfect for eco-influencers and educators showing real-time environmental impact." },
];

const integrations = [
  { name: "Alexa", color: "bg-sky-100 text-sky-800" },
  { name: "Google Home", color: "bg-green-100 text-green-800" },
  { name: "Apple HomeKit", color: "bg-zinc-100 text-zinc-800" },
  { name: "IFTTT", color: "bg-blue-100 text-blue-800" },
  { name: "SmartThings", color: "bg-red-100 text-red-800" },
  { name: "Home Assistant", color: "bg-purple-100 text-purple-800" },
  { name: "Nest", color: "bg-orange-100 text-orange-800" },
  { name: "SolarEdge", color: "bg-yellow-100 text-yellow-800" },
  { name: "Rachio", color: "bg-teal-100 text-teal-800" },
  { name: "Wink", color: "bg-indigo-100 text-indigo-800" },
];

const testimonials = [
  { name: "Sarah Chen", role: "Homeowner, Oakland CA", text: "My water bill dropped 40% in the first month. The AI actually learns — it diverted more when it noticed my vegetable garden needed extra. Incredible.", rating: 5 },
  { name: "Marcus Rivera", role: "Property Manager, Austin TX", text: "I manage 12 units. Greenwater saved us $14,000 in water costs last year. The multi-property dashboard is a game-changer.", rating: 5 },
  { name: "Emily Nakamoto", role: "Homeowner, Portland OR", text: "The kids love the educational dashboard. My 8-year-old now reminds us to save water. It changed our whole family's relationship with conservation.", rating: 5 },
  { name: "David Park", role: "Real Estate Developer, Denver CO", text: "We installed Greenwater in 45 new builds. It's our #1 selling feature. Buyers love the tech and the environmental cred.", rating: 5 },
  { name: "Dr. Lisa Okonkwo", role: "Environmental Engineer", text: "Finally, a gray water system that actually works without constant maintenance. The water quality data is more detailed than my lab equipment.", rating: 5 },
  { name: "James Wilson", role: "Homeowner, Scottsdale AZ", text: "In the desert, every drop counts. Greenwater's drought response mode kicked in during our water restrictions and kept my garden alive.", rating: 5 },
];

const faqItems = [
  { q: "What is a gray water system?", a: "A gray water system diverts household wastewater from showers, sinks, and laundry — water that has been used but is not contaminated with sewage — and recycles it for garden irrigation. Greenwater automates this with AI-driven filtration, so every diverted drop meets quality standards before reaching your plants." },
  { q: "Can I trust it?", a: "Greenwater is engineered with safety as the first concern. Water passes through multiple filtration systems and is purified from microbial contaminants. Every system is engineered with redundancies and tested far beyond normal operating conditions. We carry $5M in liability insurance and every install includes a 30-day satisfaction guarantee." },
  { q: "How much maintenance does it need?", a: "Zero. Every component is engineered for tens of thousands of duty cycles. The self-cleaning filters, the smart valves, the sensors — all designed for the lifetime of your home. Our AI monitors system health and alerts you only if something actually needs attention, which is rare." },
  { q: "Is the water safe for garden use?", a: "Absolutely. Gray water has been proven safe for gardens worldwide for decades, with no adverse effects compared to tap water. Our three-stage filtration exceeds all regulatory requirements. We provide monthly water quality reports so you can see exactly what's going into your soil." },
  { q: "How long does installation take?", a: "Less than a day in most homes. We connect to existing drain lines without modifying your plumbing stack. In most jurisdictions, no permits are required. Our certified installers handle everything — you'll be saving water by dinner time." },
  { q: "How much does it cost?", a: "Greenwater is currently available through our limited pilot program at a specially discounted rate. Pilot pricing starts at $1,200 installed, which typically pays for itself in water savings within 12-18 months. Plus, most homeowners qualify for $200-800 in rebates that we handle for you." },
  { q: "What's the difference between gray water and black water?", a: "Gray water is wastewater from showers, bathroom sinks, and laundry — it does not contain sewage. Black water comes from toilets and contains human waste. Greenwater only diverts gray water lines; black water lines are never touched. This distinction is important for safety and permitting." },
  { q: "Does it work with my existing plumbing?", a: "Greenwater is designed for standard residential plumbing. Our team does a free pre-installation assessment to confirm compatibility. The system works with virtually all shower, bathroom sink, and laundry configurations." },
  { q: "What happens during winter / freezing conditions?", a: "The system includes automatic freeze protection. When temperatures drop near freezing, internal valves drain standing water and the system enters a low-power standby mode. Your garden won't need water in winter anyway, and the system resumes automatically in spring." },
  { q: "Can I take it with me if I move?", a: "Yes. Greenwater systems are designed for easy deinstallation and reinstallation. Many homeowners choose to leave them as a selling feature (homes with Greenwater sell 23% faster), but if you want to take it, our team handles the transfer." },
];

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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12z" />
          </svg>
          <span className="font-serif-display text-sm leading-none" style={{ fontSize: "16px", letterSpacing: "-0.02em" }}>Greenwater</span>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <a href="#problem" className="text-white/80 hover:text-white text-[13px] font-sans tracking-tight transition-colors">Problem</a>
          <a href="#how" className="text-white/80 hover:text-white text-[13px] font-sans tracking-tight transition-colors">How It Works</a>
          <a href="#features" className="text-white/80 hover:text-white text-[13px] font-sans tracking-tight transition-colors">Features</a>
          <a href="#faq" className="text-white/80 hover:text-white text-[13px] font-sans tracking-tight transition-colors">FAQ</a>
        </div>
        <a href="#pilot" className="bg-[#1f1f29] text-white text-[13px] font-medium px-3 py-1.5 rounded-[4px] flex items-center gap-1.5 hover:bg-white hover:text-[#1f1f29] transition-all">
          Get Early Access
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </a>
        <div className="hidden lg:flex items-center gap-1.5 text-white/60 text-[11px] font-sans tracking-tight">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
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

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Full-bleed painted background (gradient illustration) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2135] via-[#1a3f5c] to-[#0a1f2e]" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(ellipse at 20% 80%, rgba(0,139,139,0.4) 0%, transparent 50%),
                          radial-gradient(ellipse at 80% 20%, rgba(0,129,192,0.3) 0%, transparent 50%),
                          radial-gradient(ellipse at 50% 50%, rgba(16,9,4,0.2) 0%, transparent 70%)`
      }} />
      {/* Cityscape silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-[0.08]" style={{
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Crect x='0' y='200' width='60' height='200' fill='%23fff'/%3E%3Crect x='80' y='150' width='45' height='250' fill='%23fff'/%3E%3Crect x='140' y='220' width='70' height='180' fill='%23fff'/%3E%3Crect x='230' y='100' width='55' height='300' fill='%23fff'/%3E%3Crect x='300' y='180' width='80' height='220' fill='%23fff'/%3E%3Crect x='400' y='60' width='65' height='340' fill='%23fff'/%3E%3Crect x='480' y='140' width='50' height='260' fill='%23fff'/%3E%3Crect x='550' y='200' width='90' height='200' fill='%23fff'/%3E%3Crect x='660' y='80' width='60' height='320' fill='%23fff'/%3E%3Crect x='740' y='170' width='55' height='230' fill='%23fff'/%3E%3Crect x='820' y='120' width='70' height='280' fill='%23fff'/%3E%3Crect x='910' y='190' width='45' height='210' fill='%23fff'/%3E%3Crect x='980' y='50' width='75' height='350' fill='%23fff'/%3E%3Crect x='1080' y='160' width='50' height='240' fill='%23fff'/%3E%3Crect x='1150' y='220' width='60' height='180' fill='%23fff'/%3E%3C/svg%3E") repeat-x bottom`,
        backgroundSize: "1200px 40vh"
      }} />
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
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
        {/* Frosted hero card */}
        <div className="max-w-[640px] glass-blue rounded-[24px] p-6 md:p-8 shadow-[rgba(0,0,0,0.06)_0px_2px_2px_0px,rgba(0,0,0,0.04)_0px_0px_0px_5px] animate-fade-in-up">
          <h1 className="font-serif-display text-white text-[42px] md:text-[52px] leading-[1.1] tracking-[-1.04px] mb-4">
            Cut your water use in half.
          </h1>
          <p className="text-white/85 text-[15px] md:text-[16px] font-sans leading-relaxed mb-6 max-w-[520px]">
            Greenwater&apos;s AI-driven gray water system diverts shower and sink water back to your garden — no full replumbing, no maintenance, no guilt. <strong className="text-white">25,000 gallons saved every year.</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#pilot" className="inline-flex items-center gap-2 text-white text-[15px] font-medium border-b border-white/70 pb-0.5 hover:text-white/80 hover:border-white/40 transition-all">
              Get Early Access
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
            </a>
            <a href="#how" className="inline-flex items-center gap-2 text-white/70 text-[15px] font-sans hover:text-white transition-colors">
              How it works
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14l-7 7-7-7m14-8l-7 7-7-7"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-[10px] font-sans tracking-widest">
        <span>SCROLL TO EXPLORE</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, suffix = "", decimals = 1 }: { end: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return <div ref={ref} className="stat-number">{count.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</div>;
}

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-[#f9faf7] rounded-[12px] p-5 shadow-subtle text-center">
      <div className="font-serif-md text-[32px] leading-[1.1] tracking-[-0.64px] text-[#006b6b]">{value}</div>
      <div className="text-[15px] font-medium text-[#171717] mt-1">{label}</div>
      {sub && <div className="text-[13px] text-[#646464] mt-0.5">{sub}</div>}
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <div className="bg-white rounded-[12px] p-5 shadow-subtle border border-[#dee2de] hover:shadow-subtle-2 transition-all duration-300 parallax-tilt" style={{ animationDelay: `${index * 0.03}s` }}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{feature.icon}</span>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-sans text-[15px] font-semibold text-[#171717] leading-tight">{feature.title}</h3>
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#f0f0f0] text-[#646464] uppercase tracking-wider">{feature.tag}</span>
          </div>
          <p className="text-[13px] text-[#646464] mt-1 leading-relaxed">{feature.desc}</p>
        </div>
      </div>
    </div>
  );
}

function IntegrationBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className={`${color} px-3 py-1.5 rounded-[8px] text-[12px] font-medium flex items-center gap-1.5`}>
      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
      {name}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <div className="bg-white rounded-[12px] p-6 shadow-subtle border border-[#dee2de] flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#0081c0" stroke="#0081c0" strokeWidth="1"><polygon points="12 2 15 9 22 9 16 14 18 22 12 17 6 22 8 14 2 9 9 9"/></svg>
        ))}
      </div>
      <p className="text-[14px] text-[#444141] leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-4 pt-3 border-t border-[#dee2de]">
        <div className="text-[14px] font-semibold text-[#171717]">{t.name}</div>
        <div className="text-[12px] text-[#646464]">{t.role}</div>
      </div>
    </div>
  );
}

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#dee2de] py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left gap-4">
        <span className="text-[16px] font-medium text-[#171717] font-sans">{item.q}</span>
        <svg className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
        <p className="text-[14px] text-[#646464] leading-relaxed">{item.a}</p>
      </div>
    </div>
  );
}

function ThreeDProductCard() {
  return (
    <div className="perspective-container">
      <div className="perspective-item relative w-full max-w-[320px] mx-auto">
        {/* 3D floating product */}
        <div className="animate-float">
          <div className="relative rounded-[24px] bg-gradient-to-br from-[#006b6b] to-[#004d4d] p-8 shadow-[0_20px_60px_rgba(0,107,107,0.3)]">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-[#008c8c]/20 to-transparent" />
            {/* Device body */}
            <div className="relative z-10">
              <div className="w-full aspect-[4/3] rounded-[12px] bg-gradient-to-br from-[#008c8c] to-[#006b6b] flex items-center justify-center border border-[#00a0a0]/30">
                <div className="text-center">
                  <svg className="mx-auto mb-2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12z" />
                    <path d="M12 22v-4" />
                  </svg>
                  <div className="text-white/80 text-[10px] font-sans tracking-widest uppercase">Greenwater Core</div>
                </div>
              </div>
              {/* Status dots */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-white/60 font-sans">Active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <span className="text-[10px] text-white/60 font-sans">Filtration</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "0.6s" }} />
                  <span className="text-[10px] text-white/60 font-sans">Connected</span>
                </div>
              </div>
              {/* Data readout */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { label: "Flow", value: "2.4 L/m" },
                  { label: "Quality", value: "98.7%" },
                  { label: "Saved", value: "847 gal" },
                ].map((d) => (
                  <div key={d.label} className="text-center bg-black/20 rounded-[8px] py-1.5">
                    <div className="text-[11px] font-semibold text-white">{d.value}</div>
                    <div className="text-[8px] text-white/50 uppercase tracking-wider">{d.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

export default function Home() {
  return (
    <>
      <FloatingNav />

      {/* ═══ HERO ═══ */}
      <HeroSection />

      {/* ═══ THE PROBLEM ═══ */}
      <section id="problem" className="py-24 md:py-32 bg-[#fefffc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-4">The Water Crisis</div>
              <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-6">
                We&apos;re running out of fresh water.{" "}
                <a href="#how" className="text-[#0081c0] underline decoration-1 underline-offset-4 hover:text-[#006b8e] transition-colors">Your home can help.</a>
              </h2>
              <p className="text-[15px] text-[#646464] leading-relaxed max-w-[480px]">
                The average American family uses 300 gallons of water per day. Nearly half goes to landscaping. Meanwhile, climate change is straining water supplies in every region. The solution isn&apos;t using less — it&apos;s using smarter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f9faf7] rounded-[12px] p-5 shadow-subtle">
                <div className="font-serif-md text-[34px] leading-[1.1] tracking-[-0.68px] text-[#c04a2a]">2.2B</div>
                <div className="text-[13px] text-[#646464] mt-1 leading-snug">People worldwide lack access to safe drinking water</div>
              </div>
              <div className="bg-[#f9faf7] rounded-[12px] p-5 shadow-subtle">
                <div className="font-serif-md text-[34px] leading-[1.1] tracking-[-0.68px] text-[#006b6b]">50%</div>
                <div className="text-[13px] text-[#646464] mt-1 leading-snug">Of household water can be reclaimed as gray water</div>
              </div>
              <div className="bg-[#f9faf7] rounded-[12px] p-5 shadow-subtle">
                <div className="font-serif-md text-[34px] leading-[1.1] tracking-[-0.68px] text-[#0081c0]">25K</div>
                <div className="text-[13px] text-[#646464] mt-1 leading-snug">Gallons saved per year by the average Greenwater home</div>
              </div>
              <div className="bg-[#f9faf7] rounded-[12px] p-5 shadow-subtle">
                <div className="font-serif-md text-[34px] leading-[1.1] tracking-[-0.68px] text-[#1a4a3a]">40%</div>
                <div className="text-[13px] text-[#646464] mt-1 leading-snug">Average reduction in monthly water bills with Greenwater</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how" className="py-24 md:py-32 bg-[#f9faf7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">How It Works</div>
            <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717]">
              Smart diversion, not full replumbing.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Intelligent Diversion",
                desc: "Our valve pack reads source quality in real-time and diverts only reclaimable gray water from showers and sinks. Black water lines stay untouched — reducing permitting friction to near zero.",
                color: "#0081c0",
              },
              {
                step: "02",
                title: "3-Stage Filtration",
                desc: "Sensor-driven AI models continuously optimize a three-stage filtration process, ensuring every drop meets quality thresholds before reaching your garden.",
                color: "#006b6b",
              },
              {
                step: "03",
                title: "Live Insights",
                desc: "Water use, quality, and savings data at your fingertips. Understand exactly where your water goes and how much you're saving, updated in real-time.",
                color: "#1a4a3a",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[12px] p-6 shadow-subtle border border-[#dee2de] hover:shadow-subtle-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center text-white font-serif-md text-[18px]" style={{ background: s.color }}>{s.step}</div>
                <h3 className="font-serif-md text-[22px] leading-[1.2] tracking-[-0.44px] text-[#171717] mt-4">{s.title}</h3>
                <p className="text-[14px] text-[#646464] leading-relaxed mt-2">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Diagram card */}
          <div className="mt-12 bg-white rounded-[16px] p-6 md:p-8 shadow-subtle-2 border border-[#dee2de]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-[15px] font-bold text-[#171717] font-sans">Isolated systems</div>
                <p className="text-[14px] text-[#646464] mt-2 leading-relaxed">
                  Traditional gray water systems are static and manual. Greenwater&apos;s AI learns your home&apos;s unique water patterns and optimizes every diversion, every filtration cycle, every drop.
                </p>
              </div>
              <div className="relative h-[160px] rounded-[12px] border border-[#dee2de] bg-white flex items-center justify-center overflow-hidden">
                <svg width="200" height="80" viewBox="0 0 200 80" className="opacity-60">
                  <rect x="10" y="10" width="50" height="50" rx="4" fill="none" stroke="#b4b8b4" strokeWidth="1.5" />
                  <rect x="75" y="10" width="50" height="50" rx="4" fill="none" stroke="#b4b8b4" strokeWidth="1.5" />
                  <rect x="140" y="10" width="50" height="50" rx="4" fill="none" stroke="#b4b8b4" strokeWidth="1.5" />
                  <line x1="60" y1="35" x2="75" y2="35" stroke="#0081c0" strokeWidth="1" strokeDasharray="3,2" />
                  <line x1="125" y1="35" x2="140" y2="35" stroke="#0081c0" strokeWidth="1" strokeDasharray="3,2" />
                </svg>
                <div className="absolute bottom-2 right-3 text-[10px] text-[#b4b8b4] font-sans">Fig. 1 — Traditional static diversion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LIVE DASHBOARD (3D Dark Section) ═══ */}
      <section className="py-24 md:py-32 bg-[#100904] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          background: `radial-gradient(circle at 30% 50%, #008c8c 0%, transparent 50%),
                      radial-gradient(circle at 70% 50%, #0081c0 0%, transparent 50%)`
        }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-sans font-medium text-[#ffedd7]/60 uppercase tracking-[0.2em] mb-4">AI-Powered Dashboard</div>
              <h2 className="font-serif-md text-[34px] md:text-[42px] leading-[1.1] tracking-[-0.84px] text-[#ffedd7] mb-4">
                Every drop, every dollar,<br />every tree — live.
              </h2>
              <p className="text-[14px] text-[#ffedd7]/70 leading-relaxed mb-6">
                Our real-time dashboard transforms water data into beautiful, actionable insights. Watch your savings grow by the second, compare your impact, and explore detailed analytics — all from any device.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#features" className="inline-flex items-center gap-2 text-[#dc5000] text-[13px] font-sans font-medium border border-[#dc5000] rounded-[22.5px] px-4 py-2 hover:bg-[#dc5000] hover:text-[#ffedd7] transition-all duration-300">
                  Explore Features
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Animated dashboard preview */}
              <div className="bg-[#1a1a1a] rounded-[16px] border border-[#40372e] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#40372e]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dc5000]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6c5f51]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#40372e]/60" />
                  <div className="ml-3 text-[10px] text-[#6c5f51] font-sans">dashboard.greenwater.com</div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Today Saved", value: "847 gal", trend: "+12%" },
                      { label: "This Month", value: "2,140 gal", trend: "+8%" },
                      { label: "Total Saved", value: "25,847 gal", trend: "+15%" },
                    ].map((d) => (
                      <div key={d.label} className="bg-black/40 rounded-[8px] p-3">
                        <div className="text-[9px] text-[#6c5f51] uppercase tracking-wider">{d.label}</div>
                        <div className="text-[16px] font-semibold text-[#ffedd7] mt-0.5">{d.value}</div>
                        <div className="text-[10px] text-green-400">{d.trend}</div>
                      </div>
                    ))}
                  </div>
                  {/* Mini chart */}
                  <div className="h-[60px] flex items-end gap-1 mb-3">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} className="flex-1 rounded-t-[2px] bg-[#008c8c]/40" style={{
                        height: `${20 + Math.random() * 80}%`,
                        opacity: 0.4 + (i / 14) * 0.6,
                      }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] text-[#6c5f51] font-sans">
                    <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-[#382416] text-[#ffedd7] text-[10px] font-sans px-3 py-1 rounded-full border border-[#40372e]">
                Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 40 FEATURES ═══ */}
      <section id="features" className="py-24 md:py-32 bg-[#fefffc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Everything You Need</div>
            <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717]">
              40 ways Greenwater transforms your home.
            </h2>
            <p className="text-[15px] text-[#646464] max-w-[600px] mx-auto mt-4 leading-relaxed">
              From AI-powered optimization to community challenges — this isn&apos;t a gray water system. It&apos;s a complete home water intelligence platform.
            </p>
          </div>

          {/* Feature grid */}
          <div className="feature-grid">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>

          {/* Extra features row */}
          <div className="mt-8 bg-[#f9faf7] rounded-[16px] p-6 md:p-8 shadow-subtle">
            <h3 className="font-serif-md text-[24px] leading-[1.2] tracking-[-0.48px] text-[#171717] mb-6">Plus five more ways to win</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {features2.map((f) => (
                <div key={f.title} className="bg-white rounded-[12px] p-4 shadow-subtle border border-[#dee2de]">
                  <span className="text-xl">{f.icon}</span>
                  <h4 className="text-[13px] font-semibold text-[#171717] mt-2">{f.title}</h4>
                  <p className="text-[11px] text-[#646464] mt-1 leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SMART HOME INTEGRATION ═══ */}
      <section className="py-24 md:py-32 bg-[#f9faf7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Smart Home Ready</div>
              <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-4">
                Works with everything you already own.
              </h2>
              <p className="text-[15px] text-[#646464] leading-relaxed max-w-[480px] mb-6">
                Greenwater integrates with every major smart home platform. Ask Alexa how much you saved, check your dashboard on Google Nest, or create IFTTT automations that make conservation effortless.
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((i) => (
                  <IntegrationBadge key={i.name} name={i.name} color={i.color} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-[16px] p-6 shadow-subtle-2 border border-[#dee2de]">
                <div className="text-[13px] font-medium text-[#171717] mb-4">Popular Automations</div>
                <div className="space-y-3">
                  {[
                    { trigger: "If savings reach 1,000 gallons", action: "Turn on garden party lights" },
                    { trigger: "If drought alert issued", action: "Enable max conservation mode" },
                    { trigger: "If tank level drops below 20%", action: "Send phone notification" },
                    { trigger: "At 7 AM daily", action: "Read yesterday's savings on Alexa" },
                    { trigger: "When monthly goal exceeded", action: "Share certificate to social media" },
                  ].map((a) => (
                    <div key={a.trigger} className="flex items-center gap-3 text-[13px] bg-[#f9faf7] rounded-[8px] p-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0081c0] flex-shrink-0" />
                      <span className="text-[#444141]">{a.trigger}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b4b8b4" strokeWidth="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
                      <span className="text-[#171717] font-medium">{a.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS COUNTERS ═══ */}
      <section className="py-16 md:py-20 bg-[#100904] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, #ffedd7 0%, transparent 70%)`
        }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { end: 84700, label: "Total Gallons Saved", suffix: "+", decimals: 0 },
              { end: 382, label: "Homes Installed", suffix: "", decimals: 0 },
              { end: 99.97, label: "System Uptime %", suffix: "%", decimals: 2 },
              { end: 4.8, label: "Avg Rating", suffix: "/5", decimals: 1 },
            ].map((s) => (
              <div key={s.label} className="text-[#ffedd7]">
                <div className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px]">
                  <AnimatedCounter end={s.end} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="text-[12px] text-[#ffedd7]/60 mt-1 font-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3D PRODUCT SHOWCASE ═══ */}
      <section className="py-24 md:py-32 bg-[#100904] relative">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, #008c8c 0%, transparent 40%),
                              radial-gradient(circle at 20% 50%, #0081c0 0%, transparent 40%)`
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ThreeDProductCard />
            <div>
              <div className="text-[10px] font-sans font-medium text-[#ffedd7]/60 uppercase tracking-[0.2em] mb-4">Greenwater Core</div>
              <h2 className="font-serif-md text-[34px] md:text-[42px] leading-[1.1] tracking-[-0.84px] text-[#ffedd7] mb-4">
                Engineered for a lifetime. Zero maintenance.
              </h2>
              <p className="text-[14px] text-[#ffedd7]/70 leading-relaxed mb-6">
                Every component is rated for 100,000+ duty cycles. Self-cleaning filters, titanium-grade sensors, and military-spec valves. You install it once and forget it exists — except for the savings.
              </p>
              <div className="space-y-3 text-[13px]">
                {[
                  { label: "Filtration Stages", value: "3 (Pre, Nano, UV)" },
                  { label: "Valve Cycles", value: "100,000+ MTBF" },
                  { label: "Power Draw", value: "12W (idle), 45W (active)" },
                  { label: "Connectivity", value: "WiFi 6, Zigbee, Thread" },
                  { label: "Waterproof Rating", value: "IP67 (all exterior)" },
                  { label: "Warranty", value: "15 years, fully transferable" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-[#40372e]/60 pb-2">
                    <span className="text-[#6c5f51]">{spec.label}</span>
                    <span className="text-[#ffedd7] font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 md:py-32 bg-[#fefffc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Trusted by Homeowners</div>
            <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717]">
              People all around the world love Greenwater.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENVIRONMENTAL IMPACT ═══ */}
      <section className="py-24 md:py-32 bg-[#f9faf7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Your Impact</div>
              <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-6">
                One home makes a difference. A{" "}
                <a href="#community" className="text-[#0081c0] underline decoration-1 underline-offset-4">community changes the world.</a>
              </h2>
              <p className="text-[15px] text-[#646464] leading-relaxed max-w-[480px] mb-6">
                Every Greenwater home saves the equivalent of 83 trees worth of CO₂ absorption per year. Imagine what 10,000 homes can do. That&apos;s our mission.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "CO₂ Offset", value: "420 lbs/yr", icon: "🌳" },
                  { label: "Energy Saved", value: "380 kWh/yr", icon: "⚡" },
                  { label: "Pool Equiv.", value: "1.5 pools/yr", icon: "🏊" },
                  { label: "Showers Saved", value: "1,500/yr", icon: "🚿" },
                ].map((d) => (
                  <div key={d.label} className="bg-white rounded-[12px] p-4 shadow-subtle border border-[#dee2de]">
                    <span className="text-2xl">{d.icon}</span>
                    <div className="font-semibold text-[15px] text-[#171717] mt-1">{d.value}</div>
                    <div className="text-[12px] text-[#646464]">{d.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div id="community" className="bg-white rounded-[16px] p-6 shadow-subtle-2 border border-[#dee2de]">
              <h3 className="font-serif-md text-[24px] leading-[1.2] tracking-[-0.48px] text-[#171717] mb-4">Community Leaderboard</h3>
              <div className="space-y-3">
                {[
                  { name: "🏠 Portland Eco District", saved: "847,230 gal", rank: 1 },
                  { name: "🏠 Austin Water Savers", saved: "612,400 gal", rank: 2 },
                  { name: "🏠 Denver Green Homes", saved: "498,200 gal", rank: 3 },
                  { name: "🏠 Seattle Conscious Block", saved: "423,100 gal", rank: 4 },
                  { name: "🏠 Your Neighborhood", saved: "98,400 gal", rank: 12 },
                ].map((c) => (
                  <div key={c.name} className={`flex items-center justify-between p-3 rounded-[8px] ${c.rank === 1 ? "bg-yellow-50 border border-yellow-200" : "bg-[#f9faf7]"}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${c.rank === 1 ? "bg-yellow-400 text-yellow-900" : "bg-[#dee2de] text-[#646464]"}`}>{c.rank}</span>
                      <span className="text-[13px] font-medium text-[#171717]">{c.name}</span>
                    </div>
                    <span className="text-[12px] text-[#646464]">{c.saved}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SAVINGS CALCULATOR ═══ */}
      <section className="py-24 md:py-32 bg-[#fefffc]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#100904] rounded-[16px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="text-[10px] font-sans font-medium text-[#ffedd7]/60 uppercase tracking-[0.2em] mb-4">ROI Calculator</div>
              <div className="text-[#ffedd7] font-serif-md text-[32px] md:text-[38px] leading-[1.1] tracking-[-0.76px] mb-1">
                $1,200 <span className="text-[#6c5f51] text-[18px]">installed</span>
              </div>
              <div className="text-[#ffedd7]/70 text-[14px] mb-6 font-sans">Pays for itself in 12-18 months with average water savings of $85/month</div>
              <div className="space-y-3">
                {[
                  { label: "Monthly water bill savings", value: "$85" },
                  { label: "Annual rebate (avg)", value: "$340" },
                  { label: "Energy savings (water treatment)", value: "$33" },
                  { label: "Insurance discount (est)", value: "$16" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-2 border-b border-[#40372e]/60 text-[13px]">
                    <span className="text-[#6c5f51]">{r.label}</span>
                    <span className="text-[#ffedd7] font-medium">{r.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 text-[14px]">
                  <span className="text-[#ffedd7] font-semibold">Total monthly benefit</span>
                  <span className="text-[#ffedd7] font-bold">$132</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">Your Financial Case</div>
              <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717] mb-4">
                It doesn&apos;t just save water. It saves you money.
              </h2>
              <p className="text-[15px] text-[#646464] leading-relaxed max-w-[480px] mb-6">
                Between lower water bills, energy savings, rebates, and increased property value, Greenwater pays for itself within the first year. After that, it&apos;s pure savings — and pure impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#pilot" className="inline-flex items-center gap-2 bg-[#0081c0] text-white text-[13px] font-sans font-medium px-4 py-2.5 rounded-[4px] hover:bg-[#006b8e] transition-all">
                  Calculate Your Savings
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PILOT / CTA ═══ */}
      <section id="pilot" className="py-24 md:py-32 bg-[#100904] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 30% 80%, rgba(0,139,139,0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 70% 20%, rgba(0,129,192,0.1) 0%, transparent 50%)`
        }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <div className="text-[10px] font-sans font-medium text-[#ffedd7]/60 uppercase tracking-[0.2em] mb-4">Limited Pilot Program</div>
          <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#ffedd7] mb-4">
            Be one of the first 500 homes.
          </h2>
          <p className="text-[14px] text-[#ffedd7]/70 leading-relaxed max-w-[560px] mx-auto mb-8">
            Our pilot program offers specially discounted pricing, priority installation, and a direct line to our engineering team. Spots are limited — and going fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-[36px] bg-[#382416] text-[#ffedd7] text-[13px] font-sans font-medium border border-[#ffedd7]/20 hover:bg-[#40372e] transition-all">
              Join the Pilot — $1,200 Installed
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-[#ffedd7]/60 text-[13px] font-sans border-b border-[#ffedd7]/20 hover:text-[#ffedd7] transition-colors">
              Schedule a Free Assessment
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-[11px] text-[#6c5f51] font-sans">
            <span>✓ No commitment</span>
            <span>✓ Free site survey</span>
            <span>✓ 30-day guarantee</span>
            <span>✓ 15-year warranty</span>
          </div>
          {/* Progress bar */}
          <div className="mt-8 max-w-[400px] mx-auto">
            <div className="flex justify-between text-[10px] text-[#6c5f51] mb-1.5 font-sans">
              <span>237 of 500 pilot spots claimed</span>
              <span>47%</span>
            </div>
            <div className="h-1.5 bg-[#40372e] rounded-full overflow-hidden">
              <div className="h-full w-[47%] bg-gradient-to-r from-[#0081c0] to-[#008c8c] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-24 md:py-32 bg-[#fefffc]">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[13px] font-sans font-semibold text-[#444141] uppercase tracking-wider mb-3">FAQ</div>
            <h2 className="font-serif-md text-[36px] md:text-[44px] leading-[1.1] tracking-[-0.88px] text-[#171717]">
              Common questions.
            </h2>
          </div>
          <div>
            {faqItems.map((item, i) => (
              <FAQItem key={item.q} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-16 md:py-20 bg-[#100904]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 text-[#ffedd7] mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12z" />
                </svg>
                <span className="font-serif-display text-[16px] leading-none tracking-[-0.02em]">Greenwater</span>
              </div>
              <p className="text-[12px] text-[#6c5f51] leading-relaxed max-w-[200px]">
                AI-powered gray water recycling for the modern home.
              </p>
            </div>
            <div>
              <div className="text-[11px] font-sans font-semibold text-[#ffedd7]/40 uppercase tracking-wider mb-3">Product</div>
              <div className="space-y-2">
                {["How It Works", "Features", "Pricing", "FAQ", "Documentation"].map((l) => (
                  <a key={l} href="#" className="block text-[12px] text-[#6c5f51] hover:text-[#ffedd7] transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-sans font-semibold text-[#ffedd7]/40 uppercase tracking-wider mb-3">Company</div>
              <div className="space-y-2">
                {["About", "Blog", "Careers", "Press Kit", "Contact"].map((l) => (
                  <a key={l} href="#" className="block text-[12px] text-[#6c5f51] hover:text-[#ffedd7] transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-sans font-semibold text-[#ffedd7]/40 uppercase tracking-wider mb-3">Connect</div>
              <div className="space-y-2">
                {["Twitter / X", "LinkedIn", "Instagram", "YouTube", "Newsletter"].map((l) => (
                  <a key={l} href="#" className="block text-[12px] text-[#6c5f51] hover:text-[#ffedd7] transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#40372e]/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[11px] text-[#6c5f51] font-sans">
              &copy; 2026 Greenwater. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[11px] text-[#6c5f51] font-sans">
              <a href="#" className="hover:text-[#ffedd7] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#ffedd7] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#ffedd7] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
