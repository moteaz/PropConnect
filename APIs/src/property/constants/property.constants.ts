export const PROPERTY_CONSTANTS = {
  DEFAULT_EXPIRY_DAYS: 90,
  MAX_LISTING_PER_USER: 50,
} as const;

export const PROPERTY_MESSAGES = {
  NOT_FOUND: 'Property not found',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  LISTING_LIMIT_REACHED: 'You have reached the maximum listing limit',
  ALREADY_DELETED: 'Property has already been deleted',
} as const;
