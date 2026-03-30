import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const scrollRef = useRef(null);
  const [showTheme, setShowTheme] = useState(true);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (el.scrollTop > 20) {
        setShowTheme(false);
      } else {
        setShowTheme(true);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(255, 255, 255, 0.08)",
            color: "#fff",
            borderRadius: "14px",
            padding: "12px 16px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
          },

          success: {
            style: {
              border: "1px solid rgba(34, 197, 94, 0.4)",
            },
          },

          error: {
            style: {
              border: "1px solid rgba(239, 68, 68, 0.4)",
            },
          },
        }}
      />

      <div className="h-screen flex flex-col px-4 sm:px-5 md:px-10 lg:px-20 py-5 overflow-hidden relative">
        {/* background */}
        <div className="absolute inset-0 animated-gradient" />

        {/* inner box */}
        <div
          className={`h-full shadow-2xl rounded-2xl border overflow-hidden relative transition-all duration-500 ${
            theme === "light"
              ? "bg-white/10 backdrop-blur-md border-white/40"
              : "bg-black/30 backdrop-blur-md border-white/10"
          }`}
        >
          <div
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
              showTheme
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* LEFT HALF-CIRCLE MENU */}
          <SideMenu theme={theme} />

          {/* pages */}
          <div
            ref={scrollRef}
            className={`h-full overflow-y-auto custom-scroll pt-10 px-20 transition-all duration-300 ${
              theme === "light" ? "text-black" : "text-white/90"
            } `}
          >
            <ScrollToTop scrollRef={scrollRef} /> {/* auto scroll top */}
            <Routes>
              <Route path="/" element={<HomePage theme={theme} />} />
              <Route path="/project" element={<ProjectPage theme={theme} />} />
              <Route path="/contact" element={<ContactPage theme={theme} />} />

              {/* 👇 Catch-all route */}
              <Route path="*" element={<NotFoundPage theme={theme} />} />
            </Routes>
          </div>
        </div>

        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}
