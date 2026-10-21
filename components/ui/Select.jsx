import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const selectId = id || name;

  return (
    <div className={cn('w-full flex flex-col space-y-1.5', className)}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-[#0B1F3A] flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
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
          className={cn(
            'w-full h-11 px-3.5 pr-10 bg-white border border-[#CBD5E1] rounded-lg text-sm text-[#0B1F3A] appearance-none transition-colors cursor-pointer',
            'hover:border-[#94A3B8]',
            'focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20',
            'disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] disabled:cursor-not-allowed',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
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
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {error ? (
        <p className="text-xs text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-[#64748B]">{helperText}</p>
      ) : null}
    </div>
  );
}
