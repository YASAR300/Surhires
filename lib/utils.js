import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines Tailwind classes conditionally and merges conflicting utility classes.
 * @param  {...any} inputs - Class names or conditional expressions
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
