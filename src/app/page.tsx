import { Navbar, AnnouncementBar, ChatWidget } from './ui';
import { Reveal, StatNumber, HoverCard } from './components';
import { HeroDashboard } from './dashboard';

const S = {
  section: { padding: 'clamp(5rem, 10vw, 9rem) 0' } as React.CSSProperties,
  h2: { fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'oklch(96% 0.005 260)' } as React.CSSProperties,
  p: { fontSize: '1rem', lineHeight: 1.72, color: 'oklch(58% 0.008 260)' } as React.CSSProperties,
};

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      {/* ── HERO ── */}
      <main id="main">
      <section style={{ ...S.section, paddingTop: 'clamp(10rem, 20vw, 15rem)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div aria-hidden="true" style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'oklch(62% 0.22 27 / 0.07)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Tag pill */}
          <Reveal>
            <div className="tag" style={{ display: 'inline-flex', marginBottom: '1.75rem' }}>
              Agente MoonBlack
            </div>
          </Reveal>

          {/* H1 */}
          <Reveal delay={0.1}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '20ch', margin: '0 auto 1.5rem', color: 'oklch(96% 0.005 260)' }}>
              Tu asistente de ventas para{' '}
              <span style={{ color: 'oklch(62% 0.22 27)' }}>roofers</span>{' '}
              que quieren más contratos.
            </h1>
          </Reveal>

          {/* Subhead */}
          <Reveal delay={0.2}>
            <p style={{ ...S.p, maxWidth: '56ch', margin: '0 auto 2.25rem', fontSize: '1rem' }}>
              El Agente MoonBlack atiende, califica y agenda citas con homeowners que ya
              decidieron que quieren un techo nuevo — para que tú solo cierres.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <a href="#demo" className="btn btn-primary">
                Quiero más contratos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#resultados" className="btn btn-ghost">Ver resultados reales</a>
            </div>
          </Reveal>

          {/* Dashboard hero */}
          <div style={{ position: 'relative' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: '-2px', borderRadius: '1.2rem', background: 'oklch(62% 0.22 27 / 0.1)', filter: 'blur(40px)', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', borderTop: '1px solid oklch(18% 0.008 260)', borderBottom: '1px solid oklch(18% 0.008 260)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2.5rem' }}>
            <StatNumber value="$312k" label="En nuevos contratos este trimestre" className="stat-num" />
            <StatNumber value="18" label="Cierres sin una sola llamada en frío" className="stat-num" />
            <StatNumber value="0" label="Leads basura atendidos por el equipo" className="stat-num" />
            <StatNumber value="4.2×" label="ROI promedio del primer mes" className="stat-num" />
          </div>
        </div>
      </section>

      {/* ── SISTEMA (beneficios, no features) ── */}
      <section id="sistema" style={{ ...S.section, scrollMarginTop: '5rem' }}>
        <div className="container">
          <Reveal>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Lo que ganas</p>
            <h2 style={{ ...S.h2, maxWidth: '20ch', marginBottom: '1rem' }}>
              Tu agenda llena de gente que ya quiere comprar.
            </h2>
            <p style={{ ...S.p, maxWidth: '52ch', marginBottom: '4rem' }}>
              Deja de gastar energía convenciendo. Empieza a elegir con cuáles clientes trabajas.
              Así se siente tener control real de tu negocio.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              {
                num: '1',
                title: 'Tu tiempo vale más que antes.',
                desc: 'Terminas el día habiendo hablado solo con personas que tienen el dinero, la casa y la decisión lista. No más horas perdidas explicándole a alguien que "solo estaba preguntando".',
              },
              {
                num: '2',
                title: 'Nunca más pierdes un contrato por lentitud.',
                desc: 'El homeowner que busca techo a las 10pm recibe respuesta de inmediato. Para cuando tu competencia llegue mañana, tú ya tienes la cita agendada.',
              },
              {
                num: '3',
                title: 'Tu negocio crece aunque estés en el techo.',
                desc: 'El flujo de clientes no depende de si estás disponible, si tu vendedor llegó o si es fin de semana. Funciona solo. Eso es una empresa, no un auto-empleo.',
              },
            ].map((c) => (
              <Reveal key={c.num}>
                <HoverCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section id="resultados" style={{ ...S.section, scrollMarginTop: '5rem', background: 'oklch(10% 0.007 260)', borderTop: '1px solid oklch(18% 0.008 260)', borderBottom: '1px solid oklch(18% 0.008 260)' }}>
        <div className="container">
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <Reveal>
                <p className="section-label" style={{ marginBottom: '1rem' }}>Lo que estás perdiendo hoy</p>
                <h2 style={{ ...S.h2, marginBottom: '2rem' }}>Cada semana sin esto son contratos que se van con tu competencia.</h2>
              </Reveal>
              {[
                {
                  t: 'Perdiste el contrato porque tardaste 6 minutos.',
                  d: 'El homeowner que llamó a las 8pm firmó con alguien más esta mañana. Eran $24,000 que no van a aparecer en tu cuenta.',
                },
                {
                  t: 'Tu mejor vendedor sigue persiguiendo fantasmas.',
                  d: 'Cada hora que pasa en leads que no califican es una hora que no está cerrando. Tu equipo es caro para usarlo como filtro.',
                },
                {
                  t: 'Tu negocio para cuando tú paras.',
                  d: 'Si te vas de vacaciones, si te enfermas, si tu equipo falla — el flujo se corta. Eso no es un negocio, es dependencia disfrazada de empresa.',
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem' }}>
                    <div style={{ flexShrink: 0, width: 20, height: 20, marginTop: 2, borderRadius: '50%', background: 'oklch(62% 0.22 27)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem', color: 'oklch(90% 0.005 260)' }}>{item.t}</div>
                      <p style={{ ...S.p, fontSize: '0.875rem' }}>{item.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="card" style={{ borderColor: 'oklch(62% 0.22 27 / 0.3)', background: 'oklch(12% 0.009 260)' }}>
                <p className="section-label" style={{ marginBottom: '1.25rem', color: 'oklch(62% 0.22 27)' }}>Tu inversión</p>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.4rem' }}>
                  $3,000
                  <span style={{ fontSize: '1rem', fontWeight: 400, color: 'oklch(45% 0.008 260)', marginLeft: '0.4rem' }}>USD / mes</span>
                </div>
                <p style={{ ...S.p, fontSize: '0.875rem', marginBottom: '2rem' }}>
                  Un solo contrato de $24k paga 8 meses. El resto es ganancia pura que hoy se va con tu competencia.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Operando en 7 días — sin fricción de tu parte',
                    'Tu zona bloqueada para la competencia',
                    'Clientes precalificados directo a tu calendario',
                    'Respaldo completo mientras escalas',
                  ].map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="oklch(72% 0.18 142)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      <span style={{ color: 'oklch(78% 0.006 260)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#demo" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Quiero contratos, no leads
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DEMO ── */}
      <section id="demo" style={{ ...S.section, scrollMarginTop: '5rem' }}>
        <div className="container">
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <Reveal>
                <p className="section-label" style={{ marginBottom: '1rem' }}>Pruébalo ahora</p>
                <h2 style={{ ...S.h2, marginBottom: '1.5rem' }}>
                  Este es el agente que trabaja por ti mientras duermes.
                </h2>
                <p style={{ ...S.p, marginBottom: '2rem' }}>
                  No te pedimos confianza. Habla con él como si fueras un homeowner buscando techo.
                  Fíjate cómo te califica antes de que tú levantes el teléfono.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Tus prospectos solo ven profesionalismo',
                    'Tú solo ves oportunidades reales',
                    'Tu equipo solo cierra, no filtra',
                  ].map((f, i) => (
                    <Reveal key={f} delay={i * 0.07}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'oklch(65% 0.008 260)' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'oklch(62% 0.22 27)', flexShrink: 0 }} />
                        {f}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <ChatWidget />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── AUTHORITY ── */}
      <section style={{ ...S.section, borderTop: '1px solid oklch(18% 0.008 260)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700, marginInline: 'auto' }}>
          <Reveal>
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Para quién es esto</p>
            <h2 style={{ ...S.h2, marginBottom: '1.5rem' }}>
              No es para todos. Y eso es intencional.
            </h2>
            <p style={{ ...S.p, marginBottom: '3rem' }}>
              Trabajamos con contratistas que ya tienen el equipo para crecer pero que pierden contratos
              por no tener el flujo de clientes bajo control.
              Si eso eres tú, hablamos. Si no, esto no es para ti.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'left', marginBottom: '3rem' }}>
              <div className="card">
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(62% 0.22 27)', marginBottom: '1rem' }}>Eres candidato si</p>
                {[
                  'Ya cierras techos y quieres cerrar más',
                  'Tienes crew listo para más trabajo',
                  'Quieres dejar de depender de referidos',
                ].map((r) => (
                  <div key={r} style={{ fontSize: '0.85rem', color: 'oklch(62% 0.008 260)', marginBottom: '0.5rem' }}>• {r}</div>
                ))}
              </div>
              <div className="card">
                <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(72% 0.18 142)', marginBottom: '1rem' }}>Lo que te llevás</p>
                {[
                  'Tu zona bloqueada — sin competidores',
                  'Citas con compradores, no curiosos',
                  'Un flujo que funciona sin ti presente',
                ].map((r) => (
                  <div key={r} style={{ fontSize: '0.85rem', color: 'oklch(62% 0.008 260)', marginBottom: '0.5rem' }}>• {r}</div>
                ))}
              </div>
            </div>
            <a href="#demo" className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '0.875rem 2.5rem' }}>
              Verificar disponibilidad en mi zona
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid oklch(18% 0.008 260)', padding: '2.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: 'oklch(35% 0.006 260)' }}>
            © {new Date().getFullYear()} MoonBlack Studios
          </span>
          <span style={{ fontSize: '0.75rem', color: 'oklch(30% 0.005 260)' }}>
            Más contratos. Menos ruido.
          </span>
        </div>
      </footer>
      </main>
    </>
  );
}
