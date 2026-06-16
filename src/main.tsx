import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import Comunidad from "./pages/comunidad";
import Proyectos from "./pages/proyectos";
import Colaboraciones from "./pages/colaboraciones";
import Cositas from "./pages/cositas";
import Contactanos from "./pages/contactanos";
import Experiencias from "./pages/experiencias";
import Bitacora from "./pages/bitacora";
import Muro from "./pages/muro";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/muro" element={<Muro />} />
          <Route path="/colaboraciones" element={<Colaboraciones />} />
          <Route path="/cositas" element={<Cositas />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="*" element={<App />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  </StrictMode>
);