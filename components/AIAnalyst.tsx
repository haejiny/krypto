
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, MessageCircle, Send } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const AIAnalyst: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!prompt.trim() || loading) return;

    const userMessage = prompt;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setPrompt('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are KRYPTO-GEN AI, a futuristic crypto market analyst. You provide insights on DeFi, blockchain tech, and the GenKub 3D ecosystem. Keep answers concise, helpful, and professional.",
        }
      });

      setMessages(prev => [...prev, { role: 'ai', content: response.text || 'Internal Protocol Error. Try again.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "Failed to connect to the decentralized intelligence node." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
        >
          {isOpen ? <X /> : <Sparkles className="h-6 w-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-[60] w-[350px] md:w-[400px] glass-card rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-cyan-500/20 p-6 flex items-center gap-3 border-b border-white/10">
              <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-cyan-400">KRYPTO-GEN AI</h3>
                <p className="text-[10px] text-gray-400">Powered by Neural Genesis 3.0</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <Sparkles className="h-10 w-10 text-cyan-500/30 mx-auto mb-4" />
                  <p className="text-sm text-gray-500 italic">"Ask me about market trends or ecosystem technology..."</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                    m.role === 'user' 
                    ? 'bg-cyan-500 text-black font-medium ml-8' 
                    : 'bg-white/5 border border-white/10 text-gray-300 mr-8'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-1 items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-bounce" />
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-bounce delay-75" />
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-bounce delay-150" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-[#0a0a0a]/50">
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Query the oracle..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={loading}
                  className="absolute right-2 top-2 h-8 w-8 bg-cyan-500 rounded-xl flex items-center justify-center text-black hover:scale-105 transition-transform"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
