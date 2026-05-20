'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ── Shared animation variants ── */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0, 0, 1] } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ── Reveal wrapper ── */
export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.25, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}


/* ── Animated counter ── */
export function StatNumber({ value, label, className = '' }: { value: string; label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
      className={className}
      style={{ textAlign: 'center' }}
    >
      <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: 'oklch(96% 0.005 260)' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(45% 0.008 260)', marginTop: '0.5rem' }}>
        {label}
      </div>
    </motion.div>
  );
}

/* ── Hover card ── */
export function HoverCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -6, borderColor: 'oklch(62% 0.22 27 / 0.4)' }}
      transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
    >
      <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: 'oklch(62% 0.22 27)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
        0{num}
      </div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em', color: 'oklch(96% 0.005 260)' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'oklch(55% 0.008 260)', lineHeight: 1.65 }}>
        {desc}
      </p>
    </motion.div>
  );
}
