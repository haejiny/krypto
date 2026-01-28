
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="technology" className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="h-12 w-12 text-cyan-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Questions? <br /><span className="text-gray-500">We have answers.</span></h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Everything you need to know about the KRYPTO-GEN protocol and the GenKub 3D ecosystem.
            </p>
            <button className="text-cyan-400 font-bold flex items-center gap-2 hover:underline">
              Visit Documentation Center
            </button>
          </motion.div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden border border-white/5">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-gray-200">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-cyan-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
