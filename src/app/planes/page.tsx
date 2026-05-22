'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '../components';

const S = {
  section: { padding: 'clamp(2rem, 5vw, 4rem) 0' } as React.CSSProperties,
  h1: { fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, color: 'oklch(96% 0.005 260)' } as React.CSSProperties,
  p: { fontSize: '1rem', lineHeight: 1.6, color: 'oklch(75% 0.007 260)' } as React.CSSProperties,
};

export default function PlanesPage() {
  return (
    <>
      <main id="main" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        {/* Background Glow — enlarged + brighter */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: '100vw', maxWidth: 1000, height: 700, background: 'oklch(62% 0.22 27 / 0.05)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

        {/* Back Link & Branding */}
        <header style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '2rem 1.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          <Link href="/" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'oklch(75% 0.007 260)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ← Volver a la demo
          </Link>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'oklch(55% 0.008 260)' }}>
            MoonBlack Studios
          </span>
        </header>

        {/* Decision Content */}
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem 1.5rem 4rem', zIndex: 10 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
            
            <Reveal>
              <h1 style={{ ...S.h1, maxWidth: '28ch', margin: '0 auto 2.5rem' }}>
                Esto es lo mismo que tus clientes experimentarían dentro de tu negocio.
              </h1>
            </Reveal>

            {/* Core Capabilities Grid — with hover states */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '4rem', textAlign: 'left' }}>
              {[
                { title: "Responde en segundos", desc: "Nunca dejes a un prospecto esperando. Automatización instantánea." },
                { title: "Sigue conversaciones", desc: "Mantiene el chat activo sin importar el día o la hora." },
                { title: "Filtra curiosos", desc: "Descarta leads sin presupuesto ni urgencia real antes de agendar." },
                { title: "Cubre llamadas perdidas", desc: "Envía un mensaje automático inmediato si no logras responder a tiempo." },
                { title: "Evita que se enfríen", desc: "Nutre y da seguimiento a los prospectos de manera orgánica." },
                { title: "Funciona en obra", desc: "El bot atiende el negocio mientras tú estás trabajando en el techo." }
              ].map((cap, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <motion.div
                    whileHover={{ y: -4, borderColor: 'oklch(62% 0.22 27 / 0.5)' }}
                    transition={{ duration: 0.3, ease: [0.25, 0, 0, 1] }}
                    style={{ padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '1rem', height: '100%' }}
                  >
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'oklch(96% 0.005 260)', marginBottom: '0.5rem' }}>{cap.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'oklch(75% 0.007 260)', lineHeight: 1.5 }}>{cap.desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* Pricing Section */}
            <Reveal delay={0.3}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '700px', margin: '0 auto', textAlign: 'left' }} className="two-col">
                
                {/* Monthly Plan */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
                  whileHover={{ y: -4, borderColor: 'oklch(22% 0.01 260)' }}
                  style={{ padding: '2.5rem 2rem', background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'oklch(96% 0.005 260)', marginBottom: '0.5rem' }}>Mensual</h3>
                    <p style={{ fontSize: '0.9rem', color: 'oklch(75% 0.007 260)', marginBottom: '1.5rem', lineHeight: 1.4 }}>Ideal si quieres probar el sistema primero.</p>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'oklch(96% 0.005 260)' }}>$497</span>
                      <span style={{ fontSize: '0.9rem', color: 'oklch(75% 0.007 260)' }}>/mes</span>
                    </div>
                  </div>
                  <a href="https://link.moonblackstudios.com/payment-link/6a072d6c1d5a394a682e4c3c" className="btn btn-ghost" style={{ justifyContent: 'center', width: '100%', padding: '0.9rem 1.25rem', fontSize: '0.88rem' }}>
                    Empezar mensual
                  </a>
                </motion.div>

                {/* Annual Plan (Recommended) — with glow + hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0, 1] }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 0 60px oklch(62% 0.22 27 / 0.25)' 
                  }}
                  style={{ 
                    padding: '2.5rem 2rem', 
                    background: 'var(--surface-2)', 
                    border: '2px solid var(--accent)', 
                    borderRadius: '1.25rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    position: 'relative',
                    boxShadow: '0 0 40px oklch(62% 0.22 27 / 0.15)'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-12px', right: '1.5rem', background: 'var(--accent)', color: '#fff', fontSize: '0.75rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Recomendado
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'oklch(96% 0.005 260)', marginBottom: '0.5rem' }}>Anual</h3>
                    <p style={{ fontSize: '0.9rem', color: 'oklch(75% 0.007 260)', marginBottom: '1.5rem', lineHeight: 1.4 }}>Prioridad de implementación, configuración preferencial y soporte directo.</p>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'oklch(96% 0.005 260)' }}>$4,970</span>
                      <span style={{ fontSize: '0.9rem', color: 'oklch(75% 0.007 260)' }}>/año</span>
                    </div>
                  </div>
                  <a href="https://link.moonblackstudios.com/payment-link/6a072d6e8b5b8ce07e5d1718" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '0.9rem 1.25rem', fontSize: '0.88rem' }}>
                    Bloquear mi zona
                  </a>
                </motion.div>

              </div>
            </Reveal>

          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '2rem 0', zIndex: 10 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'oklch(55% 0.008 260)' }}>
              © {new Date().getFullYear()} MoonBlack Studios. Todos los derechos reservados.
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
