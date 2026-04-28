'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ['oklch(8% 0.006 260 / 0)', 'oklch(8% 0.006 260 / 0.85)']);
  const border = useTransform(scrollY, [0, 80], ['oklch(22% 0.01 260 / 0)', 'oklch(22% 0.01 260 / 1)']);

  return (
    <motion.header
      style={{
        position: 'fixed', top: '1.25rem', left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'center',
      }}
    >
      <motion.nav
        style={{
          display: 'flex', alignItems: 'center', gap: '2.5rem',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          background: bg,
          border: '1px solid',
          borderColor: border,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
      >
        <Image src="/logo.png" alt="MoonBlack Studios" width={120} height={28} style={{ height: 24, width: 'auto', filter: 'invert(1)' }} />

        <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="nav-links">
          {['Sistema', 'Resultados', 'Demo'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: '0.82rem', fontWeight: 600, color: 'oklch(60% 0.008 260)', letterSpacing: '0.01em' }}
              whileHover={{ color: 'oklch(96% 0.005 260)' }}
              transition={{ duration: 0.15, property: 'color' }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#demo"
          className="nav-cta"
          style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '0.45rem 1.1rem',
            borderRadius: '9999px',
            background: 'oklch(62% 0.22 27)',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
          whileHover={{ background: 'oklch(55% 0.18 27)', scale: 1.03 }}
          transition={{ duration: 0.15, property: 'background, transform' }}
        >
          Solicitar Acceso
        </motion.a>
      </motion.nav>
    </motion.header>
  );
}

export function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'agent', text: 'Detecto interés en escalar roofing. Directo al punto: ¿cuántos techos cierras al mes?' },
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);

  const responses = [
    'Entendido. Con ese volumen tienes equipo operativo pero falta filtrado. ¿Cuál es tu ticket promedio por instalación?',
    'Perfecto. La infraestructura califica al homeowner antes de que toques el teléfono. ¿Cuánto tiempo tardas actualmente en responder un lead nuevo?',
    'Ahí está el problema. Has visto suficiente. Si tu zona está disponible, hablemos de implementar esto. Haz clic en "Asegurar mi Zona".',
  ];

  const send = () => {
    if (!input.trim()) return;
    const next = [...messages, { role: 'user', text: input }];
    if (step < responses.length) {
      next.push({ role: 'agent', text: responses[step] });
      setStep(step + 1);
    }
    setMessages(next);
    setInput('');
  };

  return (
    <div style={{ background: 'oklch(11% 0.008 260)', border: '1px solid oklch(22% 0.01 260)', borderRadius: '1.25rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 440 }}>
      <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid oklch(18% 0.008 260)', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'oklch(13% 0.009 260)' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'oklch(72% 0.18 142)', animation: 'pulse 2s ease-in-out infinite' }} />
        <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(62% 0.01 260)' }}>
          MoonBlack AI Agent — En Vivo
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {messages.map((m, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: '82%',
              alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
              padding: '0.7rem 1rem',
              borderRadius: m.role === 'user' ? '1rem 1rem 0.25rem 1rem' : '1rem 1rem 1rem 0.25rem',
              background: m.role === 'user' ? 'oklch(62% 0.22 27)' : 'oklch(14% 0.01 260)',
              border: m.role === 'agent' ? '1px solid oklch(22% 0.01 260)' : 'none',
              fontSize: '0.85rem',
              lineHeight: 1.5,
              color: m.role === 'user' ? '#fff' : 'oklch(80% 0.006 260)',
            }}
          >
            {m.text}
          </motion.div>
        ))}
      </div>

      <div style={{ padding: '0.875rem 1rem', borderTop: '1px solid oklch(18% 0.008 260)', display: 'flex', gap: '0.5rem' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder={step >= responses.length ? 'Solicita acceso…' : 'Escribe tu respuesta…'}
          disabled={step >= responses.length}
          name="chat-message"
          autoComplete="off"
          aria-label="Mensaje al agente"
          style={{
            flex: 1, background: 'oklch(14% 0.01 260)', border: '1px solid oklch(22% 0.01 260)', borderRadius: '0.5rem',
            padding: '0.6rem 0.875rem', fontSize: '0.83rem', color: 'oklch(80% 0.006 260)',
            outline: 'none', fontFamily: 'inherit',
          }}
        />
        <motion.button
          onClick={send}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Enviar mensaje"
          style={{ background: 'oklch(62% 0.22 27)', border: 'none', borderRadius: '0.5rem', padding: '0.6rem 1rem', color: '#fff', fontSize: '0.83rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
        >
          →
        </motion.button>
      </div>
    </div>
  );
}
