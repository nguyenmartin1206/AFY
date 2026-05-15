import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

import avatar2 from '../assets/images/regenerated_image_1778494571715.png';
import avatar3 from '../assets/images/regenerated_image_1778494574930.png';
import avatar4 from '../assets/images/regenerated_image_1778494205018.png';

const TESTIMONIALS = [
  {
    id: 1,
    content: "The Enterprise Neural Engine transformed our data processing speed. We've seen a 40% increase in efficiency within the first quarter.",
    author: "Robert Vance",
    role: "CTO at Nexus Data",
    avatar: avatar3,
    rating: 5
  },
  {
    id: 2,
    content: "Personalized AI Assistant has become an integral part of my daily workflow. It's like having a second brain that never sleeps.",
    author: "Elena Fisher",
    role: "Product Designer",
    avatar: avatar4,
    rating: 5
  },
  {
    id: 3,
    content: "The research and case studies provided by AI FOR YOU helped us navigate the ethical complexities of our new AI implementation.",
    author: "Marcus Thorne",
    role: "Ethical Compliance Officer",
    avatar: avatar2,
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 border-t border-border-main">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em] mb-4">What Our Clients Say</h2>
        <p className="text-text-secondary text-sm max-w-xl">Trusted by industry leaders and innovators worldwide to deliver cutting-edge AI solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-bg-surface border border-border-main relative group hover:border-primary/30 transition-all duration-500 h-full flex flex-col"
          >
            <Quote className="absolute top-6 right-8 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
            
            <div className="flex gap-0.5 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-text-primary text-sm leading-relaxed mb-8 italic">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-bg-base border border-border-main overflow-hidden shadow-lg">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary">{testimonial.author}</div>
                <div className="text-[10px] text-text-secondary uppercase tracking-widest font-black">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
