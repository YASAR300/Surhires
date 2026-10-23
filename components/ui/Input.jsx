import { useId } from 'react';
import { cn } from '@/lib/utils';

/**
 * Accessible form text input with 8px crisp radius, label, hint, error states, and ARIA descriptors.
 *
 * @param {Object} props
 * @param {string} [props.id] - Unique DOM id
 * @param {string} [props.name] - Form field name
 * @param {string} [props.label] - Accessible label text
 * @param {string} [props.type='text'] - Input type
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Controlled value
 * @param {Function} [props.onChange] - Change callback
 * @param {string} [props.error] - Error message
 * @param {string} [props.helperText] - Hint message
 * @param {boolean} [props.disabled=false] - Disabled status
 * @param {boolean} [props.required=false] - Required status
 * @param {React.ComponentType<{ className?: string }>} [props.icon] - Optional leading icon
 * @param {string} [props.className] - Container CSS classes
 * @param {string} [props.inputClassName] - Input element CSS classes
 */
export default function Input({
  ref,
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  icon: Icon,
  className,
  inputClassName,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || name || generatedId;
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  const ariaDescribedBy =
    [error ? errorId : null, helperText ? hintId : null]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className={cn('w-full flex flex-col space-y-1.5 font-body', className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[#0F1B33] flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </span>
        </label>
      )}

      <div className="relative rounded-lg">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
            <Icon className="w-4 h-4" aria-hidden="true" />
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={ariaDescribedBy}
          className={cn(
            'w-full h-10 px-3.5 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#0F1B33] placeholder-[#94A3B8] transition-colors',
            'hover:border-[#CBD5E1]',
            'focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15',
            'disabled:bg-[#F6F8FC] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-950',
            Icon && 'pl-10',
            inputClassName
          )}
          {...props}
        />
      </div>

      {error ? (
        <p id={errorId} role="alert" className="text-xs text-red-600 font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p id={hintId} className="text-xs text-[#475569]">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
