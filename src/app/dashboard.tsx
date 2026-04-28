'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const accent = 'oklch(62% 0.22 27)';
const surface = 'oklch(11% 0.008 260)';
const surface2 = 'oklch(14% 0.01 260)';
const border = '1px solid oklch(22% 0.01 260)';
const textPrimary = 'oklch(94% 0.004 260)';
const textMuted = 'oklch(50% 0.007 260)';
const textSecondary = 'oklch(68% 0.008 260)';

/* ── Nav icons ── */
const icons: Record<string, string> = {
  Resumen:         'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  Leads:           'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
  'Citas Agendadas':'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  Contratos:       'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  Ingresos:        'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  Rendimiento:     'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  Configuración:   'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
};

function NavIcon({ path }: { path: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

/* ── KPI Card ── */
function KpiCard({ label, value, delta, iconPath, iconColor }: { label: string; value: string; delta: string; iconPath: string; iconColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
      style={{ background: surface2, border, borderRadius: '0.75rem', padding: '1rem 1.1rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: textMuted, letterSpacing: '0.01em' }}>{label}</span>
        <div style={{ width: 28, height: 28, borderRadius: '0.4rem', background: `${iconColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={iconPath} />
          </svg>
        </div>
      </div>
      <div style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', color: textPrimary, lineHeight: 1, marginBottom: '0.3rem', fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'oklch(72% 0.18 142)' }}>{delta}</div>
    </motion.div>
  );
}

/* ── Tag chip ── */
function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span style={{ fontSize: '0.62rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '9999px', background: `${color}22`, color, letterSpacing: '0.03em' }}>
      {label}
    </span>
  );
}

/* ── Sales Funnel SVG ── */
function Funnel() {
  const stages = [
    { label: 'Leads Entrantes',   value: '247', pct: 100, w: 200 },
    { label: 'Leads Calificados', value: '112', pct: 45,  w: 160 },
    { label: 'Citas Agendadas',   value: '38',  pct: 15,  w: 110 },
    { label: 'Contratos Cerrados',value: '18',  pct: 7,   w: 70  },
  ];
  return (
    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
      {/* SVG funnel */}
      <svg width="110" height="140" viewBox="0 0 110 140" aria-label="Embudo de ventas" role="img">
        <defs>
          <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(62% 0.22 27)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(45% 0.18 27)" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* trapezoid segments */}
        <polygon points="5,0 105,0 85,35 25,35"   fill="url(#fg)" opacity="1" />
        <polygon points="25,37 85,37 70,72 40,72"  fill="url(#fg)" opacity="0.8" />
        <polygon points="40,74 70,74 60,109 50,109" fill="url(#fg)" opacity="0.6" />
        <polygon points="50,111 60,111 56,140 54,140" fill="url(#fg)" opacity="0.4" />
      </svg>
      {/* Stage labels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1 }}>
        {stages.map((s) => (
          <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: textSecondary }}>{s.label}</span>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: textPrimary, fontVariantNumeric: 'tabular-nums' }}>{s.value}</span>
              <span style={{ fontSize: '0.65rem', color: textMuted }}>{s.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Dashboard ── */
export function HeroDashboard() {
  const navItems = ['Resumen', 'Leads', 'Citas Agendadas', 'Contratos', 'Ingresos', 'Rendimiento', 'Configuración'];

  const leads = [
    { name: 'John D. — Houston, TX', note: 'Interesado en reemplazo de techo', time: 'Hace 12 min', tag: 'Nuevo Lead', tagColor: accent },
    { name: 'Sarah M. — Katy, TX',   note: 'Cita para inspección — 28 Oct, 10:00 AM', time: 'Hace 35 min', tag: 'Cita Agendada', tagColor: 'oklch(72% 0.18 142)' },
    { name: 'Mike R. — Sugar Land, TX', note: 'Contrato firmado — $24,500',        time: 'Hace 2 hrs',   tag: 'Contrato Cerrado', tagColor: 'oklch(62% 0.2 260)' },
    { name: 'David L. — Rosenberg, TX', note: 'Interesado en techo de metal',     time: 'Hace 3 hrs',  tag: 'Nuevo Lead', tagColor: accent },
  ];

  const perfMetrics = [
    { label: 'Tiempo de Respuesta Prom.', value: '< 2 min', delta: '−85% vs manual', iconColor: accent,                 iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Leads Calificados',         value: '45%',      delta: '+15% vs manual', iconColor: 'oklch(72% 0.18 142)', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Llamadas Realizadas',        value: '0',        delta: '100% automatizadas', iconColor: 'oklch(65% 0.14 200)', iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
    { label: 'Satisfacción del Cliente',  value: '4.9/5',    delta: 'Basado en 127 reseñas', iconColor: 'oklch(78% 0.19 85)', iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.5, ease: [0.25, 0, 0, 1] }}
      style={{
        background: 'oklch(9.5% 0.007 260)',
        border: '1px solid oklch(20% 0.01 260)',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 40px 100px oklch(0% 0 0 / 0.55), 0 0 0 1px oklch(100% 0 0 / 0.04)',
        display: 'flex',
        minHeight: 480,
        maxHeight: 560,
        userSelect: 'none',
      }}
    >
      {/* ── SIDEBAR ── */}
      <aside style={{ width: 195, flexShrink: 0, background: 'oklch(8.5% 0.006 260)', borderRight: '1px solid oklch(18% 0.009 260)', display: 'flex', flexDirection: 'column' }}>
        {/* Brand */}
        <div style={{ padding: '1rem 1rem 0.75rem', borderBottom: '1px solid oklch(16% 0.008 260)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: 30, height: 30, borderRadius: '0.5rem', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', color: '#fff', flexShrink: 0 }}>MB</div>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: textPrimary, lineHeight: 1.2 }}>Agente MoonBlack</div>
            <div style={{ fontSize: '0.6rem', color: textMuted, letterSpacing: '0.04em' }}>Dashboard</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '0.6rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
          {navItems.map((item, i) => (
            <div
              key={item}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.5rem 0.6rem',
                borderRadius: '0.45rem',
                background: i === 0 ? `${accent}18` : 'transparent',
                color: i === 0 ? accent : textMuted,
                fontSize: '0.75rem',
                fontWeight: i === 0 ? 700 : 500,
                cursor: 'default',
              }}
            >
              <NavIcon path={icons[item] || icons['Configuración']} />
              {item}
            </div>
          ))}
        </nav>

        {/* User */}
        <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid oklch(16% 0.008 260)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'oklch(30% 0.01 260)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: textSecondary, flexShrink: 0 }}>AT</div>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: textPrimary, lineHeight: 1.2 }}>Alex Thompson</div>
            <div style={{ fontSize: '0.6rem', color: textMuted }}>Roofing Contractor</div>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid oklch(18% 0.009 260)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', color: textMuted }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            26 de Octubre, 2023
          </div>
          <div style={{ fontSize: '0.7rem', fontWeight: 600, color: textMuted, border: '1px solid oklch(22% 0.01 260)', padding: '0.2rem 0.6rem', borderRadius: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Este trimestre <span style={{ fontSize: '0.6rem' }}>▾</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem', padding: '0.875rem 1.25rem', flexShrink: 0 }}>
          <KpiCard label="Leads Calificados"   value="247"      delta="+18% vs trimestre anterior" iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" iconColor={accent} />
          <KpiCard label="Citas Agendadas"     value="38"       delta="+27% vs trimestre anterior" iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" iconColor="oklch(65% 0.14 200)" />
          <KpiCard label="Contratos Cerrados"  value="18"       delta="+20% vs trimestre anterior" iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" iconColor="oklch(72% 0.18 142)" />
          <KpiCard label="Ingresos Generados"  value="$312,000" delta="+32% vs trimestre anterior" iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" iconColor="oklch(78% 0.19 85)" />
        </div>

        {/* Activity + Funnel */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '0.6rem', padding: '0 1.25rem', flex: 1, minHeight: 0 }}>
          {/* Activity */}
          <div style={{ background: surface, border, borderRadius: '0.75rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid oklch(18% 0.009 260)', fontSize: '0.76rem', fontWeight: 700, color: textPrimary }}>Actividad Reciente</div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {leads.map((l, i) => (
                <div key={i} style={{ padding: '0.6rem 1rem', borderBottom: i < leads.length - 1 ? '1px solid oklch(16% 0.008 260)' : 'none', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'oklch(18% 0.01 260)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: 700, color: textMuted, flexShrink: 0, marginTop: 2 }}>
                    {l.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: textPrimary }}>{l.name}</span>
                      <Tag label={l.tag} color={l.tagColor} />
                    </div>
                    <div style={{ fontSize: '0.65rem', color: textMuted }}>{l.note}</div>
                  </div>
                  <span style={{ fontSize: '0.62rem', color: textMuted, whiteSpace: 'nowrap', flexShrink: 0 }}>{l.time}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '0.6rem 1rem', borderTop: '1px solid oklch(16% 0.008 260)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', fontWeight: 600, color: accent, cursor: 'default' }}>
              Ver todos los leads <span>→</span>
            </div>
          </div>

          {/* Funnel */}
          <div style={{ background: surface, border, borderRadius: '0.75rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid oklch(18% 0.009 260)', fontSize: '0.76rem', fontWeight: 700, color: textPrimary }}>Embudo de Ventas</div>
            <div style={{ flex: 1, padding: '0.875rem 1rem', display: 'flex', alignItems: 'center' }}>
              <Funnel />
            </div>
            <div style={{ padding: '0.6rem 1rem', borderTop: '1px solid oklch(16% 0.008 260)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.68rem', fontWeight: 600, color: accent, cursor: 'default' }}>
              Ver embudo completo <span>→</span>
            </div>
          </div>
        </div>

        {/* Performance Row */}
        <div style={{ padding: '0.6rem 1.25rem 0.875rem', flexShrink: 0 }}>
          <div style={{ background: surface, border, borderRadius: '0.75rem', overflow: 'hidden' }}>
            <div style={{ padding: '0.6rem 1rem', borderBottom: '1px solid oklch(18% 0.009 260)', fontSize: '0.76rem', fontWeight: 700, color: textPrimary }}>Rendimiento del Agente</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
              {perfMetrics.map((m, i) => (
                <div key={i} style={{ padding: '0.75rem 1rem', borderRight: i < 3 ? '1px solid oklch(16% 0.008 260)' : 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '0.4rem', background: `${m.iconColor}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={m.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={m.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.6rem', color: textMuted, marginBottom: '0.1rem' }}>{m.label}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: textPrimary, letterSpacing: '-0.02em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{m.value}</div>
                    <div style={{ fontSize: '0.6rem', color: 'oklch(72% 0.18 142)', marginTop: '0.1rem' }}>{m.delta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
