import { motion } from 'motion/react';
import { Star, PlayCircle, Users, Clock, Globe, Award, Search, ChevronRight } from 'lucide-react';

const COURSES = [
  {
    id: 1,
    title: "Complete Python Boot Camp: Go from Zero to Pro in AI",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    reviews: "125,430",
    price: "$84.99",
    originalPrice: "$129.99",
    tag: "Best Seller",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    hours: "22 total hours",
    lectures: "155 lectures"
  },
  {
    id: 2,
    title: "Deep Learning Specialization: Neural Networks & ML",
    instructor: "Andrew Ng",
    rating: 4.9,
    reviews: "45,210",
    price: "$54.99",
    originalPrice: "$99.99",
    tag: "Highest Rated",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    hours: "34 total hours",
    lectures: "210 lectures"
  },
  {
    id: 3,
    title: "Prompt Engineering for Everyone: ChatGPT to Midjourney",
    instructor: "Harrison Chase",
    rating: 4.7,
    reviews: "12,890",
    price: "$19.99",
    originalPrice: "$49.99",
    tag: "New",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    hours: "5 total hours",
    lectures: "42 lectures"
  },
  {
    id: 4,
    title: "AI Business Strategy: Implement AI in Your Enterprise",
    instructor: "James Wilson",
    rating: 4.6,
    reviews: "8,450",
    price: "$94.99",
    originalPrice: "$149.99",
    tag: "",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    hours: "12 total hours",
    lectures: "88 lectures"
  }
];

const CATEGORIES = [
  "Development", "Business", "Finance & IT", "Office Productivity", "Personal Development", "Design", "Marketing", "Music"
];

export default function LearningCenterPage() {
  return (
    <div className="pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Udemy-style Hero Banner */}
        <section className="relative bg-bg-surface border border-border-main rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover opacity-60"
              alt="Learning banner"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bg-surface" />
          </div>
          
          <div className="relative z-10 p-12 lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full w-fit uppercase tracking-widest mb-6"
            >
              Exclusive Learning
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter mb-6 leading-[0.9]"
            >
              SKILLS THAT <br />
              <span className="text-primary italic">MOVE YOU FORWARD.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg mb-8 max-w-md leading-relaxed"
            >
              Technology is changing. Keep pace with our expert-led courses on AI, data science, and business automation.
            </motion.p>
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="What do you want to learn?" 
                className="w-full bg-bg-base border border-border-main rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-all text-text-primary pr-12"
              />
              <button className="absolute right-2 top-2 h-10 w-10 bg-primary text-black rounded-lg flex items-center justify-center hover:bg-accent transition-colors shadow-lg shadow-primary/20">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Featured Courses Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-text-primary tracking-tight">Expand Your Neural Horizons</h2>
              <p className="text-sm text-text-secondary mt-1">Courses curated by industry leading AI practitioners.</p>
            </div>
            <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course, index) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-bg-surface border border-border-main">
                  <img 
                    src={course.imageUrl} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                    alt={course.title}
                  />
                  {course.tag && (
                    <div className="absolute top-3 left-3 bg-accent text-black text-[9px] font-black px-2 py-1 rounded shadow-lg">
                      {course.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <PlayCircle className="w-12 h-12 text-white drop-shadow-2xl" />
                  </div>
                </div>
                
                <h3 className="font-black text-text-primary text-sm leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-[11px] text-text-secondary font-bold mb-2">{course.instructor}</p>
                
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-xs font-black text-primary">{course.rating}</span>
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 fill-current ${i >= Math.floor(course.rating) ? 'opacity-30' : ''}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-text-secondary">({course.reviews})</span>
                </div>
                
                <div className="flex items-end gap-3">
                  <span className="text-lg font-black text-text-primary">{course.price}</span>
                  <span className="text-xs text-text-secondary line-through mb-1">{course.originalPrice}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Categories Bar */}
        <section className="mb-20 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex items-center gap-4">
            {CATEGORIES.map(cat => (
              <button key={cat} className="px-6 py-3 rounded-xl bg-bg-surface border border-border-main text-xs font-black text-text-secondary hover:border-primary hover:text-primary whitespace-nowrap transition-all uppercase tracking-widest">
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Why Learn With Us */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 p-12 rounded-3xl bg-bg-surface border border-border-main">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-sm font-black text-text-primary uppercase tracking-widest mb-2">Expert Community</h4>
            <p className="text-xs text-text-secondary leading-relaxed">Join 100k+ students learning the next generation of digital infrastructure.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-sm font-black text-text-primary uppercase tracking-widest mb-2">NFY Certification</h4>
            <p className="text-xs text-text-secondary leading-relaxed">Earn verified certificates recognized by global neural enterprises.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-sm font-black text-text-primary uppercase tracking-widest mb-2">Global Access</h4>
            <p className="text-xs text-text-secondary leading-relaxed">Learn in your language, at your own pace, on any neural-linked device.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
