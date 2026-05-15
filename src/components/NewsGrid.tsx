import { NEWS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewsGrid() {
  const latestNews = NEWS.slice(0, 3);

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em]">LATEST NEURAL NEWS</h2>
        <Link 
          to="/news"
          className="text-primary hover:text-accent text-[10px] font-black uppercase tracking-widest transition-all"
        >
          View All News
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestNews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-bg-surface border border-border-main rounded-2xl overflow-hidden hover:border-primary transition-all duration-500 shadow-xl flex flex-col"
          >
            <div className="h-40 overflow-hidden relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[8px] font-black uppercase py-1 px-2 rounded bg-primary text-black tracking-widest">
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-[10px] text-text-secondary font-bold uppercase tracking-wider mb-3">
                <Calendar className="w-3 h-3 text-primary" />
                {item.date}
              </div>
              
              <h3 className="font-black text-sm text-text-primary group-hover:text-primary transition-all duration-300 mb-3 leading-tight uppercase">
                {item.title}
              </h3>
              
              <p className="text-xs text-text-secondary italic line-clamp-2 mb-6">
                "{item.excerpt}"
              </p>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <Link 
                  to="/news"
                  className="inline-flex items-center gap-2 text-[10px] font-black text-primary hover:text-accent uppercase tracking-widest transition-all group/btn"
                >
                  FULL PROTOCOL <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
