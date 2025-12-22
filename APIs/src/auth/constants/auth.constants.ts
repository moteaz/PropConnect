export const AUTH_CONSTANTS = {
  BCRYPT_ROUNDS: 12,
  PASSWORD_MIN_LENGTH: 8,
  FULLNAME_MIN_LENGTH: 3,
} as const;

export const AUTH_MESSAGES = {
  USER_ALREADY_EXISTS: 'An account with these credentials already exists',
  INVALID_CREDENTIALS: 'Invalid email or password',
  ACCOUNT_INACTIVE: 'Account is inactive or suspended',
} as const;
