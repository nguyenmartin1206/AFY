import { STUDY_CASES } from '../constants';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

import avatar2 from '../assets/images/regenerated_image_1778494571715.png';
import forumAvatar1 from '../assets/images/regenerated_image_1778494568804.png';
import avatar4 from '../assets/images/regenerated_image_1778494205018.png';

export default function StudyGrid() {
  const getAuthorAvatar = (name: string) => {
    if (name === 'Dr. Sarah Chen') return avatar2;
    if (name === 'James Wilson') return forumAvatar1;
    if (name === 'Elena Rodriguez') return avatar4;
    return forumAvatar1;
  };

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[13px] font-black text-primary uppercase tracking-[0.4em]">RESEARCH & CASE STUDIES</h2>
        <Link 
          to="/learning-center"
          className="text-primary hover:text-accent text-[10px] font-black uppercase tracking-widest transition-all"
        >
          View All Studies
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STUDY_CASES.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-bg-surface border border-border-main rounded-2xl overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-500 group"
          >
            {/* Image Section - 16:9 */}
            <div className="aspect-video bg-bg-base overflow-hidden relative">
              <img
                src={study.imageUrl}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute top-3 left-3">
                <span className={`text-[9px] font-black uppercase py-1 px-2.5 rounded bg-primary text-black tracking-widest`}>
                  {study.type}
                </span>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-text-primary mb-3 hover:text-primary cursor-pointer line-clamp-2 leading-tight text-xl transition-colors">
                {study.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
                {study.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-border-main">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-bg-base border border-border-main flex items-center justify-center overflow-hidden">
                    <img src={getAuthorAvatar(study.author)} alt={study.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-secondary uppercase tracking-widest font-black">Author</div>
                    <div className="text-xs font-bold text-text-primary">{study.author}</div>
                  </div>
                </div>
                <Link 
                  to="/learning-center"
                  className="flex items-center gap-2 text-primary hover:text-accent font-black text-[10px] uppercase tracking-widest transition-all"
                >
                  Read More <BookOpen className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
