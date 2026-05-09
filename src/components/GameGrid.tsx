import { GAMES } from '../constants';
import { motion } from 'motion/react';

export default function GameGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {GAMES.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="bg-bg-surface border border-border-main rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 shadow-2xl"
        >
          <div className="h-40 bg-bg-base overflow-hidden relative">
            <img
              src={game.imageUrl}
              alt={game.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent opacity-60" />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-sm text-text-primary group-hover:text-primary transition-all duration-300 line-clamp-1 uppercase tracking-wider">
              {game.name}
            </h3>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                {Math.floor(Math.random() * 2000) + 500}+ Trading
              </p>
              <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_5px_var(--accent)]" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
