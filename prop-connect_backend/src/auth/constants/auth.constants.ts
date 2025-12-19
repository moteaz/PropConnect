export const AUTH_CONSTANTS = {
  BCRYPT_ROUNDS: 12,
  PASSWORD_MIN_LENGTH: 8,
  FULLNAME_MIN_LENGTH: 3,
} as const;

export const AUTH_MESSAGES = {
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  PHONE_ALREADY_EXISTS: 'Phone number already registered',
  USER_ALREADY_EXISTS: 'User already registered',
  INVALID_CREDENTIALS: 'Invalid credentials',
  ACCOUNT_INACTIVE: 'Account is inactive or suspended',
} as const;
