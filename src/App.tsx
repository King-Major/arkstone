import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Nav, WhatsAppFloat } from "./components/Layout";
import LeadPopup from "./components/LeadPopup";
import Home from "./pages/Home";
import About from "./pages/About";
import Assets from "./pages/Assets";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import OperatingPrinciples from "./pages/OperatingPrinciples";
import Insights from "./pages/Insights";
import InsiderCircle from "./pages/InsiderCircle";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/operating-principles" element={<OperatingPrinciples />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Insights />} />
          <Route path="/insider-circle" element={<InsiderCircle />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <LeadPopup />
    </>
  );
}
