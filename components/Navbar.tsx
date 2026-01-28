
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cpu, Wallet } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/80 py-4 backdrop-blur-md border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Cpu className="h-8 w-8 text-cyan-400" />
          <span className="text-xl font-bold tracking-tighter uppercase">KRYPTO<span className="text-cyan-400">GEN</span></span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-bold transition-transform hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="flex items-center justify-center gap-2 bg-cyan-500 text-black py-3 rounded-xl font-bold">
                <Wallet className="h-5 w-5" />
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { AnimatePresence } from 'framer-motion';
