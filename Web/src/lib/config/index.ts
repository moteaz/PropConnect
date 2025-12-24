interface Config {
  apiUrl: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

const getConfig = (): Config => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  if (!apiUrl && process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_API_URL is required in production');
  }

  return {
    apiUrl: apiUrl || 'http://localhost:5000',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  };
};

export const config = getConfig();
