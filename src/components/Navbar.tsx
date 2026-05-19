import { Search, User, Menu, ChevronDown, Sun, Moon, Zap, UserCircle, MessageSquare, GraduationCap, LogOut, Bell } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';
import { useChat } from '../context/ChatContext';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/images/logo1.png';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { openChat } = useChat();
  const { user, signOut } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  const notifications = [
    {
      id: 1,
      title: "New AI Tool Released",
      description: "Neural Core v2.0 is now available for integration.",
      time: "2 hours ago",
      isRead: false
    },
    {
      id: 2,
      title: "System Update",
      description: "Maintenance completed successfully. Performance improved by 15%.",
      time: "5 hours ago",
      isRead: true
    },
    {
      id: 3,
      title: "New Message",
      description: "You have a new message from the AI Ethics Board.",
      time: "1 day ago",
      isRead: true
    }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsProfileOpen(false);
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return '??';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-base/90 backdrop-blur-md border-b border-border-main font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-8 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 cursor-pointer group">
          <img src={logo} alt="AFY Logo" className="h-13 w-auto" />
          <span className="text-2xl font-black font-display tracking-tighter text-text-primary">AI<span className="text-primary italic">FORYOU</span></span>
        </Link>

        {/* Central Search Bar */}
        <div className="hidden md:flex flex-grow max-w-2xl relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-text-secondary group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search AI tools, tutorials, and docs..."
            className="w-full bg-bg-surface border border-border-main rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all duration-300 text-text-primary placeholder:text-text-secondary"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 text-sm font-bold">
          <span 
            onClick={openChat}
            className="hidden lg:block text-text-secondary hover:text-primary cursor-pointer transition-all duration-300"
          >
            PARTNER
          </span>
          
          <div className="flex items-center gap-4">
            {!user && (
              <Link to="/auth" className="hidden sm:block btn-lime py-2 px-4 !text-[10px]">
                GET STARTED
              </Link>
            )}
            
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-bg-surface border border-border-main text-text-primary hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="relative" ref={notificationsRef}>
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isNotificationsOpen 
                  ? 'bg-primary border-primary text-black' 
                  : 'bg-bg-surface border border-border-main text-text-primary hover:border-primary hover:text-primary'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-bg-base"></span>
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-80 bg-bg-surface border border-border-main rounded-2xl shadow-2xl overflow-hidden z-[60]"
                  >
                    <div className="p-4 border-b border-border-main flex items-center justify-between">
                      <h3 className="text-sm font-black text-text-primary uppercase tracking-tight">Notifications</h3>
                      <button className="text-[10px] font-black text-primary hover:text-accent uppercase tracking-widest">Mark all as read</button>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className={`p-4 border-b border-border-main hover:bg-bg-base/50 transition-colors cursor-pointer group relative ${!notification.isRead ? 'bg-primary/5' : ''}`}
                        >
                          {!notification.isRead && (
                            <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-primary rounded-full"></div>
                          )}
                          <div className="flex flex-col gap-1">
                            <h4 className="text-[11px] font-black text-text-primary uppercase tracking-tight group-hover:text-primary transition-colors">
                              {notification.title}
                            </h4>
                            <p className="text-[10px] text-text-secondary line-clamp-2">
                              {notification.description}
                            </p>
                            <span className="text-[9px] text-text-secondary/60 font-bold uppercase tracking-widest mt-1">
                              {notification.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-bg-base/30 text-center">
                      <Link 
                        to="/notifications" 
                        onClick={() => setIsNotificationsOpen(false)}
                        className="text-[10px] font-black text-text-secondary hover:text-primary uppercase tracking-[0.2em] transition-all"
                      >
                        See all activity
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" ref={profileRef}>
              <div 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ${
                  isProfileOpen 
                  ? 'bg-primary border-primary text-black' 
                  : 'bg-bg-surface border border-border-main text-text-primary hover:border-primary hover:text-primary'
                }`}
              >
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'Profile'} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-64 bg-bg-surface border border-border-main rounded-2xl shadow-2xl overflow-hidden z-[60]"
                  >
                    {/* User Header */}
                    <div className="p-5 border-b border-border-main bg-bg-base/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-black font-black overflow-hidden">
                          {user?.photoURL ? (
                            <img src={user.photoURL} alt="" className="w-full h-full object-cover" />
                          ) : (
                            getInitials(user?.displayName || null)
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-black text-text-primary uppercase tracking-tight truncate">
                            {user?.displayName || 'Welcome'}
                          </p>
                          <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold truncate">
                            {user ? user.email : 'Sign in to sync data'}
                          </p>
                        </div>
                      </div>
                      {user && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-bg-base border border-border-main group cursor-pointer hover:border-primary/30 transition-all">
                          <div className="flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-primary fill-primary" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-primary">Mana Balance</span>
                          </div>
                          <span className="text-xs font-black text-primary">1,250</span>
                        </div>
                      )}
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      {user ? (
                        <>
                          <Link 
                            to="/profile" 
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-base text-text-secondary hover:text-primary transition-all group"
                          >
                            <UserCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold">Account profile</span>
                          </Link>
                          <Link 
                            to="/forum/posts" 
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-base text-text-secondary hover:text-primary transition-all group"
                          >
                            <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold">Forum posts</span>
                          </Link>
                          <Link 
                            to="/learning-center/progress" 
                            onClick={() => setIsProfileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-base text-text-secondary hover:text-primary transition-all group"
                          >
                            <GraduationCap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold">Active lessons</span>
                          </Link>
                        </>
                      ) : (
                        <Link 
                          to="/auth" 
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-base text-text-secondary hover:text-primary transition-all group"
                        >
                          <LogOut className="w-4 h-4 rotate-180 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold">Sign in / Register</span>
                        </Link>
                      )}
                    </div>

                    {/* Footer */}
                    {user && (
                      <div className="p-2 border-t border-border-main bg-bg-base/30">
                        <button 
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 text-text-secondary hover:text-red-500 transition-all group"
                        >
                          <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold">Sign out</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Menu className="w-6 h-6 md:hidden cursor-pointer text-primary" />
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="bg-bg-base border-b border-border-main px-4 md:px-8 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto flex items-center gap-8 h-10 text-[11px] font-black tracking-widest whitespace-nowrap">
          <Link to="/" className={`${location.pathname === '/' ? 'text-primary border-b border-primary' : 'text-text-secondary hover:text-primary'} h-full flex items-center cursor-pointer transition-all uppercase`}>HOME</Link>
          <Link to="/products" className={`${location.pathname === '/products' ? 'text-primary border-b border-primary' : 'text-text-secondary hover:text-primary'} h-full flex items-center cursor-pointer transition-all uppercase`}>PRODUCTS</Link>
          <Link to="/news" className={`${location.pathname === '/news' ? 'text-primary border-b border-primary' : 'text-text-secondary hover:text-primary'} h-full flex items-center cursor-pointer transition-all uppercase`}>NEWS</Link>
          <Link to="/forum" className={`${location.pathname === '/forum' ? 'text-primary border-b border-primary' : 'text-text-secondary hover:text-primary'} h-full flex items-center cursor-pointer transition-all uppercase`}>FORUM</Link>
          <Link to="/blog" className={`${location.pathname === '/blog' ? 'text-primary border-b border-primary' : 'text-text-secondary hover:text-primary'} h-full flex items-center cursor-pointer transition-all uppercase`}>BLOG</Link>
          <Link to="/learning-center" className={`${location.pathname === '/learning-center' ? 'text-primary border-b border-primary' : 'text-text-secondary hover:text-primary'} h-full flex items-center cursor-pointer transition-all uppercase`}>LEARNING CENTER</Link>
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-primary border-b border-primary' : 'text-text-secondary hover:text-primary'} h-full flex items-center cursor-pointer transition-all uppercase`}>ABOUT US</Link>
          <div className="ml-auto opacity-30 text-[9px] text-text-secondary">PREMIUM MARKETPLACE</div>
        </div>
      </div>
    </nav>
  );
}
