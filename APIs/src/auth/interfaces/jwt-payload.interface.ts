export interface JwtPayload {
  sub: string;  // User ID
  role: string; // User role for authorization
}
