import { OFFERS } from '../constants';
import { Star, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function FeaturedOffers() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em]">Propel Your Game</h2>
        <button className="text-primary hover:text-accent text-[10px] font-black uppercase tracking-widest transition-all">View All Offers</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {OFFERS.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-bg-surface border border-border-main rounded-2xl overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-500 group"
          >
            {/* Image Section - 16:9 */}
            <div className="aspect-video bg-bg-base overflow-hidden relative">
              <img
                src={`https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&aspect=16:9`}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute top-3 left-3">
                <span className={`text-[9px] font-black uppercase py-1 px-2.5 rounded bg-primary text-black tracking-widest`}>
                  {offer.type}
                </span>
              </div>
              {offer.deliveryTime === 'Instant' && (
                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_var(--accent)]" title="In Stock" />
                </div>
              )}
            </div>

            <div className="p-6 flex-grow">
              <h3 className="font-bold text-text-primary mb-4 hover:text-primary cursor-pointer line-clamp-2 min-h-[2.8rem] leading-tight text-lg transition-colors">
                {offer.title}
              </h3>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-accent font-black text-xs">
                    <Star className="w-3 h-3 fill-accent mr-1" />
                    {offer.seller.rating}
                  </span>
                  <span className="text-[10px] text-text-secondary font-medium">{offer.seller.reviews} sales</span>
                </div>
                <div className="text-[10px] text-primary font-black uppercase tracking-tighter flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-bg-base border border-border-main">
                <img
                  src={`https://api.dicebear.com/7.x/miniavatar/svg?seed=${offer.seller.name}`}
                  alt={offer.seller.name}
                  className="w-8 h-8 rounded-full bg-bg-surface border border-border-main"
                />
                <div className="min-w-0">
                  <div className="text-xs font-black text-text-primary truncate">
                    {offer.seller.name}
                  </div>
                  <div className="text-[9px] text-text-secondary uppercase tracking-widest font-black">Top Seller</div>
                </div>
              </div>
            </div>

            <div className="px-6 py-5 bg-transparent border-t border-border-main flex items-center justify-between mt-auto">
              <div>
                <span className="text-[10px] text-text-secondary font-black block uppercase tracking-widest mb-1">Pricing</span>
                <span className="text-xl font-black text-accent italic drop-shadow-[0_0_10px_rgba(191,255,0,0.3)]">${offer.price.toFixed(2)}</span>
              </div>
              <button className="btn-lime py-2.5 px-6 !text-[11px]">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
