export const APICFG = {
  apiurl: process.env.NEXT_PUBLIC_EZSKELETON_API_URL,
};

export const AUTH_URL = `${APICFG.apiurl}/auth`;

export const AUTH_LOGIN_URL = `${AUTH_URL}/login`;
