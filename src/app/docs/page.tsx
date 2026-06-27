import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Docs() {
  const sections = [
    {
      title: "Getting Started",
      desc: "Everything you need to know after installation. Connect your account, configure your preferences, and start tracking your savings.",
      icon: "01",
    },
    {
      title: "Installation Manual",
      desc: "Detailed technical documentation for our installation team. System specifications, plumbing diagrams, and commissioning procedures.",
      icon: "02",
    },
    {
      title: "App Setup",
      desc: "Download and configure the Greenwater mobile app. Covers account creation, device pairing, notification settings, and dashboard customization.",
      icon: "03",
    },
    {
      title: "Troubleshooting",
      desc: "Common issues and their solutions. Includes error code reference, connectivity troubleshooting, and when to contact support.",
      icon: "04",
    },
    {
      title: "API Documentation",
      desc: "Integrate your Greenwater system with other smart home platforms. RESTful API reference with authentication, endpoints, and example requests.",
      icon: "05",
    },
    {
      title: "System Requirements",
      desc: "Hardware specifications, water chemistry thresholds, power requirements, and environmental operating conditions for the Greenwater system.",
      icon: "06",
    },
    {
      title: "Safety Guidelines",
      desc: "Important safety information for operating and maintaining your Greenwater system. Includes electrical safety, water quality, and emergency procedures.",
      icon: "07",
    },
    {
      title: "Firmware Updates",
      desc: "Release notes and update procedures for the Greenwater system firmware. Stay current with the latest features and improvements.",
      icon: "08",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Documentation</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              Everything you need to install, configure, and maintain your Greenwater system. Browse by category or use the search to find what you need.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-fog">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((s) => (
                <div key={s.title} className="bg-pure-white rounded-3xl p-7 shadow-subtle hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-fog flex items-center justify-center mb-4">
                    <span className="text-[13px] font-signifier text-graphite">{s.icon}</span>
                  </div>
                  <h2 className="font-signifier text-[22px] leading-[1.2] tracking-[-0.3px] text-ink mb-2">{s.title}</h2>
                  <p className="text-[14px] text-graphite leading-relaxed">{s.desc}</p>
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
