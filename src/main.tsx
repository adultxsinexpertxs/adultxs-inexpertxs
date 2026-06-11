import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";
import Comunidad from "./pages/comunidad.tsx";
import Proyectos from "./pages/proyectos.tsx";
import Experiencias from "./pages/experiencias.tsx";
import Bitacora from "./pages/bitacora.tsx";
import Identidad from "./pages/identidad.tsx";
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";
import Layout from "./components/Layout.tsx";

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
          <Route path="/identidad" element={<Identidad />} />
          <Route path="*" element={<App />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  </StrictMode>
);