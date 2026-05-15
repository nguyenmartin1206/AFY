import { PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PRODUCTS.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="bg-bg-surface border border-border-main rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 shadow-2xl flex flex-col"
        >
          <div className="h-44 bg-bg-base overflow-hidden relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent opacity-60" />
            <div className="absolute top-3 left-3">
              <span className="text-[8px] font-black uppercase py-1 px-2.5 rounded bg-black/60 backdrop-blur-md text-primary tracking-widest border border-primary/20">
                {product.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-sm text-text-primary group-hover:text-primary transition-all duration-300 mb-2 uppercase tracking-tight line-clamp-2">
              {product.name}
            </h3>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex gap-0.5">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_5px_var(--accent)]" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
