import { motion } from 'motion/react';
import { Newspaper, Calendar, User, ArrowRight, Share2, MessageSquare } from 'lucide-react';

import avatar2 from '../assets/images/regenerated_image_1778494571715.png';
import avatar3 from '../assets/images/regenerated_image_1778494574930.png';
import avatar4 from '../assets/images/regenerated_image_1778494205018.png';
import sidebarAd from '../assets/images/regenerated_image_1778494220122.png';

const NEWS_ARTICLES = [
  {
    id: 1,
    title: "AI Regulation: Global Leaders Meet to Discuss Ethical Implementation",
    excerpt: "The latest summit in Geneva focuses on creating a unified framework for AI safety and data privacy across borders.",
    category: "Regulation",
    author: "Elena Fisher",
    authorAvatar: avatar4,
    date: "May 10, 2026",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600&h=900",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "New Neural Engine Breakthrough: 10x Efficiency in Data Processing",
    excerpt: "Neural scientists announce a new architecture that significantly reduces energy consumption while doubling computational power.",
    category: "Tech Innovation",
    author: "Marcus Thorne",
    authorAvatar: avatar3,
    date: "May 08, 2026",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600&h=900",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "How AI is Reshaping the Modern Workplace in 2026",
    excerpt: "A comprehensive look at how generative agents are becoming the standard assistant for creative and technical professionals.",
    category: "Workplace",
    author: "Dr. Sarah Chen",
    authorAvatar: avatar2,
    date: "May 05, 2026",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600&h=900",
    readTime: "12 min read"
  }
];

export default function NewsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <section className="mb-16 text-center lg:text-left lg:flex lg:items-end lg:justify-between border-b border-border-main pb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Newspaper className="w-3 h-3" /> The Latest in Intelligence
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6 leading-[0.9]"
            >
              AI <span className="text-primary italic">NEWS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed max-w-xl"
            >
              Stay ahead of the curve with our curated reports on AI innovation, ethics, and industry transformations.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex flex-col items-end gap-2"
          >
            <div className="text-[10px] font-black text-text-secondary uppercase tracking-[0.3em]">Last Updated</div>
            <div className="text-xl font-black text-text-primary">MAY 11, 2026</div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16">
          {/* Main Feed */}
          <div className="space-y-16">
            {NEWS_ARTICLES.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-8 bg-bg-surface border border-border-main">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-primary text-[10px] font-black uppercase tracking-widest">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="max-w-3xl">
                  <div className="flex items-center gap-6 text-[10px] font-black text-text-secondary uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full overflow-hidden border border-white/10">
                        <img src={article.authorAvatar} alt={article.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      {article.author}
                    </span>
                    <span className="text-primary">{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-black text-text-primary group-hover:text-primary transition-colors tracking-tight mb-4 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] transition-all hover:gap-3">
                      Read Full Report <ArrowRight className="w-3 h-3" />
                    </button>
                    
                    <div className="flex items-center gap-4 text-text-secondary">
                      <Share2 className="w-4 h-4 hover:text-primary transition-colors" />
                      <MessageSquare className="w-4 h-4 hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="p-8 rounded-3xl bg-bg-surface border border-border-main shadow-sm">
              <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-8">Newsletter Sub</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-6">
                Receive weekly intelligence reports directly in your neural inbox. No fluff, just breakthrough analysis.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-bg-base border border-border-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all text-text-primary"
                />
                <button className="w-full btn-lime py-3">SUBSCRIBE NOW</button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[11px] font-black text-text-primary uppercase tracking-[0.3em]">Trending Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'GPU Shortage', 'Quantum', 'Open Source', 'Safety', 'Robotics'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-bg-surface border border-border-main text-[10px] font-bold text-text-secondary hover:border-primary hover:text-primary cursor-pointer transition-all">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group bg-bg-surface border border-border-main">
              <img 
                src={sidebarAd}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="text-white">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Internal Report</div>
                  <h4 className="text-2xl font-black mb-4 leading-tight">State of AI Compute 2026</h4>
                  <p className="text-xs text-text-secondary mb-6">The definitive guide to GPU allocation in the enterprise sector.</p>
                  <button className="w-full py-2.5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
