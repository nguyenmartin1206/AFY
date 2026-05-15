import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  X, 
  Send, 
  MessageSquare, 
  Handshake, 
  Facebook, 
  ArrowRight
} from 'lucide-react';
import { useChat } from '../context/ChatContext';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0775-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0775.0105c.1201.0991.246.1971.3718.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8923.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
  </svg>
);

export default function ChatBox() {
  const { isOpen, closeChat, toggleChat } = useChat();

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            className="absolute bottom-20 right-0 w-[342px] h-[468px] rounded-[32px] overflow-hidden flex flex-col border border-white/20 shadow-2xl backdrop-blur-2xl bg-black/40"
          >
            {/* Glassmorphism gradient backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
            
            {/* Header */}
            <div className="relative p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">AFY <span className="text-primary italic">SUPPORT</span></h3>
                <p className="text-[10px] text-white/80 uppercase tracking-widest font-black flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> AI Agents Online
                </p>
              </div>
              <button 
                onClick={closeChat}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow p-6 overflow-y-auto space-y-6 relative">
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[13px] text-white/80 leading-relaxed">
                  Hi there! We help Enterprises scale with high-performance AI. How can we assist you today?
                </div>
              </div>

              {/* Selection Options */}
              <div className="grid grid-cols-1 gap-3">
                <button className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all text-left group">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white group-hover:text-primary transition-colors">Support</h4>
                    <p className="text-[10px] text-white/80 uppercase tracking-wider font-bold">Latency, Node Migration, APIs</p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </button>

                <button className="flex items-center gap-4 p-4 rounded-2xl bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all text-left group">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white group-hover:text-accent transition-colors">Partnerships</h4>
                    <p className="text-[10px] text-white/80 uppercase tracking-wider font-bold">Invest, GPU Lease, B2B Integration</p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-4">
                <p className="text-[10px] font-black text-white/70 uppercase tracking-[0.3em] text-center">AFY Channels</p>
                <div className="flex items-center justify-around">
                  <a href="https://t.me/+nXHYYP20mCBjNGRl" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white/5 hover:bg-[#229ED9]/20 border border-white/10 hover:border-[#229ED9]/50 transition-all group">
                    <TelegramIcon className="w-6 h-6 text-[#229ED9]" />
                  </a>
                  <a href="#" className="p-3 rounded-2xl bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 transition-all">
                    <Facebook className="w-6 h-6 text-[#1877F2]" />
                  </a>
                  <a href="https://discord.gg/xquGfRgFJD" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-white/5 hover:bg-[#5865F2]/20 border border-white/10 hover:border-[#5865F2]/50 transition-all">
                    <DiscordIcon className="w-6 h-6 text-[#5865F2]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Input Bar */}
            <div className="relative p-6 pt-0 mt-auto">
              <input 
                type="text" 
                placeholder="Start typing..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs focus:outline-none focus:border-primary transition-all text-white pr-12"
              />
              <button className="absolute right-9 top-3.5 h-7 w-7 text-primary hover:text-accent transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-[24px] bg-primary flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,196,204,0.3)] hover:shadow-[0_0_50px_rgba(0,196,204,0.5)] transition-all z-10 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        {isOpen ? (
          <X className="w-8 h-8 relative z-10" />
        ) : (
          <MessageCircle className="w-8 h-8 relative z-10" />
        )}
      </motion.button>
    </div>
  );
}
