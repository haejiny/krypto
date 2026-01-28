
import { NavItem, FeatureCard, FAQItem, MarketData } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Technology', href: '#technology' },
  { label: 'Governance', href: '#governance' },
  { label: 'Whitepaper', href: '#whitepaper' },
];

export const FEATURES: FeatureCard[] = [
  {
    title: 'Quantum Ledger',
    description: 'A revolutionary consensus mechanism that scales with the speed of thought.',
    icon: 'Zap',
    image: 'https://picsum.photos/seed/crypto1/800/600',
  },
  {
    title: 'Bio-Metric Security',
    description: 'Securing assets through decentralized biological verification nodes.',
    icon: 'Shield',
    image: 'https://picsum.photos/seed/crypto2/800/600',
  },
  {
    title: 'Cross-Chain Infinity',
    description: 'Seamlessly bridge assets across every major blockchain in milliseconds.',
    icon: 'Share2',
    image: 'https://picsum.photos/seed/crypto3/800/600',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does the KRYPTO-GEN protocol differ from Layer 2 solutions?',
    answer: 'Unlike traditional L2s, KRYPTO-GEN utilizes a native sharding architecture that eliminates the need for external sequencers, providing true decentralization at scale.',
  },
  {
    question: 'Can I integrate the 3D assets into my own DApp?',
    answer: 'Yes! Our SDK allows for seamless integration of the GenKub robots and other visual assets via our proprietary React and Vue wrappers.',
  },
  {
    question: 'What is the utility of the GEN token?',
    answer: 'GEN powers the governance engine, acts as the primary gas asset, and can be staked to run validator nodes across the globally distributed network.',
  },
];

export const MOCK_MARKET: MarketData[] = [
  { symbol: 'GEN', price: 12.45, change: 12.5 },
  { symbol: 'ETH', price: 3450.21, change: -1.2 },
  { symbol: 'BTC', price: 68420.00, change: 3.4 },
];
