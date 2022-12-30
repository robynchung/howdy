import React from "react";
import ReactDOM from "react-dom/client";

import { Helmet } from "react-helmet";

import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App";
import theme from "theme";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import seo from "data/seo.json";
import seoImg from "assets/seo.png";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Helmet titleTemplate={seo.titleTemplate} defaultTitle={seo.defaultTitle}>
      <meta name="description" content={seo.description} />

      {/* facebook */}
      <meta property="og:title" content={seo.defaultTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seoImg} />
      <meta property="og:url" content={seo.baseURL} />
      <meta property="og:site_name" content={seo.defaultTitle} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={seo.type} />

      <meta name="twitter:card" content={seoImg} />
      <meta name="twitter:title" content={seo.defaultTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seoImg} />
    </Helmet>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
