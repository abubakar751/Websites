import React from "react";
import { Routes,Route } from "react-router";
import App from "../App";
const AppRoutes=()=>{
    return (
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<h1>Chat Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="*" element={<h1>404  Page Not Found</h1>} />
      </Routes>
    );
};
export default AppRoutes