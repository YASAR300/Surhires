import { cn } from '@/lib/utils';

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
  const textareaId = id || name;

  return (
    <div className={cn('w-full flex flex-col space-y-1.5', className)}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-[#0B1F3A] flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
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
        className={cn(
          'w-full p-3.5 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0B1F3A] placeholder-[#94A3B8] transition-colors resize-y',
          'hover:border-[#94A3B8]',
          'focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20',
          'disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
          textareaClassName
        )}
        {...props}
      />

      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#64748B]">{helperText}</p>
      ) : null}
    </div>
  );
}
