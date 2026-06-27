import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-pure-white border-b border-dove/30">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-ink">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C10 2 4 8 4 13C4 16.3 6.7 19 10 19C13.3 19 16 16.3 16 13C16 8 10 2 10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M10 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M7 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-signifier text-[18px] leading-none tracking-[-0.2px]">Greenwater</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a href="/" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">Home</a>
          <a href="/how-it-works" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">How It Works</a>
          <a href="/features" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">Technology</a>
          <a href="/pricing" className="text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/contact" className="hidden sm:inline text-[15px] font-[450] text-ink tracking-[-0.009em] hover:text-graphite transition-colors">Contact</a>
          <a href="/pricing" className="inline-flex items-center gap-1.5 bg-ink text-pure-white text-[15px] font-[450] px-5 py-2 rounded-full tracking-[-0.009em] hover:bg-ink/90 transition-all whitespace-nowrap">
            Get Early Access
            <ArrowRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </nav>
  );
}
