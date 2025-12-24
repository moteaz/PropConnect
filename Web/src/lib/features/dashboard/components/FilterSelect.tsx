interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  id?: string;
}

export function FilterSelect({ label, value, onChange, options, id }: FilterSelectProps) {
  const selectId = id || `filter-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const selectedOption = options.find(opt => opt.value === value);
  const displayLabel = value && selectedOption ? `${label}: ${selectedOption.label}` : label;
  
  return (
    <div>
      <label htmlFor={selectId} className={`block text-xs font-medium mb-1.5 transition-colors ${value ? 'text-violet-600' : 'text-gray-700'}`}>
        {displayLabel}
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all bg-white cursor-pointer hover:border-gray-400 ${value ? 'border-violet-300 bg-violet-50' : 'border-gray-300'}`}
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
