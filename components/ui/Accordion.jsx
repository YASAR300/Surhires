'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Accordion item with 12px radius, serif blue title, and smooth reduced-motion aware grid animation.
 */
export function AccordionItem({
  id,
  title,
  children,
  isOpen,
  onToggle,
  className,
}) {
  const buttonId = `accordion-btn-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div
      className={cn(
        'border border-[#E2E8F0] rounded-xl bg-white overflow-hidden transition-all duration-200',
        isOpen ? 'border-[#BFDBFE] shadow-sm shadow-[#2563EB]/5' : 'hover:border-[#CBD5E1]',
        className
      )}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-heading font-bold text-lg md:text-xl text-[#2563EB] hover:text-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-inset cursor-pointer select-none"
      >
        <span className="leading-snug">{title}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-[#64748B] shrink-0 transition-transform duration-300 motion-reduce:transition-none',
            isOpen && 'transform rotate-180 text-[#2563EB]'
          )}
          aria-hidden="true"
        />
      </button>

      {/* Smooth CSS Grid open/close animation */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid transition-all duration-300 ease-in-out motion-reduce:transition-none',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 font-body text-[#475569] text-sm md:text-base leading-relaxed border-t border-[#F1F5F9]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({
  items = [],
  type = 'single',
  allowMultiple = false,
  defaultOpenId,
  className,
}) {
  const isMultiple = allowMultiple || type === 'multiple';
  const initialOpen = defaultOpenId || (items[0] ? items[0].id : null);

  const [openIds, setOpenIds] = useState(() => (initialOpen ? [initialOpen] : []));

  const handleToggle = (id) => {
    if (isMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-3.5', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title || item.question}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        >
          {item.content || item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
