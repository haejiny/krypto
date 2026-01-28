
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Mainnet v3.0 Is Live</span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-black leading-tight mb-6">
            THE NEW <br />
            <span className="text-gradient">STANDARD</span> <br />
            OF WEALTH
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
            Experience the fusion of high-performance blockchain technology and interactive digital assets. Built for the next billion users.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-black px-8 py-4 rounded-full font-black flex items-center gap-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-full font-bold flex items-center gap-2 backdrop-blur-sm transition-all"
            >
              Explore Assets <Activity className="h-5 w-5" />
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-8 opacity-50">
            <div className="text-center">
              <div className="text-2xl font-bold">2.4M+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Active Nodes</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold">14ms</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Avg Finality</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold">$0.001</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Transaction Fee</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: 3D Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[600px] md:h-[900px] flex items-center justify-center pointer-events-none"
        >
          {/* Enhanced Background Glows for Depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-cyan-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/5 rounded-full blur-[120px]" />
          
          {/* Iframe Container - Mask removed to prevent cutting off the robot */}
          <div className="relative w-full h-full pointer-events-auto">
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-MdVOaElaqqo4S9BenZfAshJw/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              title="KRYPTO-GEN 3D Assistant"
              className="absolute inset-0 z-0"
              style={{ background: 'transparent' }}
            ></iframe>
            
            {/* Very soft edge blend overlay that only touches the far outer boundaries */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, transparent 65%, #050505 98%)'
              }}
            />
          </div>
          
          {/* Floating HUD elements - Re-positioned for better visibility with the larger robot area */}
          <div className="absolute top-1/3 right-10 glass-card p-4 rounded-2xl animate-pulse pointer-events-none hidden lg:block z-20 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Neural Sync: 100%</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-500">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
