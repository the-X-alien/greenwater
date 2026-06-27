export default function Footer() {
  return (
    <footer className="py-16 bg-pure-white border-t border-dove/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-10">
          <div>
            <a href="/" className="flex items-center gap-2 text-ink mb-3">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C10 2 4 8 4 13C4 16.3 6.7 19 10 19C13.3 19 16 16.3 16 13C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M10 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-signifier text-[16px] leading-none tracking-[-0.02em]">Greenwater</span>
            </a>
            <p className="text-[13px] text-graphite max-w-[220px] leading-relaxed">AI-powered gray water recycling for the modern home.</p>
          </div>
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-[11px] font-[500] text-graphite uppercase tracking-[0.05em] mb-3">Product</div>
              <div className="space-y-1.5">
                <a href="/how-it-works" className="block text-[13px] text-ash hover:text-ink transition-colors">How It Works</a>
                <a href="/features" className="block text-[13px] text-ash hover:text-ink transition-colors">Features</a>
                <a href="/pricing" className="block text-[13px] text-ash hover:text-ink transition-colors">Pricing</a>
                <a href="/faq" className="block text-[13px] text-ash hover:text-ink transition-colors">FAQ</a>
                <a href="/docs" className="block text-[13px] text-ash hover:text-ink transition-colors">Documentation</a>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-[500] text-graphite uppercase tracking-[0.05em] mb-3">Company</div>
              <div className="space-y-1.5">
                <a href="/about" className="block text-[13px] text-ash hover:text-ink transition-colors">About</a>
                <a href="/blog" className="block text-[13px] text-ash hover:text-ink transition-colors">Blog</a>
                <a href="/careers" className="block text-[13px] text-ash hover:text-ink transition-colors">Careers</a>
                <a href="/press" className="block text-[13px] text-ash hover:text-ink transition-colors">Press Kit</a>
                <a href="/contact" className="block text-[13px] text-ash hover:text-ink transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-[500] text-graphite uppercase tracking-[0.05em] mb-3">Updates</div>
              <div className="space-y-1.5">
                <a href="/blog" className="block text-[13px] text-ash hover:text-ink transition-colors">Blog</a>
                <a href="/newsletter" className="block text-[13px] text-ash hover:text-ink transition-colors">Newsletter</a>
                <a href="/docs" className="block text-[13px] text-ash hover:text-ink transition-colors">Release Notes</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-dove/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[12px] text-graphite">&copy; 2026 Greenwater. All rights reserved.</div>
          <div className="flex items-center gap-4 text-[12px] text-graphite">
            <a href="/privacy" className="hover:text-ink transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-ink transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
