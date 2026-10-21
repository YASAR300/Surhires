'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AccordionItem({
  id,
  title,
  children,
  isOpen,
  onToggle,
  className,
}) {
  return (
    <div
      className={cn(
        'border border-[#E2E8F0] rounded-xl bg-white overflow-hidden transition-all duration-200',
        isOpen ? 'shadow-sm border-[#CBD5E1]' : 'hover:border-[#CBD5E1]',
        className
      )}
    >
      <button
        type="button"
        id={`accordion-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        onClick={onToggle}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-semibold text-[#0B1F3A] hover:text-[#0F766E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] focus-visible:ring-inset"
      >
        <span className="text-base md:text-lg leading-snug">{title}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-200',
            isOpen && 'transform rotate-180 text-[#0F766E]'
          )}
        />
      </button>

      {isOpen && (
        <div
          id={`accordion-content-${id}`}
          role="region"
          aria-labelledby={`accordion-btn-${id}`}
          className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[#475569] text-sm md:text-base leading-relaxed border-t border-[#F1F5F9]/80"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function Accordion({ items = [], allowMultiple = false, className }) {
  const [openIds, setOpenIds] = useState(() => (items[0] ? [items[0].id] : []));

  const handleToggle = (id) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question || item.title}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        >
          {item.answer || item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
