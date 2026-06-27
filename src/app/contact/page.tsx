import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24 md:py-32 bg-pure-white">
          <div className="max-w-[760px] mx-auto px-6">
            <h1 className="font-signifier text-[48px] md:text-[56px] leading-[1.1] tracking-[-1.2px] text-ink mb-6">Contact</h1>
            <p className="text-body text-ash leading-body mb-16 max-w-[600px]">
              We&apos;d love to hear from you. Whether you&apos;re interested in the pilot program, have a technical question, or want to say hello.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              <div className="bg-fog rounded-3xl p-7">
                <h2 className="font-signifier text-[20px] leading-[1.3] tracking-[-0.2px] text-ink mb-2">Email</h2>
                <p className="text-[14px] text-graphite mb-1">Send us a message anytime.</p>
                <a href="mailto:hello@waterwz.com" className="text-[15px] font-[450] text-ink underline decoration-1 underline-offset-2 hover:text-graphite transition-colors">
                  hello@waterwz.com
                </a>
              </div>
              <div className="bg-fog rounded-3xl p-7">
                <h2 className="font-signifier text-[20px] leading-[1.3] tracking-[-0.2px] text-ink mb-2">Office</h2>
                <p className="text-[14px] text-graphite mb-1">San Francisco, CA</p>
                <p className="text-[14px] text-graphite">Available by appointment</p>
              </div>
              <div className="bg-fog rounded-3xl p-7">
                <h2 className="font-signifier text-[20px] leading-[1.3] tracking-[-0.2px] text-ink mb-2">Response Time</h2>
                <p className="text-[14px] text-graphite mb-1">We typically respond within</p>
                <p className="text-[15px] font-[450] text-ink">24 hours on weekdays</p>
              </div>
              <div className="bg-fog rounded-3xl p-7">
                <h2 className="font-signifier text-[20px] leading-[1.3] tracking-[-0.2px] text-ink mb-2">Office Hours</h2>
                <p className="text-[14px] text-graphite mb-1">Monday &ndash; Friday</p>
                <p className="text-[15px] font-[450] text-ink">9:00 AM &ndash; 6:00 PM PST</p>
              </div>
            </div>

            <div className="bg-fog rounded-3xl p-8 text-center">
              <h2 className="font-signifier text-[24px] leading-[1.2] tracking-[-0.4px] text-ink mb-3">Send Us a Message</h2>
              <p className="text-[14px] text-graphite max-w-[480px] mx-auto mb-6">
                We&apos;re working on our contact form. For now, please reach out via email and we&apos;ll get back to you as quickly as possible.
              </p>
              <a
                href="mailto:hello@waterwz.com"
                className="inline-flex items-center gap-2 bg-ink text-pure-white text-[15px] font-[450] px-6 py-2.5 rounded-full tracking-[-0.009em] hover:bg-ink/90 transition-all"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
