import { Transform } from 'class-transformer';

export function Sanitize() {
  return Transform(({ value }: { value: unknown }) => {
    if (typeof value === 'string') {
      return value.replace(/[<>]/g, '').trim();
    }
    return value;
  });
}
