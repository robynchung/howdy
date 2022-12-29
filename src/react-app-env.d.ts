/// <reference types="react-scripts" />

declare module "*.pdf";

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_EMAIL_SERVICE_ID: string;
    REACT_APP_EMAIL_TEMPLATE_ID: string;
    REACT_APP_EMAIL_PUBLIC_KEY: string;
  }
}
