import { motion } from 'motion/react';
import { 
  ArrowBigUp, 
  ArrowBigDown, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Search, 
  Plus,
  MoreHorizontal,
  Flame,
  Award
} from 'lucide-react';

import forumAvatar1 from '../assets/images/regenerated_image_1778494568804.png';
import forumAvatar2 from '../assets/images/regenerated_image_1778494571715.png';
import forumAvatar3 from '../assets/images/regenerated_image_1778494574930.png';
import avatar1 from '../assets/images/regenerated_image_1778494205018.png';
import avatar2 from '../assets/images/regenerated_image_1778494568804.png';
import avatar3 from '../assets/images/regenerated_image_1778494571715.png';
import avatar4 from '../assets/images/regenerated_image_1778494574930.png';

const FORUM_POSTS = [
  {
    id: 1,
    title: "Best practices for scaling enterprise-grade AI infrastructure in 2026?",
    author: "Neural_Architect",
    authorAvatar: forumAvatar1,
    category: "Technical",
    time: "2h ago",
    upvotes: 1240,
    comments: 42,
    content: "We're currently looking at migrating our local GPU cluster to a hybrid cloud model. Curious how others are handling data latency between nodes..."
  },
  {
    id: 2,
    title: "Review: AutoDS Walmart Automation - Real-world results after 6 months",
    author: "Ecommerce_King",
    authorAvatar: forumAvatar2,
    category: "Review",
    time: "5h ago",
    upvotes: 856,
    comments: 128,
    content: "After testing several tools, the AutoDS integration for Walmart has shown the highest reliability. Here's a breakdown of the margin gains..."
  },
  {
    id: 3,
    title: "How to mitigate bias in multi-modal LLMs? [Open Discussion]",
    author: "EthicsFirst",
    authorAvatar: forumAvatar3,
    category: "Hỏi đáp",
    time: "8h ago",
    upvotes: 620,
    comments: 31,
    content: "Is anyone working on real-time bias detection layers? I've been experimenting with some pre-processing filters but they seem to degrade performance."
  }
];

const CONTRIBUTORS = [
  { name: "Dr. Neural", mana: 4520, rank: 1, avatar: avatar1 },
  { name: "Satoshi_AI", mana: 3840, rank: 2, avatar: avatar2 },
  { name: "Cyber_Sage", mana: 2910, rank: 3, avatar: avatar3 },
  { name: "Elena_Dev", mana: 2450, rank: 4, avatar: avatar4 },
  { name: "Tech_Titan", mana: 1980, rank: 5, avatar: forumAvatar1 }
];

