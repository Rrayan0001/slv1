"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-outer">
      <div className="navbar-inner">
        {/* Logo Section */}
        <div className="navbar-logo-wrap">
          <Image src="/1.png" alt="SLV Logo" width={56} height={56} className="navbar-logo" priority />
        </div>
        {/* Hamburger Menu Button - Mobile Only */}
        {!isMenuOpen && (
          <button className="navbar-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        )}
        {/* Close Button - Mobile Only when menu is open */}
        {isMenuOpen && (
          <button className="navbar-close-btn" onClick={closeMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {/* Nav Links */}
        <div className={`navbar-links-wrap ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/" className={`navbar-link ${isMenuOpen ? 'mobile-open' : ''} ${isActive("/") ? "active" : ""}`} onClick={closeMenu}>
            HOME
          </a>
          <a href="/services" className={`navbar-link ${isMenuOpen ? 'mobile-open' : ''} ${isActive("/services") ? "active" : ""}`} onClick={closeMenu}>
            SERVICES
          </a>
          <a href="/contact" className={`navbar-link ${isMenuOpen ? 'mobile-open' : ''} ${isActive("/contact") ? "active" : ""}`} onClick={closeMenu}>
            CONTACT
          </a>
          {/* CTA Button inside mobile menu */}
          <button className="navbar-cta-mobile" onClick={closeMenu}>
            Get In Touch <span className="cta-arrow">→</span>
          </button>
        </div>
        {/* Nav Right: CTA Button - Desktop Only */}
        <div className={`navbar-side-wrap ${isMenuOpen ? 'mobile-open' : ''}`}>
          {/* CTA Button */}
          <button className="navbar-cta" onClick={closeMenu}>
            Get In Touch <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
      <style jsx>{`
        .navbar-outer {
          position: fixed;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          max-width: 1920px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 40px rgba(0,0,0,0.1);
          border-radius: 1.5rem;
          z-index: 1000;
          overflow: visible;
        }
        @media (min-width: 768px) {
          .navbar-outer {
            top: 1.5rem;
            width: calc(100% - 4rem);
            border-radius: 2.1rem;
          }
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1rem;
          position: relative;
        }
        @media (min-width: 768px) {
          .navbar-inner {
            padding: 0.8rem 2rem;
          }
        }
        .navbar-logo-wrap {
          display: flex;
          align-items: center;
          min-width: auto;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .navbar-logo-wrap {
            min-width: 170px;
          }
        }
        .navbar-logo {
          width: 40px;
          height: auto;
        }
        @media (min-width: 768px) {
          .navbar-logo {
            width: 56px;
          }
        }
        .navbar-links-wrap {
          display: none;
          align-items: center;
          gap: 2.1rem;
        }
        @media (min-width: 992px) {
          .navbar-links-wrap {
            display: flex;
          }
        }
        .navbar-links-wrap.mobile-open {
          display: flex;
          position: fixed;
          top: calc(1rem + 80px);
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          max-width: 400px;
          flex-direction: column;
          background: #ffffff;
          backdrop-filter: blur(20px);
          padding: 2rem 1.5rem;
          margin: 0;
          border-radius: 1.5rem;
          box-shadow: 0 8px 40px rgba(0,0,0,0.15);
          gap: 0.5rem;
          z-index: 1001;
          justify-content: flex-start;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }
        .navbar-link {
          color: #181b28;
          font-weight: 700;
          letter-spacing: 0.03em;
          font-size: 1rem;
          text-transform: uppercase;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: color 0.2s;
          padding: 0.75rem 1rem;
          min-height: 44px;
          width: 100%;
          justify-content: center;
        }
        @media (min-width: 992px) {
          .navbar-link {
            font-size: 1.17rem;
            padding: 0;
            width: auto;
            min-height: auto;
            justify-content: flex-start;
          }
        }
        .navbar-link:hover {
          color: #2565F5;
        }
        .navbar-link.active {
          color: #2565F5;
        }
        .navbar-link.mobile-open {
          color: #181b28;
          font-size: 1.1rem;
          padding: 1rem 1.5rem;
          justify-content: flex-start;
          width: 100%;
          border-radius: 0.5rem;
        }
        .navbar-link.mobile-open.active {
          color: #2565F5;
        }
        .navbar-side-wrap {
          display: none;
          align-items: center;
          gap: 1.6rem;
        }
        @media (min-width: 992px) {
          .navbar-side-wrap {
            display: flex;
          }
        }
        .navbar-side-wrap.mobile-open {
          display: none;
        }
        .navbar-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 2px solid #FFA500;
          border-radius: 0.5rem;
          cursor: pointer;
          z-index: 1002;
          color: #181b28;
          padding: 0;
        }
        @media (min-width: 992px) {
          .navbar-close-btn {
            display: none;
          }
        }
        .navbar-cta-mobile {
          background: #fff;
          color: #0e2341;
          border: 1px solid #e0e0e0;
          font-weight: 700;
          border-radius: 1.2rem;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          box-shadow: 0 1px 24px rgba(37,101,245,0.1);
          display: flex;
          align-items: center;
          gap: 0.8em;
          cursor: pointer;
          transition: background 0.16s, color 0.19s;
          min-height: 44px;
          width: 100%;
          justify-content: center;
          margin-top: 1.5rem;
        }
        @media (min-width: 992px) {
          .navbar-cta-mobile {
            display: none;
          }
        }
        .navbar-cta-mobile:hover {
          background: #2565F5;
          color: #fff;
        }
        .navbar-cta-mobile .cta-arrow {
          color: #2565F5;
          font-weight: 700;
          margin-left: 0.31em;
        }
        .navbar-cta-mobile:hover .cta-arrow {
          color: #fff;
        }
        .navbar-cta {
          background: #fff;
          color: #0e2341;
          border: none;
          font-weight: 700;
          border-radius: 1.2rem;
          padding: 0.9rem 1.5rem;
          font-size: 1rem;
          box-shadow: 0 1px 24px rgba(37,101,245,0.1);
          display: flex;
          align-items: center;
          gap: 0.8em;
          cursor: pointer;
          transition: background 0.16s, color 0.19s;
          min-height: 44px;
          width: 100%;
          justify-content: center;
        }
        @media (min-width: 992px) {
          .navbar-cta {
            padding: 0.9rem 2.1rem;
            font-size: 1.18rem;
            width: auto;
          }
        }
        .navbar-cta:hover {
          background: #2565F5;
          color: #fff;
        }
        .cta-arrow {
          color: #2565F5;
          font-weight: 700;
          margin-left: 0.31em;
        }
        .navbar-cta:hover .cta-arrow {
          color: #fff;
        }
        .navbar-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1002;
        }
        @media (min-width: 992px) {
          .navbar-hamburger {
            display: none;
          }
        }
        .hamburger-line {
          width: 100%;
          height: 3px;
          background: #181b28;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }
        .navbar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
        @media (min-width: 992px) {
          .navbar-overlay {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
