import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { Star, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PersonalizedAIPage() {
  const personalizedProducts = PRODUCTS.filter(p => p.category === 'Personalized AI');

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent uppercase tracking-widest transition-all mb-4 group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Nexus
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter uppercase italic">
            Personalized <span className="text-primary not-italic">AI</span>
          </h1>
          <p className="text-text-secondary mt-4 max-w-2xl text-sm font-medium leading-relaxed">
            Tailored neural solutions designed for individual performance and specialized automation. 
            Experience AI that adapts to your specific workflow requirements.
          </p>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 backdrop-blur-sm self-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <span className="text-primary font-black text-xl">{personalizedProducts.length}</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Active Units</p>
              <p className="text-xs font-bold text-text-primary uppercase italic">Neural Protocols</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalizedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

      {personalizedProducts.length === 0 && (
        <div className="text-center py-24 bg-bg-surface rounded-3xl border border-dashed border-border-main">
          <p className="text-text-secondary uppercase tracking-[0.3em] font-black text-sm">No neural modules found</p>
        </div>
      )}
    </div>
  );
}
