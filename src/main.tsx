import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleCounterPage from "./pages/SimpleCounter/indext";
import ContextAPI from "./pages/ContextApi";
import ThemeProvider from "./context/ThemeContext";
import FilterSearch from "./pages/FilterSearch";
import DisplayList from "./pages/DisplayList";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simple-counter" element={<SimpleCounterPage />} />
          <Route path="/context-api" element={<ContextAPI />} />
          <Route path="/filter-search" element={<FilterSearch />} />
          <Route path="/list" element={<DisplayList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
