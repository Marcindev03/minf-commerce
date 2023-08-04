export const useVercelEnv = (env?: string) => {
  if (env && !process.env.VERCEL) {
    return env;
  }

  return `https://${process.env.VERCEL_URL}`;
};
