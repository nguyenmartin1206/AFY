import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { Star, ChevronLeft, Zap, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const personalizedProducts = PRODUCTS.filter(p => p.category === 'Personalized AI');
  const enterpriseProducts = PRODUCTS.filter(p => p.category === 'Enterprise AI');

  const renderProductGrid = (products: typeof PRODUCTS) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-bg-surface border border-border-main rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 shadow-2xl flex flex-col"
        >
          <div className="h-48 bg-bg-base overflow-hidden relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent opacity-60" />
            <div className="absolute top-4 left-4">
              <span className="text-[9px] font-black uppercase py-1.5 px-3 rounded bg-black/60 backdrop-blur-md text-primary tracking-widest border border-primary/20">
                {product.category}
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-black text-lg text-text-primary group-hover:text-primary transition-all duration-300 mb-3 uppercase tracking-tight leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-6 line-clamp-2 italic">
              Advanced neural integration for {product.name.toLowerCase()} automation and optimization.
            </p>
            <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex gap-1">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] group-hover:text-accent transition-colors underline decoration-primary/30 decoration-2 underline-offset-4">
                Deploy Now
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <div className="text-center space-y-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent uppercase tracking-widest transition-all mb-4 group"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Nexus
        </Link>
        <h1 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter uppercase italic">
          Neural <span className="text-primary not-italic">Marketplace</span>
        </h1>
        <p className="text-text-secondary max-w-3xl mx-auto text-sm font-medium leading-relaxed uppercase tracking-widest">
          The ultimate catalog of high-performance AI modules for individuals and corporations.
        </p>
      </div>

      {/* Personalized AI Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border-main pb-6">
          <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight italic">Personalized AI</h2>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-[0.3em]">Individual Neural Optimization</p>
          </div>
          <Link to="/personalized-ai" className="ml-auto flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-all group">
            FULL PROTOCOL <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        {renderProductGrid(personalizedProducts)}
      </section>

      {/* Enterprise AI Section */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border-main pb-6">
          <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20">
            <Cpu className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-text-primary uppercase tracking-tight italic">Enterprise AI</h2>
            <p className="text-[10px] text-text-secondary font-bold uppercase tracking-[0.3em]">Industrial-Scale Integration</p>
          </div>
          <Link to="/enterprise-ai" className="ml-auto flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent transition-all group">
            CORPORATE CATALOG <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        {renderProductGrid(enterpriseProducts)}
      </section>
    </div>
  );
}
