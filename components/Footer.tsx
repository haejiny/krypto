
import React from 'react';
import { Cpu, Twitter, Github, Linkedin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold uppercase tracking-tighter">KRYPTO<span className="text-cyan-400">GEN</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The world's first interactive blockchain visual layer. Built for creators, traders, and dreamers.
            </p>
            <div className="flex gap-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-300 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Mainnet Bridge</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Governance Portal</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Explorer</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Developer Docs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-300 uppercase tracking-widest text-xs">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Career</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-300 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Stay ahead with weekly alpha drops and ecosystem updates.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="absolute right-2 top-2 h-8 w-8 bg-cyan-500 rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2024 KRYPTO-GEN FOUNDATION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-gray-600">
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
