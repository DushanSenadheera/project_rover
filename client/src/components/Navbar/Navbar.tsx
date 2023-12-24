import { useState, useEffect } from "react";
import "./Navbar.scss";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      const navbarHeight = navbar.offsetHeight;

      setIsDark(window.scrollY > navbarHeight);
    };
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <nav className={`navbar ${isDark ? "dark" : ""}`}>LOGO</nav>
  )};
