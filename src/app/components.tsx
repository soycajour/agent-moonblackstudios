'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState, MouseEvent } from 'react';

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


export function StatNumber({ value, label, className = '' }: { value: string; label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (inView) {
      const match = value.match(/[\d.]+/);
      if (match) {
        const num = parseFloat(match[0]);
        const prefix = value.substring(0, match.index);
        const suffix = value.substring(match.index! + match[0].length);
        const isFloat = match[0].includes('.');
        
        const controls = animate(0, num, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (v) => {
            const formatted = isFloat ? v.toFixed(1) : Math.round(v).toString();
            setDisplayValue(prefix + formatted + suffix);
          }
        });
        return controls.stop;
      } else {
        setDisplayValue(value);
      }
    }
  }, [inView, value]);

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
        {displayValue}
      </div>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(55% 0.008 260)', marginTop: '0.5rem' }}>
        {label}
      </div>
    </motion.div>
  );
}

/* ── Hover card (Bento Ready) ── */
export function HoverCard({ num, title, desc, featured }: { num: string; title: string; desc: string; featured?: boolean }) {
  return (
    <motion.div
      className={`card ${featured ? 'bento-featured glass-panel' : ''}`}
      whileHover={{ y: -6, borderColor: 'oklch(62% 0.22 27 / 0.4)' }}
      transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
      style={featured ? { padding: 'var(--space-12)' } : {}}
    >
      <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: 'oklch(62% 0.22 27)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
        0{num}
      </div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em', color: 'oklch(96% 0.005 260)' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'oklch(75% 0.007 260)', lineHeight: 1.65 }}>
        {desc}
      </p>
    </motion.div>
  );
}

/* ── Demo CTA card with motion ── */
export function DemoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
      className="card"
      style={{
        background: 'oklch(11% 0.008 260)',
        borderColor: 'var(--border-subtle)',
        padding: '2.5rem 2rem',
        borderRadius: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '380px',
        position: 'relative',
        overflow: 'hidden',
        filter: 'drop-shadow(0 20px 60px oklch(0% 0 0 / 0.3))',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'oklch(62% 0.22 27 / 0.12)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Pulsing status dot */}
      <motion.div
        animate={{
          boxShadow: ['0 0 0 0 oklch(62% 0.22 27 / 0.4)', '0 0 0 8px oklch(62% 0.22 27 / 0)']
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'oklch(62% 0.22 27)',
          zIndex: 10
        }}
      />

      {/* Icon */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'oklch(17% 0.01 260)',
        border: '1px solid oklch(62% 0.22 27 / 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '2px solid oklch(62% 0.22 27 / 0.4)',
          animation: 'pulse 2s infinite'
        }} />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="oklch(62% 0.22 27)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'oklch(96% 0.005 260)', marginBottom: '0.75rem' }}>
        Prueba el Agente en Vivo
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'oklch(75% 0.007 260)', lineHeight: 1.5, maxWidth: '28ch', marginBottom: '2rem' }}>
        Toca la burbuja de chat en la esquina inferior derecha de la pantalla para hablar directamente con él.
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.8rem',
        fontWeight: 700,
        color: 'oklch(62% 0.22 27)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        Pruébalo aquí abajo
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(45deg)' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </motion.div>
  );
}

/* ── Premium Glass Pricing Card ── */
export function PricingCard() {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className="spotlight-card glass-panel" 
      style={{ padding: 'var(--space-8)' }}
      onMouseMove={handleMouseMove}
    >
      <p className="section-label" style={{ marginBottom: '1.25rem', color: 'var(--accent)' }}>Tu inversión</p>
      <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.4rem', color: '#fff' }}>
        $497
        <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)', marginLeft: '0.4rem' }}>USD / mes</span>
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.72 }}>
        Un solo contrato de $24k paga 4 años. El resto es ganancia pura que hoy se va con tu competencia.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2.5rem' }}>
        {[
          'Operando en 7 días — sin fricción',
          'Tu zona bloqueada para la competencia',
          'Clientes calificados directo a tu calendario',
          'Soporte priority mientras escalas',
        ].map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
            <div style={{ background: 'var(--green)', borderRadius: '50%', padding: '2px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span style={{ color: 'var(--text-primary)' }}>{f}</span>
          </div>
        ))}
      </div>
      
      <a href="/planes" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
        Quiero contratos, no leads
      </a>
    </div>
  );
}
