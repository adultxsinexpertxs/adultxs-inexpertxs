import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./App";
import AvisoPrivacidad from "./pages/aviso-privacidad";
import Comunidad from "./pages/comunidad";
import Conocenos from "./pages/conocenos";
import Contactanos from "./pages/contactanos";
import Merch from "./pages/merch";
import ProductDetail from "./pages/merch/ProductDetail";
import Nosotrxs from "./pages/nosotrxs";
import Layout from "./components/layout/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/nosotrxs" element={<Nosotrxs />} />
          <Route path="/nosotroxs" element={<Navigate to="/nosotrxs" replace />} />
          <Route path="/nosotroxs.html" element={<Navigate to="/nosotrxs" replace />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/identidad" element={<Navigate to="/conocenos" replace />} />
          <Route path="/identidad.html" element={<Navigate to="/conocenos" replace />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/comunidad.html" element={<Navigate to="/comunidad" replace />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/merch/:slug" element={<ProductDetail />} />
          <Route path="/cositas" element={<Navigate to="/merch" replace />} />
          <Route path="/cositas/playera" element={<Navigate to="/merch/playera" replace />} />
          <Route path="/cositas/sudadera" element={<Navigate to="/merch/sudadera" replace />} />
          <Route path="/cositas/gorra" element={<Navigate to="/merch/gorra" replace />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/contactanos.html" element={<Navigate to="/contactanos" replace />} />
          <Route path="/aviso-privacidad.html" element={<AvisoPrivacidad />} />
          <Route path="/proyectos" element={<Navigate to="/nosotrxs" replace />} />
          <Route path="/proyectos.html" element={<Navigate to="/nosotrxs" replace />} />
          <Route path="/experiencias" element={<Navigate to="/comunidad" replace />} />
          <Route path="/experiencias.html" element={<Navigate to="/comunidad" replace />} />
          <Route path="/bitacora" element={<Navigate to="/comunidad" replace />} />
          <Route path="/bitacora.html" element={<Navigate to="/comunidad" replace />} />
          <Route path="/muro" element={<Navigate to="/comunidad" replace />} />
          <Route path="/colaboraciones" element={<Navigate to="/nosotrxs" replace />} />
          <Route path="/colaboraciones.html" element={<Navigate to="/nosotrxs" replace />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
