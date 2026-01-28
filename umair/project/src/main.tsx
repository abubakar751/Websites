import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "antd/dist/reset.css"; // ✅ MUST for AntD
import "./index.css";         // ✅ Tailwind

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
