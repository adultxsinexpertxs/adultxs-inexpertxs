import type { ReactNode } from "react";

import ScrollToTop from "../ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
