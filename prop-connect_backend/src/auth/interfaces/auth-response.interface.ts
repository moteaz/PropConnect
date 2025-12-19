export interface AuthResponse {
  user: {
    id: string;
    email: string;
    fullName: string;
    phone: string;
    role: string;
    createdAt?: Date;
  };
  accessToken: string;
}
