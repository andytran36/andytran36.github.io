import { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const [mainEl, setMainEl] = useState(null);

  const setMainRef = useCallback((node) => {
    mainRef.current = node;
    setMainEl(node);
  }, []);

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex h-screen min-h-0 flex-col overflow-hidden">
      <Navbar scrollContainer={mainEl} />
      <main
        ref={setMainRef}
        className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain pt-14"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
