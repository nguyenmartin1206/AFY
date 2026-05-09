/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';
import { GAMES } from './constants';
import { ChevronRight, ShieldCheck, Zap, User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-base">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 pt-32 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block space-y-12">
            <div className="bg-bg-surface border border-border-main rounded-2xl p-6 shadow-2xl">
              <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.25em] mb-6 font-display">OUR PRODUCTS</h4>
              <ul className="space-y-3">
                {['Personalized AI', 'Enterprise AI'].map((item, index) => (
                  <li key={item} className="group">
                    <a href="#" className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 ${index === 0 ? 'bg-primary/5 text-primary' : 'hover:bg-primary/5 text-text-secondary hover:text-primary'} text-sm font-bold`}>
                      {item}
                      {index === 0 && <span className="bg-accent text-black text-[9px] px-2 py-0.5 rounded-full font-black shadow-[0_0_8px_var(--accent-glow)]">HOT</span>}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 flex items-center justify-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-all duration-300 py-3 border-t border-border-main uppercase tracking-widest">
                All Universes <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <h4 className="text-[11px] font-black text-text-primary uppercase tracking-widest mb-4 font-display">Elite Escrow</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed mb-4">
                Our AI-driven trade protection ensures every transaction is finalized with 100% security.
              </p>
              <div className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-tighter cursor-pointer hover:translate-x-1 transition-transform">
                Learn Security <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="space-y-16 min-w-0">
            <Hero />
            
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em]">Master Collection</h2>
                <div className="h-[1px] flex-grow mx-8 bg-gradient-to-r from-border-main to-transparent" />
              </div>
              <GameGrid />
            </section>
            
            {/* Support Info */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-border-main">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-bg-surface border border-border-main rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,196,204,0.1)] transition-all">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-text-primary uppercase tracking-widest">Ironclad Safety</h3>
                  <p className="text-xs text-text-secondary mt-1">Multi-layered escrow protection</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-bg-surface border border-border-main rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(191,255,0,0.1)] transition-all">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-text-primary uppercase tracking-widest">Flash Delivery</h3>
                  <p className="text-xs text-text-secondary mt-1">Instant digital distribution</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-bg-surface border border-border-main rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,196,204,0.1)] transition-all">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-text-primary uppercase tracking-widest">Global Ops</h3>
                  <p className="text-xs text-text-secondary mt-1">24/7 Premium technical support</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

