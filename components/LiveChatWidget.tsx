'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  PhoneCall,
  User,
  Bot,
  Minimize2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

let messageSeq = 0;
function createChatMessage(role: 'user' | 'assistant', content: string): ChatMessage {
  messageSeq += 1;
  return {
    id: `msg-${messageSeq}`,
    role,
    content,
    timestamp: 'Vừa xong',
  };
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: 'Xin chào! Tôi là Trợ lý Chiến lược Digital Marketing của Dimark (thành lập 06/2021). Bạn đang tìm giải pháp tăng trưởng cho kênh nào (Meta Ads, Google Ads, SEO, TikTok hay Landing Page)? Tôi có thể tư vấn định hướng ngay bây giờ!',
      timestamp: 'Vừa xong',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'Phân bổ ngân sách 50 triệu/tháng thế nào?',
    'Cách tăng ROAS Meta Ads không bị bão hòa?',
    'SEO bao lâu thì lên Top 1 Google?',
    'Đăng ký nhận Audit Marketing miễn phí'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isLoading) return;

    const userMsg = createChatMessage('user', text);

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Mạng bị gián đoạn');
      }

      const data = await response.json();
      const assistantMsg = createChatMessage(
        'assistant',
        data.reply || 'Cảm ơn bạn. Chuyên gia của Dimark đã nhận thông tin và sẽ phản hồi chi tiết ngay!'
      );

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error(error);
      const fallbackMsg = createChatMessage(
        'assistant',
        'Chào bạn, hiện tại kênh chat đang có nhiều yêu cầu xử lý. Bạn có thể để lại thông tin ở form bên dưới hoặc gọi hotline 0813 839 079 để chuyên gia kết nối trực tiếp nhé!'
      );
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:scale-105 active:scale-95 transition-all"
            aria-label="Mở khung chat tư vấn"
          >
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold leading-tight">Chat với Chuyên Gia</span>
              <span className="text-[10px] text-cyan-200">Trực tuyến 24/7</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[92vw] sm:w-[400px] h-[550px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
                </div>
                <div>
                  <h3 className="text-sm font-bold flex items-center gap-1.5">
                    <span>Dimark Marketing AI</span>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded font-semibold uppercase">
                      Chuyên gia
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    Phản hồi tức thì · Tư vấn chiến lược thực chiến
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Đóng chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/60 dark:bg-slate-950/60 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      A
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-cyan-600 text-white rounded-br-none shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/80 dark:border-slate-700/80 shadow-sm'
                    }`}
                  >
                    <p>{msg.content}</p>
                    <span
                      className={`text-[9px] block text-right mt-1.5 ${
                        msg.role === 'user' ? 'text-cyan-200' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    A
                  </div>
                  <div className="p-3 rounded-2xl rounded-bl-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] ml-1">Đang phân tích chiến lược...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="p-2 bg-slate-100/80 dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap bg-white dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-700 shrink-0 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input area */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Nhập câu hỏi về marketing của bạn..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Gửi tin nhắn"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span>Hỗ trợ nhanh: <a href="tel:0813839079" className="text-cyan-500 hover:underline font-semibold">0813 839 079</a></span>
                <Link
                  href="/tu-van"
                  onClick={() => setIsOpen(false)}
                  className="text-cyan-500 hover:underline font-semibold"
                >
                  Nhận Audit 1-1 &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
