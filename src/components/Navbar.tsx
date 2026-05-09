import { Search, ShoppingCart, User, Menu, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base/90 backdrop-blur-md border-b border-border-main font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-8 h-16">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer group">
          <img src="/logo1.png" alt="AFY Logo" className="h-13 w-auto" />
          <span className="text-2xl font-black font-display tracking-tighter text-text-primary">AI<span className="text-primary italic">FORYOU</span></span>
        </div>

        {/* Central Search Bar */}
        <div className="hidden md:flex flex-grow max-w-2xl relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-text-secondary group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search AI tools, tutorials, and docs..."
            className="w-full bg-bg-surface border border-border-main rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all duration-300 text-text-primary placeholder:text-text-secondary"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 text-sm font-bold">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-bg-surface border border-border-main text-text-secondary hover:text-primary transition-all duration-300 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <span className="hidden lg:block text-text-secondary hover:text-primary cursor-pointer transition-all duration-300">SELL</span>
          
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer hover:text-accent transition-all duration-300">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-black shadow-[0_0_8px_rgba(191,255,0,0.5)]">0</span>
            </div>
            <div className="w-9 h-9 bg-bg-surface border border-border-main rounded-full flex items-center justify-center cursor-pointer hover:border-primary transition-all duration-300 text-text-primary hover:text-primary">
              <User className="w-4 h-4" />
            </div>
            <Menu className="w-6 h-6 md:hidden cursor-pointer text-primary" />
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="bg-bg-base border-b border-border-main px-4 md:px-8 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto flex items-center gap-8 h-10 text-[11px] font-black text-text-secondary tracking-widest whitespace-nowrap">
          <div className="text-primary border-b border-primary h-full flex items-center cursor-pointer">HOME</div>
          <div className="hover:text-primary transition-all cursor-pointer">NEWS</div>
          <div className="hover:text-primary transition-all cursor-pointer">FORUM</div>
          <div className="hover:text-primary transition-all cursor-pointer">BLOG</div>
          <div className="hover:text-primary transition-all cursor-pointer">LEARNING CENTER</div>
          <div className="hover:text-primary transition-all cursor-pointer flex items-center gap-1">
            CONTACT US <ChevronDown className="w-3 h-3" />
          </div>
          <div className="ml-auto opacity-30 text-[9px]">PREMIUM MARKETPLACE</div>
        </div>
      </div>
    </nav>
  );
}
