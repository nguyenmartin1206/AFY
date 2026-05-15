import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowRight, User, Building2, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type UserType = 'personal' | 'enterprise' | null;

export default function AuthPage() {
  const [userType, setUserType] = useState<UserType>(null);
  const [step, setStep] = useState<'type' | 'auth'>('type');

  const handleTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep('auth');
  };

  const reset = () => {
    setUserType(null);
    setStep('type');
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <AnimatePresence mode="wait">
        {step === 'type' ? (
          <motion.div
            key="type-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-black text-text-primary mb-2 uppercase tracking-tight">Welcome</h2>
              <p className="text-text-secondary font-medium">Please select your account type to get started</p>
            </div>

            <div className="grid gap-6">
              <button
                onClick={() => handleTypeSelect('personal')}
                className="group relative p-8 rounded-2xl border border-border-main bg-bg-base hover:border-primary transition-all duration-300 text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
                <User className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-1">Personal</h3>
                <p className="text-sm text-text-secondary">For individuals looking to transform their daily life with AI.</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Select <ArrowRight className="w-3 h-3" />
                </div>
              </button>

              <button
                onClick={() => handleTypeSelect('enterprise')}
                className="group relative p-8 rounded-2xl border border-border-main bg-bg-base hover:border-primary transition-all duration-300 text-left overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
                <Building2 className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-1">Enterprise</h3>
                <p className="text-sm text-text-secondary">For teams and organizations seeking scalable AI solutions.</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Select <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="auth-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={reset}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" /> Back to selection
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-black text-text-primary mb-2 uppercase tracking-tight">
                {userType === 'personal' ? 'Personal Account' : 'Enterprise Account'}
              </h2>
              <p className="text-text-secondary font-medium">Create your profile to continue</p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-white text-black p-4 rounded-xl font-bold flex items-center justify-center gap-3 border border-border-main hover:bg-zinc-50 transition-colors shadow-sm">
                <img src="https://cdn.svgporn.com/logos/google-icon.svg" alt="Google" className="w-5 h-5" referrerPolicy="no-referrer" />
                Continue with Google
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border-main"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                  <span className="px-3 bg-bg-base text-text-secondary">or use email</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary mb-1 block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      className="w-full bg-bg-base border border-border-main p-4 pl-12 rounded-xl text-text-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>
                <button className="w-full btn-lime py-4 text-sm">
                  Register Account
                </button>
              </div>

              <p className="text-center text-xs text-text-secondary pt-4 font-medium">
                By signing up, you agree to our <Link to="#" className="text-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
