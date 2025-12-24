interface FilterInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
}

export function FilterInput({ label, value, onChange, placeholder, id }: FilterInputProps) {
  const inputId = id || `filter-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const displayLabel = value ? `${label}: ${value}` : label;
  
  return (
    <div>
      <label htmlFor={inputId} className={`block text-xs font-medium mb-1.5 transition-colors ${value ? 'text-violet-600' : 'text-gray-700'}`}>
        {displayLabel}
      </label>
      <input
        id={inputId}
        type="number"
        min="0"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all hover:border-gray-400 ${value ? 'border-violet-300 bg-violet-50' : 'border-gray-300'}`}
        aria-label={label}
      />
    </div>
  );
}
