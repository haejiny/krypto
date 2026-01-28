
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';
import * as LucideIcons from 'lucide-react';

export const StoryGrid: React.FC = () => {
  return (
    <section id="ecosystem" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            NOT JUST A CHAIN, <br />
            <span className="text-cyan-400">A BRAND EXPERIENCE.</span>
          </h2 >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We've redesigned decentralized finance from the ground up, focusing on aesthetics, speed, and uncompromising security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          {/* Main Large Feature */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-8 glass-card rounded-3xl overflow-hidden relative group"
          >
            <img 
              src={FEATURES[0].image} 
              alt={FEATURES[0].title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
              <LucideIcons.Zap className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold mb-2">{FEATURES[0].title}</h3>
              <p className="text-gray-300 max-w-md">{FEATURES[0].description}</p>
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-4 glass-card rounded-3xl overflow-hidden relative group"
          >
            <img 
              src={FEATURES[1].image} 
              alt={FEATURES[1].title}
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <LucideIcons.Shield className="h-8 w-8 text-cyan-400" />
              <div>
                <h3 className="text-2xl font-bold mb-2">{FEATURES[1].title}</h3>
                <p className="text-sm text-gray-400">{FEATURES[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-4 glass-card rounded-3xl overflow-hidden relative group"
          >
            <img 
              src={FEATURES[2].image} 
              alt={FEATURES[2].title}
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <LucideIcons.Share2 className="h-8 w-8 text-cyan-400" />
              <div>
                <h3 className="text-2xl font-bold mb-2">{FEATURES[2].title}</h3>
                <p className="text-sm text-gray-400">{FEATURES[2].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Large Stat Box */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-8 bg-cyan-500 rounded-3xl overflow-hidden p-12 flex flex-col justify-center items-center text-center text-black"
          >
            <h3 className="text-5xl font-black mb-4">$4.2B+ TVL</h3>
            <p className="text-lg font-bold opacity-80 uppercase tracking-widest mb-8">Total Value Locked Across Ecosystem</p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors">
              Join the Network
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
