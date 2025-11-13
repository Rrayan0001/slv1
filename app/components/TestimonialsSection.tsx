"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    text: `"S L V Cargo consistently delivers our projects on schedule with exceptional attention to detail. Their logistics orchestration and professional handling make them our trusted partner for all cargo needs."`,
    user: {
      name: "Logistics Manager",
      title: "Bosch",
      avatar: "/avatar1.jpg"
    }
  },
  {
    stars: 5,
    text: `"Flawless coordination and reliable teams—we trust S L V Cargo for every critical relocation. Their end-to-end delivery service ensures our cargo reaches safely and on time, every time."`,
    user: {
      name: "Administration Lead",
      title: "Mahindra",
      avatar: "/avatar2.jpg"
    }
  },
  {
    stars: 5,
    text: `"S L V Cargo Movers and Packers has been our logistics partner for years. Their professional packing services and cargo moving expertise have never disappointed. 98% on-time delivery rate speaks for itself."`,
    user: {
      name: "Operations Manager",
      title: "Rivigo",
      avatar: "/avatar3.jpg"
    }
  },
  {
    stars: 5,
    text: `"India's trusted cargo experts indeed! S L V Cargo handles our freight with precision and care. Their 18+ years of experience shows in every shipment. Highly recommended for enterprise logistics."`,
    user: {
      name: "Supply Chain Head",
      title: "FSL",
      avatar: "/avatar4.jpg"
    }
  },
  {
    stars: 5,
    text: `"Working with S L V Cargo on our ABFRL project has been exceptional. Their freight movers service and logistics solutions are top-notch. Professional, reliable, and always on schedule."`,
    user: {
      name: "Project Manager",
      title: "ABFRL",
      avatar: "/emma.jpg"
    }
  },
];

const STAR = (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <path d="M10 15.27L16.18 18L14.54 11.97L19 7.24L12.81 6.63L10 1L7.19 6.63L1 7.24L5.46 11.97L3.82 18L10 15.27Z" fill="#FFA52F"/>
  </svg>
);

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", marginBottom: "16px" }}>
      {[...Array(5)].map((_, i) =>
        <span key={i} style={{ opacity: i < count ? 1 : 0.25 }}>{STAR}</span>
      )}
    </div>
  );
}

const QUOTE = (
  <svg width="38" height="38" fill="none"><path d="M8 32H15V20H12V16H15V13H8V20H11V32ZM23 32H30V20H27V16H30V13H23V20H26V32Z" fill="#A9B7E6"/></svg>
);

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActive(a => (a + 1) % testimonials.length);
    }, 7000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [active]);

  function prev() {
    setActive(a => (a === 0 ? testimonials.length - 1 : a - 1));
  }
  function next() {
    setActive(a => (a + 1) % testimonials.length);
  }

  return (
    <section className="testimonials-section">
      <div className="testimonial-left-card">
        <div className="testimonial-left-inner">
          <p className="testimonials-title-sub">CLIENTS TESTIMONIALS!</p>
          <div className="testimonials-title">
            Clients Say <br/>
            <span>About us</span>
          </div>
        </div>
        <div className="testimonials-arrows">
          <button onClick={prev} className="arrow-btn">{'<'}</button>
          <button onClick={next} className="arrow-btn active">{'>'}</button>
        </div>
      </div>
      
      <div className="testimonial-content-wrap">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={active}
            className="testimonial-content"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.42, type: 'spring' }}
          >
            <Stars count={testimonials[active].stars} />
            <p className="testimonial-text">{testimonials[active].text}</p>
            <div className="testimonial-footer">
              <div>
                <div className="testimonial-user-name">{testimonials[active].user.name}</div>
                <div className="testimonial-user-title">{testimonials[active].user.title}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <style jsx>{`
        .testimonials-section {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          width: 100%;
          box-sizing: border-box;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .testimonials-section {
            flex-direction: row;
            padding: 2rem;
          }
        }
        .testimonial-left-card {
          background: #0d1a2b;
          color: #fff;
          width: 100%;
          min-width: auto;
          max-width: 100%;
          height: auto;
          min-height: 280px;
          border-radius: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          padding: 2rem 1.5rem;
          margin-right: 0;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 768px) {
          .testimonial-left-card {
            min-width: 370px;
            max-width: 430px;
            height: 320px;
            border-radius: 62px 0.85rem 62px 62px;
            padding: 2.5rem 1.6rem 2.7rem 2.1rem;
            margin-right: 2rem;
            margin-bottom: 0;
          }
        }
        .testimonial-left-inner {
          z-index: 2;
        }
        .testimonials-title-sub {
          font-size: 1.13rem;
          letter-spacing: 1.6px;
          color: #a9bffe;
          font-weight: bold;
          margin-bottom: 1.15rem;
          line-height: 1.2;
        }
        .testimonials-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          line-height: 1.1;
        }
        @media (min-width: 640px) {
          .testimonials-title {
            font-size: 2.4rem;
          }
        }
        @media (min-width: 768px) {
          .testimonials-title {
            font-size: 2.8rem;
          }
        }
        .testimonials-title span { color: #2565F5; }
        .testimonials-arrows {
          display: flex;
          gap: 0.9rem;
          margin-top: 1.6rem;
        }
        .arrow-btn {
          background: #fff;
          color: #2565F5;
          border: none;
          border-radius: 1rem;
          width: 64px;
          height: 64px;
          font-size: 2rem;
          font-weight: bold;
          box-shadow: 0 2px 12px rgba(37,101,245,0.1);
          outline: none;
          cursor: pointer;
          transition: background .17s, color .17s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .arrow-btn.active, .arrow-btn:hover {
          background: #2565F5;
          color: #fff;
        }
        .testimonial-content-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          min-width: 0;
        }
        .testimonial-content {
          background: transparent;
          border-radius: 2rem;
          width: 100%;
          padding: 32px 10px 28px 8px;
          color: #676787;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
        }
        .testimonial-text {
          font-size: 1.1rem;
          font-family: 'Georgia', serif;
          color: #696979;
          margin-bottom: 24px;
          font-style: italic;
          font-weight: 400;
          line-height: 1.5;
          max-width: 100%;
        }
        @media (min-width: 640px) {
          .testimonial-text {
            font-size: 1.5rem;
            line-height: 1.4;
          }
        }
        @media (min-width: 768px) {
          .testimonial-text {
            font-size: 1.8rem;
            line-height: 1.3;
            max-width: 80vw;
          }
        }
        @media (min-width: 1024px) {
          .testimonial-text {
            font-size: 2.1rem;
            line-height: 1.25;
          }
        }
        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          margin-top: 1.5rem;
        }
        .testimonial-avatar {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid #e8effd;
        }
        .testimonial-user-name {
          font-weight: bold;
          color: #192040;
          font-size: 1.09rem;
        }
        .testimonial-user-title {
          color: #8d91b6;
          font-size: 0.99rem;
        }
        .testimonial-quote {
          margin-left: auto;
          color: #a9b7e6;
          display: flex;
        }
        .arrow-btn {
          min-width: 44px;
          min-height: 44px;
        }
      `}</style>
    </section>
  );
}

