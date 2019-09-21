import DotEnv from "dotenv";

interface AppConfig {
  ENVIRONMENT: string,
  SERVER_PORT: number,
  REDIS_PORT: number,
  MONGODB_PORT: number,
  MONGODB_DB: string,
  SESSION_SECRET: string,
  GOOGLE_OAUTH_CLIENT_ID: string,
  GOOGLE_OAUTH_CLIENT_SECRET: string
}

const envOverrides = {
  GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_ID,
  SESSION_SECRET: process.env.SESSION_SECRET,
};

const AppConfig: AppConfig = Object.freeze({ ...envOverrides, ...DotEnv.config().parsed}) as unknown as AppConfig;

export default AppConfig;
