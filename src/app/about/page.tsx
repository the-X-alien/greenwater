import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">About Greenwater</h1>
            <p className="text-body text-ash leading-body mb-12 max-w-[600px]">
              We&apos;re on a mission to make water conservation accessible to every home. What started as a garage project in 2024 is now a company
              of engineers, environmental scientists, and builders working toward a future where fresh water goes further.
            </p>
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Our Story</h2>
            <p className="text-body text-ash leading-body mb-6">
              Greenwater was founded in 2024 by a team who saw an uncomfortable truth: the average American family uses 300 gallons of water a day,
              and nearly half goes to landscaping. Meanwhile, drought conditions are intensifying across the Western United States and beyond.
            </p>
            <p className="text-body text-ash leading-body mb-6">
              Existing gray water solutions were either too expensive, too complicated, or required major construction. We believed there was a better
              way &mdash; one that combined modern AI with smart hardware to make recycling effortless and automatic.
            </p>
            <p className="text-body text-ash leading-body mb-12">
              After two years of development and testing with early adopters across California, we launched our pilot program. Today, Greenwater systems
              are installed in hundreds of homes, saving millions of gallons of water every month.
            </p>
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Our Mission</h2>
            <p className="text-body text-ash leading-body mb-12">
              Water scarcity is one of the defining challenges of our time. Our mission is to make gray water recycling as common as
              recycling plastic or aluminum &mdash; a simple, obvious choice that every homeowner can make.
            </p>
            <h2 className="font-signifier text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.7px] text-ink mb-4">Our Team</h2>
            <p className="text-body text-ash leading-body mb-6">
              We&apos;re a diverse team of hardware engineers, machine learning researchers, water quality scientists, and product builders.
              Our backgrounds span Stanford, Berkeley, Caltech, and leading cleantech companies. We&apos;re headquartered in San Francisco,
              California, with team members across the state.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                { num: "25+", label: "Team members" },
                { num: "8", label: "Engineering disciplines" },
                { num: "3", label: "Years of R&amp;D" },
                { num: "500+", label: "Pilot homes" },
              ].map((s) => (
                <div key={s.label} className="bg-fog rounded-3xl p-6 text-center">
                  <div className="font-signifier text-[32px] leading-[1.1] tracking-[-0.5px] text-ink">{s.num}</div>
                  <div className="text-[13px] text-graphite mt-1">{s.label}</div>
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
