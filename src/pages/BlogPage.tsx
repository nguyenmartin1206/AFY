import { motion } from 'motion/react';
import { Eye, Clock, Calendar, User, ChevronRight, Search, Hash } from 'lucide-react';

import avatar1 from '../assets/images/regenerated_image_1778494205018.png';
import avatar2 from '../assets/images/regenerated_image_1778494568804.png';
import avatar3 from '../assets/images/regenerated_image_1778494571715.png';
import avatar4 from '../assets/images/regenerated_image_1778494574930.png';
import blog3Main from '../assets/images/regenerated_image_1778494403841.png';
import blog4Main from '../assets/images/regenerated_image_1778494403841.png';
import sidebar3Img from '../assets/images/regenerated_image_1778494220122.png';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Mastering Prompt Engineering for Enterprise Workflows",
    excerpt: "Learn how to structure complex prompts to achieve consistent, high-quality outputs from large language models in a production environment.",
    author: "Alex Rivera",
    authorAvatar: avatar1,
    date: "May 10, 2026",
    category: "Tutorial",
    views: "12,405",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "The Rise of Autonomous Agents in Cybersecurity",
    excerpt: "Exploring how self-healing systems and autonomous agents are becoming the first line of defense against sophisticated cyber threats.",
    author: "Sarah Chen",
    authorAvatar: avatar2,
    date: "May 08, 2026",
    category: "Security",
    views: "8,920",
    readTime: "12 min",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "GPU Allocation Strategies for Small AI Startups",
    excerpt: "Practical advice on managing compute resources when scaling your first AI-driven application without breaking the bank.",
    author: "Marcus Thorne",
    authorAvatar: avatar3,
    date: "May 05, 2026",
    category: "Ops",
    views: "5,667",
    readTime: "10 min",
    imageUrl: blog3Main
  },
  {
    id: 4,
    title: "Designing Intuitive UIs for Generative AI Features",
    excerpt: "Best practices for integrating chat interfaces and generative elements into existing web applications while maintaining usability.",
    author: "Elena Fisher",
    authorAvatar: avatar4,
    date: "May 02, 2026",
    category: "Design",
    views: "15,201",
    readTime: "6 min",
    imageUrl: blog4Main
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Blog Header */}
        <header className="mb-16 border-b border-border-main pb-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[11px] font-black uppercase tracking-[0.4em] mb-4"
          >
            Intelligence Hub
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter mb-6 leading-none"
          >
            AFY <span className="text-primary italic">BLOG</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl leading-relaxed"
          >
            Deep dives into artificial intelligence, neural architectures, and the future of human-machine collaboration.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
          {/* Blog Feed */}
          <div className="space-y-16">
            {BLOG_POSTS.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 bg-bg-surface border border-border-main rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl">
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-primary text-[10px] font-black uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col">
                    <div className="flex items-center gap-4 text-[10px] font-black text-text-secondary uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1.5 text-primary"><Eye className="w-3.5 h-3.5" /> {post.views} VIEWS</span>
                    </div>
                    
                    <h2 className="text-2xl font-black text-text-primary group-hover:text-primary transition-colors tracking-tight mb-4 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-border-main">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-bg-base border border-border-main flex items-center justify-center overflow-hidden">
                          <img 
                            src={post.authorAvatar} 
                            alt={post.author} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-xs font-bold text-text-primary">{post.author}</span>
                      </div>
                      
                      <button className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] transition-all hover:gap-3">
                        Read Story <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Astra-inspired Sidebar */}
          <aside className="space-y-12">
            {/* Search Widget */}
            <div className="p-8 rounded-3xl bg-bg-surface border border-border-main shadow-sm">
              <h3 className="text-[11px] font-black text-text-primary uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Search className="w-4 h-4 text-primary" /> Search Blog
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type to search..." 
                  className="w-full bg-bg-base border border-border-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary transition-all text-text-primary pl-10"
                />
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-text-secondary" />
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-black text-text-primary uppercase tracking-[0.3em] pl-2 border-l-2 border-primary">Popular Now</h3>
              <div className="space-y-6">
                {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                  <div key={post.id} className="group cursor-pointer flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-bg-base border border-border-main">
                      <img 
                        src={idx === 0 ? blog3Main : idx === 1 ? blog4Main : sidebar3Img} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                        referrerPolicy="no-referrer"
                        alt={post.title}
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-[9px] font-black text-text-secondary uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.views}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="p-8 rounded-3xl bg-bg-surface border border-border-main shadow-sm">
              <h3 className="text-[11px] font-black text-text-primary uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Hash className="w-4 h-4 text-primary" /> Categories
              </h3>
              <ul className="space-y-3">
                {['Tutorials', 'Neural Science', 'Ethical AI', 'Development', 'Case Studies'].map(cat => (
                  <li key={cat} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-xs font-bold text-text-secondary group-hover:text-primary transition-all group-hover:pl-1">{cat}</span>
                    <span className="text-[10px] font-black text-text-secondary opacity-50">12</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Ad */}
            <div className="relative rounded-3xl overflow-hidden p-8 bg-primary">
              <div className="relative z-10">
                <h4 className="text-xl font-black text-black mb-4 tracking-tighter leading-tight">Join the Neural Revolution</h4>
                <p className="text-black/70 text-xs font-bold mb-6 italic">Get the latest insights delivered weekly.</p>
                <button className="w-full py-3 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                  Join Newsletter
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -ml-16 -mb-16 blur-2xl" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