export default function ForumPage() {
  return (
    <div className="pt-24 pb-20 bg-bg-base min-h-screen text-text-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-border-main pb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter mb-2">AFY <span className="text-primary italic">FORUM</span></h1>
            <p className="text-text-secondary text-sm">Collective intelligence for the AI generation.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search discussions..." 
                className="bg-bg-surface border border-border-main rounded-xl px-4 py-2.5 text-xs w-64 focus:outline-none focus:border-primary/50 transition-all pl-10 text-text-primary"
              />
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-text-secondary group-focus-within:text-primary transition-colors" />
            </div>
            <button className="btn-teal flex items-center gap-2 py-2.5 px-6">
              <Plus className="w-4 h-4" /> CREATE POST
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Forum Feed */}
          <section className="space-y-6">
            {/* Feed Filters */}
            <div className="flex items-center gap-6 mb-8 text-[11px] font-black uppercase tracking-widest text-text-secondary">
              <button className="flex items-center gap-2 text-primary border-b-2 border-primary pb-2"><Flame className="w-4 h-4" /> HOT</button>
              <button className="flex items-center gap-2 hover:text-text-primary transition-colors pb-2"><TrendingUp className="w-4 h-4" /> TOP</button>
              <button className="flex items-center gap-2 hover:text-text-primary transition-colors pb-2"><Users className="w-4 h-4" /> COMMUNITES</button>
            </div>

            {FORUM_POSTS.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-surface border border-border-main rounded-2xl overflow-hidden flex group hover:border-primary/30 transition-all duration-300"
              >
                {/* Voting Left Bar */}
                <div className="w-12 bg-black/20 flex flex-col items-center py-4 gap-1">
                  <button className="text-text-secondary hover:text-[#00C4CC] transition-colors">
                    <ArrowBigUp className="w-6 h-6" />
                  </button>
                  <span className="text-xs font-black text-text-primary">
                    {post.upvotes > 1000 ? `${(post.upvotes/1000).toFixed(1)}k` : post.upvotes}
                  </span>
                  <button className="text-text-secondary hover:text-red-500 transition-colors">
                    <ArrowBigDown className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-grow p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-border-main">
                        <img 
                          src={post.authorAvatar} 
                          alt={post.author} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-text-primary">u/{post.author}</span>
                      <span className="text-[10px] text-text-secondary">• {post.time}</span>
                      <span className="px-2 py-0.5 rounded border border-[#BFFF00]/30 text-[#BFFF00] text-[9px] font-black uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                    <button className="text-text-secondary hover:text-text-primary">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  <h2 className="text-xl font-black text-text-primary mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed">
                    {post.content}
                  </p>

                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-[10px] font-black text-text-secondary hover:text-primary uppercase tracking-widest transition-colors">
                      <MessageSquare className="w-4 h-4" /> {post.comments} Comments
                    </button>
                    <button className="flex items-center gap-2 text-[10px] font-black text-text-secondary hover:text-primary uppercase tracking-widest transition-colors">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button className="flex items-center gap-2 text-[10px] font-black text-[#00C4CC] bg-[#00C4CC]/5 px-3 py-1.5 rounded-lg border border-[#00C4CC]/20 hover:bg-[#00C4CC]/10 transition-all uppercase tracking-widest ml-auto">
                      <Sparkles className="w-3.5 h-3.5" /> AI Summarize
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Featured Thread - Nested Comments Example */}
            <div className="mt-16 p-8 rounded-3xl bg-bg-surface border border-border-main">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Featured Conversation</h3>
                <div className="flex items-center gap-2 text-[#00C4CC] text-[10px] font-black uppercase tracking-widest bg-[#00C4CC]/10 px-3 py-1 rounded-full border border-[#00C4CC]/20">
                  <Sparkles className="w-3 h-3" /> AI Summary: Users discuss multi-modal latency vs accuracy tradeoffs.
                </div>
              </div>

              {/* Threaded Comments Container */}
              <div className="space-y-6">
                {/* Level 1 */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-bg-base border border-border-main flex-shrink-0 overflow-hidden">
                    <img src={forumAvatar2} alt="Quantum_Dev" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-black text-text-primary">u/Quantum_Dev</span>
                      <span className="text-[10px] text-text-secondary">4h ago</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      I've found that quantization helps, but you lose significant precision in complex reasoning tasks.
                    </p>
                    
                    {/* Level 2 (Nested) */}
                    <div className="relative pl-6 mt-6">
                      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border-main" />
                      <div className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-bg-base border border-border-main flex-shrink-0 overflow-hidden">
                          <img src={avatar2} alt="Satoshi_AI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-black text-text-primary">u/Satoshi_AI</span>
                            <span className="text-[10px] text-text-secondary">3h ago</span>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed mb-4">
                            Exactly! For enterprise apps, I'd rather take the 100ms hit for stability.
                          </p>

                          {/* Level 3 (Nested) */}
                          <div className="relative pl-6 mt-6">
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border-main" />
                            <div className="flex gap-4">
                              <div className="w-6 h-6 rounded-full bg-bg-base border border-border-main flex-shrink-0 overflow-hidden">
                                <img src={avatar4} alt="Elena_Dev" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs font-black text-text-primary">u/Elena_Dev</span>
                                  <span className="text-[10px] text-text-secondary">1h ago</span>
                                </div>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                  There are some new techniques in sparse attention that handle this locally.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Forum Sidebar */}
          <aside className="space-y-8">
            {/* Community Stats */}
            <div className="p-8 rounded-3xl bg-bg-surface border border-border-main shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-6">Forum Intel</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-2xl font-black text-text-primary">42.8k</div>
                  <div className="text-[10px] text-text-secondary uppercase tracking-widest font-black">Members Active</div>
                </div>
                <div className="h-[1px] bg-border-main" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-black text-text-primary italic">Top 1%</div>
                    <div className="text-[9px] text-text-secondary uppercase tracking-widest font-black">Community Rank</div>
                  </div>
                  <Award className="w-8 h-8 text-accent opacity-50" />
                </div>
              </div>
            </div>

            {/* Top Mana Contributors Widget */}
            <div className="p-8 rounded-3xl bg-bg-surface border border-border-main shadow-sm">
              <h3 className="text-[11px] font-black text-text-primary uppercase tracking-[0.3em] mb-8 border-b border-border-main pb-4">Top Mana Contributors</h3>
              <div className="space-y-6">
                {CONTRIBUTORS.map((user, idx) => (
                  <div key={user.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-black ${idx === 0 ? 'text-accent' : 'text-text-secondary'} w-4`}>#{user.rank}</span>
                      <div className="w-8 h-8 rounded-full bg-bg-base border border-border-main flex items-center justify-center overflow-hidden">
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors">{user.name}</span>
                    </div>
                    <div className="text-[10px] font-black text-primary">
                      {user.mana} <span className="opacity-50">MANA</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="p-8 rounded-3xl bg-transparent border border-border-main">
              <h3 className="text-[11px] font-black text-text-secondary uppercase tracking-[0.3em] mb-4 text-center">Guidelines</h3>
              <ul className="space-y-3 text-[10px] text-text-secondary font-medium list-disc list-inside leading-relaxed">
                <li>Be respectful to fellow neuro-miners.</li>
                <li>Keep code samples concise.</li>
                <li>Verify AI findings before posting.</li>
                <li>No spam or self-promotion.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
