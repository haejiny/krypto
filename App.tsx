
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryGrid } from './components/StoryGrid';
import { MarketTicker } from './components/MarketTicker';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AIAnalyst } from './components/AIAnalyst';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for smoother 3D initialization
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
              <p className="animate-pulse text-sm font-medium tracking-widest text-cyan-400 uppercase">
                Initializing Protocol...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <MarketTicker />
        <StoryGrid />
        <FAQSection />
      </main>

      <Footer />
      <AIAnalyst />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>
    </div>
  );
};

export default App;
