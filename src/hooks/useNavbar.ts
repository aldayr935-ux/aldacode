"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { navLinks } from "@/data/nav";
import { flushSync } from "react-dom";

export function useNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  const handleActiveLink = useCallback(() => {
    const navH = navRef.current?.offsetHeight ?? 72;
    const scrollY = window.scrollY + navH + 60;

    let currentId = navLinks[0].href.replace("#", "");

    navLinks.forEach(({ href }) => {
      const id = href.replace("#", "");
      const section = document.getElementById(id);
      if (section && scrollY >= section.offsetTop) {
        currentId = id;
      }
    });

    setActiveHref(`#${currentId}`);
  }, []);

 useEffect(() => {
  window.addEventListener("scroll", handleScroll,     { passive: true });
  window.addEventListener("scroll", handleActiveLink, { passive: true });

  // Ejecutar fuera del ciclo de render inicial
  const timer = setTimeout(() => {
    handleScroll();
    handleActiveLink();
  }, 0);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("scroll", handleActiveLink);
    clearTimeout(timer);
  };
}, [handleScroll, handleActiveLink]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggleMenu = useCallback(() => {
    menuOpen ? closeMenu() : openMenu();
  }, [menuOpen, openMenu, closeMenu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const handleLinkClick = useCallback(
    (href: string) => {
      if (menuOpen) closeMenu();
      if (!href) return;

      const target = document.querySelector(href);
      if (!target) return;

      const navH = navRef.current?.offsetHeight ?? 72;
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTo = Math.min(targetTop - navH, maxScroll);

      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    },
    [menuOpen, closeMenu],
  );

  return {
    navRef,
    scrolled,
    menuOpen,
    activeHref,
    toggleMenu,
    closeMenu,
    handleLinkClick,
  };
}
