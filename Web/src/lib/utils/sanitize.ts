/**
 * Sanitize user input to prevent XSS attacks
 * For production, consider using DOMPurify library
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate and sanitize email
 */
export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  return /^\+216\d{8}$/.test(phone);
}
