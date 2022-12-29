/// <reference types="react-scripts" />

declare module "*.pdf";
declare module "*.png";

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_EMAIL: string;
  }
}
