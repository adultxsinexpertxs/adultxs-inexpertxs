import type { ReactNode } from "react";

const bebasFont = {
  fontFamily: '"Bebas Neue", sans-serif',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={bebasFont} className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {children}
    </div>
  );
}