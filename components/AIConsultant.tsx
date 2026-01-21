import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../constants';
import { streamConsultationResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant Apex. Comment puis-je vous aider pour votre projet de boulangerie ou cuisine ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      // Prepare history for the API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const stream = await streamConsultationResponse(history, userText);
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        if (chunkText) {
            fullResponse += chunkText;
            setMessages(prev => {
                const newArr = [...prev];
                newArr[newArr.length - 1] = { role: 'model', text: fullResponse };
                return newArr;
            });
        }
      }

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Je rencontre des difficultés de connexion. Veuillez réessayer plus tard ou contacter notre standard." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px] transition-all duration-300">
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <h3 className="font-semibold text-sm">Assistant Projet Apex</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
               <div className="bg-white border border-slate-200 rounded-lg p-3 rounded-bl-none shadow-sm flex space-x-1">
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                 <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
             </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary hover:bg-primary-hover text-white rounded-md px-3 py-2 disabled:opacity-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-800' : 'bg-primary'} hover:brightness-110 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 font-medium group`}
      >
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pl-1">Parler à un expert</span>}
        <Icons.Chat />
      </button>
    </div>
  );
};