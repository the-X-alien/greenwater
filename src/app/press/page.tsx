import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Press() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Press Kit</h1>
            <p className="text-body text-ash leading-body mb-6">
              Greenwater is an AI-powered gray water recycling company on a mission to make water conservation accessible to every home.
              For press inquiries, please contact <a href="mailto:hello@waterwz.com" className="text-ink underline decoration-1 underline-offset-2">hello@waterwz.com</a>.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[760px] mx-auto px-6">
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Brand Description</h2>
            <p className="text-body text-ash leading-body mb-8">
              Greenwater makes a smart home device that recycles gray water from showers and sinks for garden irrigation. The system uses
              AI-driven filtration, real-time monitoring, and automatic diversion to cut household water use by up to 50% with zero daily effort.
            </p>

            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Logo Usage Guidelines</h2>
            <p className="text-body text-ash leading-body mb-3">
              The Greenwater logo consists of a water droplet icon paired with the wordmark set in Signifier. Clear space of at least 50% of
              the logo height should be maintained on all sides. The logo should always be reproduced from approved digital files.
            </p>
            <p className="text-body text-ash leading-body mb-3">
              On light backgrounds, use the full-color logo. On dark backgrounds, use the white version. Do not rotate, stretch, or apply
              effects to the logo. Minimum size for print is 0.75 inches wide; for digital, 120 pixels.
            </p>
            <p className="text-body text-ash leading-body mb-8">
              Our brand colors are ink (#17191c), pure white (#ffffff), and accent green (#1a7a5c). The primary typeface is Signifier for
              headings and Sohne for body copy.
            </p>

            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Fact Sheet</h2>
            <div className="space-y-3 mb-8">
              {[
                { label: "Founded", value: "2024" },
                { label: "Headquarters", value: "San Francisco, CA" },
                { label: "Product", value: "AI-powered gray water recycling system" },
                { label: "Water savings", value: "Up to 2,500 gallons/month per home" },
                { label: "Cost savings", value: "$85&ndash;$120/month on water bills" },
                { label: "Installation time", value: "~2 hours, no permits required" },
                { label: "Pilot homes", value: "500+ and growing" },
                { label: "Key technology", value: "3-stage filtration, ML optimization, IoT sensors" },
              ].map((f) => (
                <div key={f.label} className="flex gap-4 text-[14px]">
                  <span className="font-[450] text-ink w-36 shrink-0">{f.label}</span>
                  <span className="text-graphite">{f.value}</span>
                </div>
              ))}
            </div>

            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Press Releases</h2>

            <div className="bg-pure-white rounded-3xl p-7 shadow-subtle mb-6">
              <div className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[#1a7a5c] mb-2">March 1, 2026</div>
              <h3 className="font-signifier text-[22px] leading-[1.2] tracking-[-0.3px] text-ink mb-3">Greenwater Pilot Program Surpasses 500 Homes, Reports 94% Average Water Savings</h3>
              <p className="text-[14px] text-graphite leading-relaxed">
                Greenwater today announced that its pilot program has exceeded 500 installed homes across California, with participants
                reporting an average 40% reduction in household water consumption. The company&apos;s AI-driven gray water recycling system,
                which requires no permits and installs in under two hours, has diverted over 125 million gallons of water since the
                program launched in early 2025.
              </p>
            </div>

            <div className="bg-pure-white rounded-3xl p-7 shadow-subtle">
              <div className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[#1a7a5c] mb-2">January 15, 2026</div>
              <h3 className="font-signifier text-[22px] leading-[1.2] tracking-[-0.3px] text-ink mb-3">Greenwater Raises $12M Series A to Scale Home Water Recycling</h3>
              <p className="text-[14px] text-graphite leading-relaxed">
                Greenwater, the AI-powered gray water recycling company, announced a $12 million Series A funding round led by
                Acre Ventures with participation from Climate Tech Partners and existing investors. The funding will be used to expand
                the company&apos;s pilot program, grow the engineering team, and prepare for a broad commercial launch in 2027.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
