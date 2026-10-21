import { useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Accessible form select dropdown with label, hint, error states, and ARIA descriptors.
 *
 * @param {Object} props
 * @param {string} [props.id] - Unique DOM id (falls back to auto-generated id)
 * @param {string} [props.name] - Form field name
 * @param {string} [props.label] - Accessible label text
 * @param {string | number} [props.value] - Controlled select value
 * @param {Function} [props.onChange] - Value change callback
 * @param {Array<string | { label: string, value: string | number }>} [props.options=[]] - List of selectable options
 * @param {string} [props.placeholder] - Placeholder disabled default option
 * @param {string} [props.error] - Validation error message
 * @param {string} [props.helperText] - Supplementary hint or instruction
 * @param {boolean} [props.disabled=false] - Disables the select element
 * @param {boolean} [props.required=false] - Marks field as required
 * @param {string} [props.className] - Container CSS classes
 * @param {string} [props.selectClassName] - Select element CSS classes
 */
export default function Select({
  id,
  name,
  label,
  value,
  onChange,
  options = [],
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  className,
  selectClassName,
  ...props
}) {
  const generatedId = useId();
  const selectId = id || name || generatedId;
  const errorId = `${selectId}-error`;
  const hintId = `${selectId}-hint`;

  const ariaDescribedBy =
    [error ? errorId : null, helperText ? hintId : null]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className={cn('w-full flex flex-col space-y-1.5', className)}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-semibold text-[#0B1F3A] flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={ariaDescribedBy}
          className={cn(
            'w-full h-11 px-3.5 pr-10 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0B1F3A] appearance-none transition-colors cursor-pointer',
            'hover:border-[#94A3B8]',
            'focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20',
            'disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-950',
            selectClassName
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            const isObj = typeof opt === 'object' && opt !== null;
            const val = isObj ? opt.value : opt;
            const lbl = isObj ? opt.label : opt;
            return (
              <option key={val} value={val}>
                {lbl}
              </option>
            );
          })}
        </select>

        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </div>
      </div>

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
