import { Facebook, Twitter, Instagram, Youtube, ShieldCheck, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border-main pt-24 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img src="/logo1.png" alt="AFY Logo" className="h-13 w-auto" />
              <span className="text-2xl font-black font-display tracking-tighter text-text-primary">AI<span className="text-primary italic">FORYOU</span></span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs font-medium">
              Elite secondary market for game assets. Powered by AI for total security and unmatched speed.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-xl bg-bg-surface border border-border-main flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                <Facebook className="w-5 h-5 text-text-secondary current-color transition-colors" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-bg-surface border border-border-main flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-text-secondary current-color transition-colors" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-bg-surface border border-border-main flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer">
                <Instagram className="w-5 h-5 text-text-secondary current-color transition-colors" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">Marketplace</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Accounts Inventory</li>
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Game Currency</li>
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Boosting Services</li>
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Global Gift Cards</li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">Support Hub</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Safety Center</li>
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Conflict Resolution</li>
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Live Assistance</li>
              <li className="hover:text-accent cursor-pointer transition-all duration-300 font-bold">Service Status</li>
            </ul>
          </div>

          {/* Contact - Safety Card */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">Identity Security</h4>
            <div className="p-8 rounded-3xl bg-bg-surface border border-border-main relative overflow-hidden group">
              <ShieldCheck className="absolute -right-6 -bottom-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-text-primary font-black mb-3 italic">
                  <ShieldCheck className="w-5 h-5 text-accent shadow-[0_0_8px_var(--accent)]" />
                  Elite Guard
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Every trade is finalized through our multi-signature escrow system.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-widest cursor-pointer group-hover:translate-x-1 transition-transform">
                  View Protocol <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-main pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold text-text-secondary tracking-widest uppercase">© 2024 AIFORYOU GLOBAL CORE. DESIGNED FOR THE 1%.</p>
          <div className="flex gap-10 items-center opacity-30 hover:opacity-60 transition-opacity duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 dark:invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 dark:invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 dark:invert" />
          </div>
        </div>
      </div>
    </footer>
  );
}
