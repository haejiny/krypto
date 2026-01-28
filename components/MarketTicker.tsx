
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MOCK_MARKET } from '../constants';

export const MarketTicker: React.FC = () => {
  return (
    <div className="py-12 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center px-6">
            {MOCK_MARKET.map((coin) => (
              <div key={`${coin.symbol}-${i}`} className="flex items-center gap-4 group cursor-pointer">
                <span className="text-lg font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                  {coin.symbol}/USDT
                </span>
                <span className="font-medium font-mono text-gray-300">
                  ${coin.price.toLocaleString()}
                </span>
                <span className={`flex items-center text-sm font-bold ${coin.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {coin.change > 0 ? '+' : ''}{coin.change}%
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
