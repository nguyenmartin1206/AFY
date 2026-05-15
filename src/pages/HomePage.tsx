import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import NewsGrid from '../components/NewsGrid';
import StudyGrid from '../components/StudyGrid';
import Testimonials from '../components/Testimonials';
import { ChevronRight, Microscope, ShieldCheck, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
      {/* Sidebar */}
      <aside className="hidden lg:block space-y-12">
        <div className="bg-bg-surface border border-border-main rounded-2xl p-6 shadow-2xl">
          <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.25em] mb-6 font-display">OUR PRODUCTS</h4>
          <ul className="space-y-3">
            <li className="group">
              <Link 
                to="/personalized-ai" 
                className="flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 bg-primary/5 text-primary text-sm font-bold border border-primary/10 hover:border-primary/30"
              >
                Personalized AI
                <span className="bg-accent text-black text-[9px] px-2 py-0.5 rounded-full font-black shadow-[0_0_8px_var(--accent-glow)]">HOT</span>
              </Link>
            </li>
            <li className="group">
              <Link 
                to="/enterprise-ai" 
                className="flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 hover:bg-primary/5 text-text-secondary hover:text-primary text-sm font-bold"
              >
                Enterprise AI
              </Link>
            </li>
          </ul>
          <Link 
            to="/products"
            className="w-full mt-8 flex items-center justify-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-all duration-300 py-3 border-t border-border-main uppercase tracking-widest"
          >
            Explore All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
          <h4 className="text-[11px] font-black text-text-primary uppercase tracking-widest mb-4 font-display">Neural Protection</h4>
          <p className="text-[11px] text-text-secondary leading-relaxed mb-4">
            Our AI-driven enterprise security ensures every deployment is finalized with 100% data integrity.
          </p>
          <div className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-tighter cursor-pointer hover:translate-x-1 transition-transform">
            Read Whitepapers <Microscope className="w-3 h-3" />
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <div className="space-y-16 min-w-0">
        <Hero />
        
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em]">OUR PRODUCTS</h2>
            <div className="h-[1px] flex-grow mx-8 bg-gradient-to-r from-border-main to-transparent" />
            <Link 
              to="/products"
              className="text-primary hover:text-accent text-[10px] font-black uppercase tracking-widest transition-all flex-shrink-0"
            >
              View All Products
            </Link>
          </div>
          <ProductGrid />
        </section>
        
        <section>
          <NewsGrid />
        </section>

        <section>
          <StudyGrid />
        </section>

        <Testimonials />
        
        {/* Support Info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-border-main">
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 bg-bg-surface border border-border-main rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,196,204,0.1)] transition-all">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-black text-text-primary uppercase tracking-widest">Ethical AI</h3>
              <p className="text-xs text-text-secondary mt-1">Responsible and unbiased models</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 bg-bg-surface border border-border-main rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(191,255,0,0.1)] transition-all">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-black text-text-primary uppercase tracking-widest">Neural Speed</h3>
              <p className="text-xs text-text-secondary mt-1">Ultra-low latency deployments</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-16 h-16 bg-bg-surface border border-border-main rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,196,204,0.1)] transition-all">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-black text-text-primary uppercase tracking-widest">Custom Compute</h3>
              <p className="text-xs text-text-secondary mt-1">Dedicated GPU infrastructure</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
