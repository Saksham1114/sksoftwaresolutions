import type { ComponentType } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import { Navbar } from "./components/site/Navbar";
import { Footer } from "./components/site/Footer";
import { FloatingActions } from "./components/site/FloatingActions";
import { Toaster } from "./components/ui/sonner";

const ServicesComponent = Services as ComponentType;

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesComponent />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}