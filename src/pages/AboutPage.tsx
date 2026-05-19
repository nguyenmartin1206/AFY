import { motion } from 'motion/react';
import { Target, Users, Shield, Globe, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em] block mb-4">OUR STORY</span>
          <h1 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter leading-tight">
            ACCELERATING THE <span className="text-primary italic">AI REVOLUTION</span> FOR EVERYONE.
          </h1>
          <p className="text-lg text-text-secondary mt-8 font-medium leading-relaxed">
            Founded in 2024, AI FOR YOU was born from a simple vision: to make the most advanced artificial intelligence technologies accessible to every individual and enterprise on the planet.
          </p>
        </motion.div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'ACTIVE USERS', value: '50M+' },
          { label: 'NEURAL MODULES', value: '450+' },
          { label: 'GLOBAL OFFICES', value: '12' },
          { label: 'ACCURACY RATE', value: '99.9%' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-bg-surface border border-border-main rounded-3xl text-center"
          >
            <p className="text-3xl font-black text-primary mb-2">{stat.value}</p>
            <p className="text-[9px] font-bold text-text-secondary uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Core Values */}
      <section className="space-y-16">
        <div className="flex items-center gap-8">
          <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em] flex-shrink-0">CORE VALUES</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-border-main to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-6 h-6 text-primary" />,
              title: "ETHICAL BY DESIGN",
              desc: "Safety and transparency are built into every layer of our neural networks, ensuring bias-free interactions."
            },
            {
              icon: <Target className="w-6 h-6 text-accent" />,
              title: "PRECISION TOOLS",
              desc: "We focus on real-world utility, delivering AI modules that solve specific challenges with surgical accuracy."
            },
            {
              icon: <Globe className="w-6 h-6 text-primary" />,
              title: "GLOBAL ACCESS",
              desc: "Democratizing AI means ensuring it works for everyone, regardless of location or technical background."
            }
          ].map((value, idx) => (
            <div key={idx} className="group p-8 bg-bg-surface border border-border-main rounded-3xl hover:border-primary transition-all">
              <div className="w-12 h-12 bg-bg-base rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-lg font-black text-text-primary uppercase tracking-tight mb-4">{value.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed font-medium">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative overflow-hidden rounded-[3rem] bg-zinc-900 p-12 md:p-24 border border-border-main">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-50" />
        <div className="relative z-10 max-w-2xl">
          <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em] block mb-6">OUR MISSION</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
            Empowering human creativity <br/> with AI-driven <span className="italic underline decoration-primary">intelligence</span>.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-medium">
            We believe that the next era of human civilization will be defined by the synergy between human intuition and artificial intelligence. Our goal is to provide the bridge between those two worlds.
          </p>
        </div>
      </section>

      {/* Team/Credits */}
      <section className="space-y-16">
        <div className="flex items-center gap-8">
          <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em] flex-shrink-0">WHO WE ARE</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-border-main to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <p className="text-xl text-text-secondary font-medium italic">
            "At AI FOR YOU, we don't just build systems; we build companions for your productivity and windows into your potential."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-primary bg-bg-surface flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-text-primary uppercase tracking-tight">The AI FOR YOU Founders</p>
              <p className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-bold">Neural Architects & Ethicists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
