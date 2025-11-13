"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer-glass">
        <div className="footer-row newsletter-row">
          <div className="footer-left-world">
            <div className="footer-logo-wrap">
              <Image src="/1.png" alt="SLV Cargo Movers and Packers Logo" width={200} height={80} className="footer-logo" priority />
              <div className="ml-0 sm:ml-4 flex flex-col">
                <p className="text-white text-xs sm:text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
                  CARGO MOVERS AND PACKERS
                </p>
                <p className="text-gray-300 text-[10px] sm:text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                  Logistics Made Simple
                </p>
              </div>
            </div>
          </div>
          <div className="footer-newsletter-col">
            <div className="footer-newsletter-header">
              <span>
                <span style={{ color: "#2a61ff" }}>Subscribe to</span><br/>
                <span style={{ color: "#fff" }}>Our Newsletter</span>
              </span>
            </div>
            <form className="footer-newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                className="newsletter-input" placeholder="Enter Your Email Address" type="email" required
              />
              <button className="newsletter-btn" type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>
        <div className="footer-row links-row">
          <div className="footer-column">
            <div className="footer-col-title">Working Hours</div>
            <ul>
              <li>Mon to Sat : 9:00 AM - 6:00 PM</li>
              <li>Sunday : Closed</li>
            </ul>
          </div>
          <div className="footer-column">
            <div className="footer-col-title">Say Hello</div>
            <ul>
              <li>
                <a href="mailto:slvcargomoverss@gmail.com">
                  slvcargomoverss@gmail.com
                </a>
              </li>
              <li>+91 99013 89430</li>
              <li>
                <a href="https://wa.me/919901389430" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +91 99013 89430
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-row">
          <span>Terms and conditions</span>
          <span className="footer-bottom-copy">© 2024 S L V Cargo Movers and Packers</span>
          <span>Privacy policy</span>
        </div>
      </div>
      <style jsx>{`
        .footer-bg {
          background: #ffffff;
          padding: 0;
        }
        .footer-glass {
          border-radius: 1rem;
          margin: 1rem 0.5rem 0.5rem 0.5rem;
          padding-bottom: 0.7rem;
          background: #191f38;
          box-shadow: 0 8px 48px rgba(0,0,0,0.1) inset, 0 2px 36px rgba(0,0,0,0.05), 0 8px 40px rgba(0,0,0,0.1);
          overflow: hidden;
          position: relative;
        }
        @media (min-width: 640px) {
          .footer-glass {
            border-radius: 1.5rem;
            margin: 1.5rem 1rem 1rem 1rem;
          }
        }
        @media (min-width: 768px) {
          .footer-glass {
            border-radius: 2.2rem;
            margin: 2rem 1.1rem 1rem 1.1rem;
          }
        }
        .footer-row {
          display: flex;
          gap: 3rem;
          align-items: flex-start;
        }
        .newsletter-row {
          padding: 1.5rem 1rem 1rem 1rem;
          align-items: flex-start;
          border-bottom: 2px solid #16316744;
        }
        @media (min-width: 640px) {
          .newsletter-row {
            padding: 2rem 1.2rem 1.2rem 1.5rem;
          }
        }
        @media (min-width: 768px) {
          .newsletter-row {
            padding: 2.8rem 1.5rem 1.3rem 2.2rem;
          }
        }
        .footer-left-world {
          min-width: auto;
          max-width: 100%;
          width: 100%;
        }
        @media (min-width: 640px) {
          .footer-left-world {
            min-width: 240px;
            max-width: 310px;
            width: auto;
          }
        }
        .footer-logo-wrap {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @media (min-width: 640px) {
          .footer-logo-wrap {
            margin-bottom: 1.5rem;
            flex-wrap: nowrap;
            gap: 0;
          }
        }
        .footer-logo {
          width: auto;
          height: 60px;
          max-width: 150px;
          object-fit: contain;
          filter: drop-shadow(0 2px 10px #2e8cf940);
        }
        @media (min-width: 640px) {
          .footer-logo {
            height: 70px;
            max-width: 180px;
          }
        }
        @media (min-width: 768px) {
          .footer-logo {
            height: 80px;
            max-width: 200px;
          }
        }
        .footer-newsletter-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-right: 2.8rem;
        }
        .footer-newsletter-header {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.12;
          letter-spacing: 0.01em;
        }
        @media (min-width: 640px) {
          .footer-newsletter-header {
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
          }
        }
        @media (min-width: 768px) {
          .footer-newsletter-header {
            font-size: 2.2rem;
            margin-bottom: 1.3rem;
          }
        }
        .footer-newsletter-form {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.14);
          border-radius: 1.1rem;
          box-shadow: 0 4px 38px #61aaff63 inset;
          overflow: hidden;
        }
        .newsletter-input {
          flex: 1;
          padding: 0.9rem 1rem;
          font-size: 0.9rem;
          border-radius: 1.1rem 0 0 1.1rem;
          border: none;
          outline: none;
          background: #fff;
          color: #224566;
          font-weight: 500;
          min-height: 44px;
        }
        @media (min-width: 640px) {
          .newsletter-input {
            padding: 1rem 1.2rem;
            font-size: 1rem;
          }
        }
        @media (min-width: 768px) {
          .newsletter-input {
            padding: 1.18rem 1.32rem;
            font-size: 1.11rem;
          }
        }
        .newsletter-btn {
          background: linear-gradient(135deg, #2266fa 18%, #388cff 82%);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          border: none;
          padding: 0.9rem 1.5rem;
          border-radius: 0 1.1rem 1.1rem 0;
          cursor: pointer;
          box-shadow: 0 2px 12px #2380f533;
          transition: background 0.17s;
          min-height: 44px;
          white-space: nowrap;
        }
        @media (min-width: 640px) {
          .newsletter-btn {
            font-size: 1rem;
            padding: 1rem 2rem;
          }
        }
        @media (min-width: 768px) {
          .newsletter-btn {
            font-size: 1.15rem;
            padding: 1.18rem 2.35rem;
          }
        }
        .newsletter-btn:hover {
          background: linear-gradient(135deg, #388cff 23%, #2266fa 88%);
        }
        .links-row {
          padding: 1.5rem 1rem 1rem 1rem;
        }
        @media (min-width: 640px) {
          .links-row {
            padding: 1.8rem 1.5rem 1.2rem 1.5rem;
          }
        }
        @media (min-width: 768px) {
          .links-row {
            padding: 2.1rem 2.2rem 1.3rem 2.2rem;
          }
        }
        .footer-column {
          min-width: auto;
          margin: 0;
          width: 100%;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 640px) {
          .footer-column {
            min-width: 150px;
            margin: 0 1rem;
            width: auto;
            margin-bottom: 0;
          }
        }
        @media (min-width: 768px) {
          .footer-column {
            min-width: 170px;
            margin: 0 2.2rem;
          }
        }
        .footer-col-title {
          color: #2565F5;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.8rem;
          letter-spacing: 0.03em;
        }
        @media (min-width: 640px) {
          .footer-col-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }
        }
        @media (min-width: 768px) {
          .footer-col-title {
            font-size: 1.15rem;
            margin-bottom: 1.08rem;
          }
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9rem;
          color: #bedcff;
        }
        @media (min-width: 640px) {
          .footer-column ul {
            font-size: 1rem;
          }
        }
        @media (min-width: 768px) {
          .footer-column ul {
            font-size: 1.08rem;
          }
        }
        .footer-column ul li { margin-bottom: 0.5rem; }
        .footer-column ul li a {
          color: #bedcff;
          text-decoration: underline;
        }
        .footer-bottom-row {
          border-top: 1px solid #233453;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 1rem 1rem 0.5rem 1rem;
          font-size: 0.85rem;
          color: #96b0e0;
          gap: 0.75rem;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-bottom-row {
            flex-direction: row;
            padding: 1.05rem 1.2rem 0.5rem 1.2rem;
            font-size: 0.95rem;
            gap: 1rem;
            text-align: left;
          }
        }
        @media (min-width: 768px) {
          .footer-bottom-row {
            padding: 1.05rem 1.3rem 0.5rem 1.3rem;
            font-size: 1.01rem;
            gap: 24px;
          }
        }
        .footer-bottom-copy {
          margin-left: 0;
          color: #388cff;
          font-weight: 700;
          font-size: 0.9rem;
        }
        @media (min-width: 640px) {
          .footer-bottom-copy {
            margin-left: auto;
            font-size: 1rem;
          }
        }
        @media (min-width: 768px) {
          .footer-bottom-copy {
            font-size: 1.1rem;
          }
        }
        @media (max-width: 1100px) {
          .footer-row, .newsletter-row, .links-row {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
            padding: 0.7rem 1rem;
          }
          .footer-left-world, .footer-newsletter-col {
            width: 100%;
            max-width: 100%;
            padding-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </footer>
  );
}
