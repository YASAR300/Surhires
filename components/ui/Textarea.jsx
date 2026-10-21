import { useId } from 'react';
import { cn } from '@/lib/utils';

/**
 * Accessible form multi-line textarea with label, hint, error states, and ARIA descriptors.
 *
 * @param {Object} props
 * @param {string} [props.id] - Unique DOM id (falls back to auto-generated id)
 * @param {string} [props.name] - Form field name
 * @param {string} [props.label] - Accessible label text
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Controlled textarea value
 * @param {Function} [props.onChange] - Value change callback
 * @param {number} [props.rows=4] - Visible text line height count
 * @param {string} [props.error] - Validation error message
 * @param {string} [props.helperText] - Supplementary hint or instruction
 * @param {boolean} [props.disabled=false] - Disables the textarea
 * @param {boolean} [props.required=false] - Marks field as required
 * @param {string} [props.className] - Container CSS classes
 * @param {string} [props.textareaClassName] - Textarea element CSS classes
 */
export default function Textarea({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  error,
  helperText,
  disabled = false,
  required = false,
  className,
  textareaClassName,
  ...props
}) {
  const generatedId = useId();
  const textareaId = id || name || generatedId;
  const errorId = `${textareaId}-error`;
  const hintId = `${textareaId}-hint`;

  const ariaDescribedBy =
    [error ? errorId : null, helperText ? hintId : null]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className={cn('w-full flex flex-col space-y-1.5', className)}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-semibold text-[#0B1F3A] flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={ariaDescribedBy}
        className={cn(
          'w-full p-3.5 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0B1F3A] placeholder-[#94A3B8] transition-colors resize-y',
          'hover:border-[#94A3B8]',
          'focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20',
          'disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-950',
          textareaClassName
        )}
        {...props}
      />

      {error ? (
        <p id={errorId} role="alert" className="text-xs text-red-600 font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p id={hintId} className="text-xs text-[#64748B]">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
