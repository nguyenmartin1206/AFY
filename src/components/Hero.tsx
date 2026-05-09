import { motion } from 'motion/react';
import { Search, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative h-[500px] flex items-center overflow-hidden rounded-3xl border border-border-main bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/dashboad.png')" }}
    >
      {/* Dark overlay to ensure text readability */}
      
      {/* Decorative highlights */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rotate-12 transform translate-x-1/2" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_var(--accent)]" />
            AI Services
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-[1.1] tracking-tighter font-display uppercase">
            TRANSFORMING <br />
            <span className="text-primary italic">LIFE WITH AI</span>
          </h1>
          <p className="text-text-secondary text-xl mb-12 leading-relaxed font-medium">
            Contact me to get your AI
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="btn-lime">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
