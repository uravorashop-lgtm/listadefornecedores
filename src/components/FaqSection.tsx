import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      className="py-16 px-4 sm:px-6 max-w-2xl mx-auto flex flex-col items-center text-center"
    >
      {/* Pill Badge */}
      <div
        id="faq-pill"
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/90 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wider mb-4 uppercase"
      >
        <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
        <span>Perguntas frequentes</span>
      </div>

      {/* Heading */}
      <h2
        id="faq-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8"
      >
        Dúvidas <span className="italic font-serif text-purple-900 font-semibold">comuns</span>
      </h2>

      {/* Accordion List */}
      <div id="faq-accordion" className="w-full flex flex-col gap-3 text-left">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-purple-100/90 shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full py-4 px-5 flex items-center justify-between gap-3 text-left hover:bg-purple-50/40 transition-colors cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-purple-700 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
