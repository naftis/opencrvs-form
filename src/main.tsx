import { getTheme } from "@opencrvs/components";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import "./index.css";
import { form } from "./form.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={getTheme()}>
      <App form={form} />
    </ThemeProvider>
  </StrictMode>
);
