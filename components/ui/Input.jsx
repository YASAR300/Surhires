import { cn } from '@/lib/utils';

export default function Input({
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
  const inputId = id || name;

  return (
    <div className={cn('w-full flex flex-col space-y-1.5', className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[#0B1F3A] flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
        </label>
      )}

      <div className="relative rounded-lg">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
            <Icon className="w-4 h-4" />
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={cn(
            'w-full h-11 px-3.5 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0B1F3A] placeholder-[#94A3B8] transition-colors',
            'hover:border-[#94A3B8]',
            'focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20',
            'disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            Icon && 'pl-10',
            inputClassName
          )}
          {...props}
        />
      </div>

      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#64748B]">{helperText}</p>
      ) : null}
    </div>
  );
}
