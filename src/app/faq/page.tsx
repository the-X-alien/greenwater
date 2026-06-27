import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    {
      q: "What is gray water?",
      a: "Gray water is the relatively clean wastewater from bathroom sinks, showers, and laundry. It excludes water from toilets and kitchen sinks (which is called black water). Gray water can be safely recycled for landscape irrigation, reducing your household&apos;s fresh water consumption by up to 50%.",
    },
    {
      q: "Does Greenwater work with septic systems?",
      a: "Yes. Greenwater is fully compatible with septic systems. By diverting gray water away from your septic tank, we actually reduce the load on your system, which can extend its lifespan. Our filtration process ensures only clean water reaches your garden, with no impact on your drain field.",
    },
    {
      q: "What happens in winter?",
      a: "Greenwater systems include a freeze protection mode. When ambient temperatures drop near freezing, the system automatically drains standing water from exposed pipes to prevent damage. You can also manually activate winter mode from the app, which pauses diversion until temperatures rise.",
    },
    {
      q: "Do I need permits to install Greenwater?",
      a: "No. Greenwater is designed to meet all applicable plumbing codes without requiring building permits. Our system connects to existing plumbing with no structural modifications. Our installation team handles all code compliance, and we provide documentation for your records.",
    },
    {
      q: "Can I take Greenwater with me if I move?",
      a: "Absolutely. The system can be uninstalled and reinstalled at a new home. Our team handles the move for a nominal fee. The 15-year warranty is transferable to the next homeowner, which can be a selling point if you decide to leave the system in place.",
    },
    {
      q: "Does it work in apartments or condos?",
      a: "Greenwater is currently designed for single-family homes with a garden or landscaping area. We&apos;re actively developing a compact unit for apartments and condos that will connect to toilet flushing and other non-potable uses. Join the newsletter to be notified when multi-unit support launches.",
    },
    {
      q: "Is the filtered water safe for my plants?",
      a: "Yes. Our 3-stage filtration process removes particulates, chemicals, soaps, and microorganisms, producing clean water that meets EPA guidelines for non-potable reuse. The UV stage ensures 99.9% pathogen neutralization. Many customers report healthier gardens because gray water contains trace nutrients that plants love.",
    },
    {
      q: "How much maintenance does the system need?",
      a: "Almost none. The self-cleaning valves handle routine maintenance automatically. Sediment and carbon filters need replacement approximately once per year &mdash; we send you a reminder and replacement kit when it&apos;s time. The UV lamp is rated for 9,000 hours of continuous use (roughly one year). Everything else is maintenance-free.",
    },
    {
      q: "What does the warranty cover?",
      a: "Every Greenwater plan includes a 1-year warranty covering all parts and labor. The filtration unit and valve pack carry a 15-year transferable warranty against manufacturing defects. Extended coverage of 3 or 5 years is available. The warranty covers all components except consumables (filters and UV lamps).",
    },
    {
      q: "How long does installation take?",
      a: "Most installations are completed in about 2 hours. Our technician arrives, assesses your plumbing configuration, installs the diversion valve pack under your sink and shower, mounts the filtration unit, connects to your Wi-Fi, and walks you through the mobile app setup. No mess, no disruption to your day.",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Frequently Asked Questions</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              Everything you need to know about Greenwater. Still have questions? <a href="/contact" className="text-ink underline decoration-1 underline-offset-2 hover:text-graphite">Get in touch</a>.
            </p>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-fog rounded-3xl p-7">
                  <h2 className="font-signifier text-[20px] leading-[1.3] tracking-[-0.2px] text-ink mb-3">{faq.q}</h2>
                  <p className="text-[14px] text-ash leading-relaxed">{faq.a}</p>
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
