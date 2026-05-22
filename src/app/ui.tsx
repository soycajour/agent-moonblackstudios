'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ── SVG Logo (crescent moon + wordmark) ── */
function Logo() {
  return (
    <svg width="140" height="32" viewBox="0 0 140 32" fill="none" aria-label="MoonBlack Studios">
      {/* Crescent moon */}
      <path
        d="M14 4C9.03 4 5 8.03 5 13C5 17.97 9.03 22 14 22C15.8 22 17.47 21.45 18.87 20.52C16.1 19.38 14.2 16.64 14.2 13.47C14.2 10.3 16.1 7.56 18.87 6.42C17.47 5.49 15.8 4 14 4Z"
        fill="white"
      />
      {/* MoonBlack text */}
      <text x="28" y="17" fontFamily="var(--font-manrope), system-ui" fontWeight="800" fontSize="13" fill="white" letterSpacing="-0.3">
        MoonBlack
      </text>
      <text x="28" y="27" fontFamily="var(--font-manrope), system-ui" fontWeight="400" fontSize="7.5" fill="oklch(45% 0.008 260)" letterSpacing="0.25em">
        STUDIOS
      </text>
    </svg>
  );
}

/* ── Announcement bar (above navbar) ── */
export function AnnouncementBar() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 101,
      background: 'oklch(62% 0.22 27)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.45rem 1rem',
      fontSize: '0.78rem',
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '0.01em',
    }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', opacity: 0.9, display: 'inline-block', animation: 'pulse 2s ease-in-out infinite', flexShrink: 0 }} />
      Solo 5 contratistas por zona&nbsp;—&nbsp;2 zonas disponibles
    </div>
  );
}

/* ── Navbar ── */
export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 60], ['oklch(8% 0.006 260 / 0)', 'oklch(8% 0.006 260 / 0.92)']);
  const border = useTransform(scrollY, [0, 60], ['oklch(22% 0.01 260 / 0)', 'oklch(22% 0.01 260 / 1)']);

  return (
    <motion.header
      style={{ position: 'fixed', top: '2rem', left: 0, right: 0, zIndex: 100 }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <motion.nav
          style={{
            display: 'flex', alignItems: 'center', gap: '2.5rem',
            width: '100%',
            padding: '0.65rem 1.25rem',
            borderRadius: '9999px',
            background: bg,
            border: '1px solid',
            borderColor: border,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <Logo />

          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {['Sistema', 'Resultados', 'Demo'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ fontSize: '0.83rem', fontWeight: 600, color: 'oklch(60% 0.008 260)', letterSpacing: '0.01em' }}
                whileHover={{ color: 'oklch(96% 0.005 260)' }}
                transition={{ duration: 0.15 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/planes"
            className="nav-cta"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              background: 'oklch(62% 0.22 27)',
              color: '#fff',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
            whileHover={{ background: 'oklch(55% 0.18 27)', scale: 1.03 }}
            transition={{ duration: 0.15 }}
          >
            Solicitar Acceso
          </motion.a>
        </motion.nav>
      </div>
    </motion.header>
  );
}
