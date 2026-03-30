import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  [
    "block px-6 py-4 text-center font-extrabold text-light no-underline transition-colors duration-200",
    "hover:bg-nav-hover",
    isActive ? "bg-nav-hover" : "",
  ]
    .filter(Boolean)
    .join(" ");

export default function Navbar({ scrollContainer }) {
  const ref = useRef(null);

  useEffect(() => {
    const navbar = ref.current;
    const scrollEl = scrollContainer ?? null;
    let prevScrollPos = scrollEl ? scrollEl.scrollTop : 0;

    const getScrollY = () => (scrollEl ? scrollEl.scrollTop : 0);

    const onScroll = () => {
      if (!navbar) return;
      if (window.innerWidth <= 768) {
        const currentScrollPos = getScrollY();
        if (prevScrollPos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-60px";
        }
        prevScrollPos = currentScrollPos;
      } else {
        navbar.style.top = "0";
      }
    };

    if (!scrollEl) {
      return undefined;
    }

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, [scrollContainer]);

  return (
    <nav
      ref={ref}
      className="bg-red fixed top-0 left-0 z-50 w-full shrink-0 transition-all duration-500"
    >
      <ul className="flex w-full list-none justify-start">
        <li className="shrink-0">
          <NavLink to="/" end className={linkClass}>
            andyTran
          </NavLink>
        </li>
        <li className="shrink-0">
          <NavLink to="/about" className={linkClass}>
            .about
          </NavLink>
        </li>
        <li className="shrink-0">
          <NavLink to="/work" className={linkClass}>
            .work
          </NavLink>
        </li>
        <li className="shrink-0">
          <NavLink to="/projects" className={linkClass}>
            .projects
          </NavLink>
        </li>
        {/* <li className="shrink-0">
          <NavLink to="/games" className={linkClass}>
            .games
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
