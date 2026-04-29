import { MainLayout } from '../../components/layout/MainLayout';

const STATS = [
  {
    label: 'Total de Denúncias', value: 32, delta: '+4 esta semana',
    color: '#2563eb', glow: 'rgba(37,99,235,0.4)',
    icon: (
      <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>
    ),
  },
  {
    label: 'Pendentes', value: 5, delta: '↑ 2 novas hoje',
    color: '#ef4444', glow: 'rgba(239,68,68,0.4)',
    icon: (
      <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>
    ),
  },
  {
    label: 'Em Análise', value: 3, delta: 'Em andamento',
    color: '#f59e0b', glow: 'rgba(245,158,11,0.4)',
    icon: (
      <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>
    ),
  },
  {
    label: 'Resolvidas', value: 24, delta: '75% de resolução',
    color: '#10b981', glow: 'rgba(16,185,129,0.4)',
    icon: (
      <><polyline points="20 6 9 17 4 12" /></>
    ),
  },
];

const COMPLAINT_TYPES = [
  { type: 'Bullying Verbal',      count: 14, pct: 43.8, color: '#2563eb' },
  { type: 'Bullying Psicológico', count: 8,  pct: 25.0, color: '#8b5cf6' },
  { type: 'Bullying Físico',      count: 5,  pct: 15.6, color: '#ef4444' },
  { type: 'Cyberbullying',        count: 3,  pct: 9.4,  color: '#f59e0b' },
  { type: 'Outros',               count: 2,  pct: 6.2,  color: '#6b7280' },
];

const RECENT = [
  { id: '#1032', type: 'Bullying Verbal',      time: 'há 2h',  status: 'Pendente',   statusColor: '#ef4444' },
  { id: '#1031', type: 'Cyberbullying',        time: 'há 5h',  status: 'Em Análise', statusColor: '#f59e0b' },
  { id: '#1030', type: 'Bullying Psicológico', time: 'ontem',  status: 'Resolvida',  statusColor: '#10b981' },
  { id: '#1029', type: 'Bullying Físico',      time: 'ontem',  status: 'Resolvida',  statusColor: '#10b981' },
];

function GlassCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Dashboard() {
  return (
    <MainLayout variant="admin">
      <div className="p-6 lg:p-8 overflow-y-auto h-full" style={{ color: '#fff' }}>

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-3"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 100,
                padding: '4px 12px',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', display: 'inline-block' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Sistema ativo
              </span>
            </div>
            <h1 className="font-black text-3xl" style={{ letterSpacing: '-0.03em' }}>
              Dashboard
            </h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Visão geral do sistema de denúncias
            </p>
          </div>
          <div
            className="text-xs font-medium px-4 py-2"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 10,
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            Atualizado agora
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {STATS.map((s) => (
            <GlassCard key={s.label} style={{ padding: '20px' }}>
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: 44, height: 44, borderRadius: 14,
                  background: `rgba(${s.color === '#2563eb' ? '37,99,235' : s.color === '#ef4444' ? '239,68,68' : s.color === '#f59e0b' ? '245,158,11' : '16,185,129'},0.2)`,
                  border: `1px solid ${s.color}40`,
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <p className="font-black text-3xl" style={{ letterSpacing: '-0.03em', color: s.color, textShadow: `0 0 20px ${s.glow}` }}>
                {s.value}
              </p>
              <p className="text-sm font-semibold mt-1 text-white">{s.label}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.delta}</p>
            </GlassCard>
          ))}
        </div>

        {/* Middle row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Taxa de resolução */}
          <GlassCard style={{ padding: '24px' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Taxa de Resolução
            </p>
            <div className="flex items-end gap-3 mb-5">
              <span className="font-black text-5xl" style={{ letterSpacing: '-0.04em', color: '#10b981', textShadow: '0 0 24px rgba(16,185,129,0.5)' }}>75%</span>
              <span className="text-sm pb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>das denúncias resolvidas</span>
            </div>
            <div className="w-full rounded-full" style={{ height: 6, background: 'rgba(255,255,255,0.07)' }}>
              <div
                className="rounded-full"
                style={{
                  width: '75%', height: '100%',
                  background: 'linear-gradient(90deg, #10b981, #34d399)',
                  boxShadow: '0 0 12px rgba(16,185,129,0.5)',
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>0%</span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>100%</span>
            </div>
          </GlassCard>

          {/* Tempo médio */}
          <GlassCard style={{ padding: '24px' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Tempo Médio de Resolução
            </p>
            <div className="flex items-end gap-3 mb-5">
              <span className="font-black text-5xl" style={{ letterSpacing: '-0.04em', color: '#38bdf8', textShadow: '0 0 24px rgba(56,189,248,0.5)' }}>3.2</span>
              <span className="text-sm pb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>dias em média</span>
            </div>
            <div className="flex gap-2">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex'].map((d, i) => {
                const heights = [60, 80, 45, 90, 55];
                return (
                  <div key={d} className="flex-1 flex flex-col items-center gap-1.5">
                    <div className="w-full rounded-md" style={{ height: 52, display: 'flex', alignItems: 'flex-end' }}>
                      <div
                        className="w-full rounded-md"
                        style={{
                          height: `${heights[i]}%`,
                          background: i === 3
                            ? 'linear-gradient(180deg, #38bdf8, #2563eb)'
                            : 'rgba(255,255,255,0.08)',
                          boxShadow: i === 3 ? '0 0 12px rgba(56,189,248,0.4)' : 'none',
                        }}
                      />
                    </div>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{d}</span>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Denúncias por tipo */}
          <GlassCard style={{ padding: '24px', gridColumn: 'span 3' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Denúncias por Tipo
            </p>
            <div className="space-y-3">
              {COMPLAINT_TYPES.map((r) => (
                <div key={r.type}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{r.type}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-white">{r.count}</span>
                      <span className="text-xs w-10 text-right" style={{ color: 'rgba(255,255,255,0.3)' }}>{r.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full rounded-full" style={{ height: 4, background: 'rgba(255,255,255,0.06)' }}>
                    <div
                      className="rounded-full"
                      style={{
                        width: `${r.pct}%`, height: '100%',
                        background: r.color,
                        boxShadow: `0 0 8px ${r.color}80`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Recentes */}
          <GlassCard style={{ padding: '24px', gridColumn: 'span 2' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Recentes
            </p>
            <div className="space-y-3">
              {RECENT.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center gap-3 p-3 transition-all cursor-pointer"
                  style={{
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
                >
                  <div>
                    <p className="text-xs font-bold text-white">{r.id}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{r.type}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${r.statusColor}22`, color: r.statusColor, border: `1px solid ${r.statusColor}44` }}
                    >
                      {r.status}
                    </span>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>{r.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </MainLayout>
  );
}
