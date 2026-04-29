import { useNavigate, useLocation } from 'react-router-dom';
import type { NavItem } from '../../types';

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard', path: '/admin', icon: (
      <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>
    ),
  },
  {
    label: 'Denúncias Recentes', path: '/admin/denuncias', icon: (
      <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>
    ),
  },
  {
    label: 'Relatórios', path: '/admin/relatorios', icon: (
      <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>
    ),
  },
  {
    label: 'Encaminhamentos', path: '/admin/encaminhamentos', icon: (
      <><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>
    ),
  },
];

export function AdminSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside
      className="h-full flex flex-col"
      style={{ background: '#060d1a', borderRight: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Logo */}
      <div className="p-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'linear-gradient(135deg, #2563eb, #38bdf8)',
              boxShadow: '0 4px 16px rgba(37,99,235,0.45)',
            }}
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <p className="font-black text-white text-sm tracking-tight">
              <span style={{ color: '#38bdf8' }}>S.O.S</span> Escola
            </p>
            <p className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Painel do Professor
            </p>
          </div>
        </div>

        {/* User badge */}
        <div
          className="flex items-center gap-2 mt-5 p-3"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12,
          }}
        >
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 32, height: 32, borderRadius: 10,
              background: 'linear-gradient(135deg, rgba(37,99,235,0.5), rgba(56,189,248,0.3))',
              border: '1px solid rgba(56,189,248,0.3)',
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">Gestor</p>
            <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.35)' }}>Administrador</p>
          </div>
          <div
            className="ml-auto flex-shrink-0"
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }}
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 px-2" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Menu
        </p>
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 px-3 py-3 transition-all duration-200 text-left"
              style={{
                borderRadius: 12,
                background: active
                  ? 'linear-gradient(135deg, rgba(37,99,235,0.35), rgba(56,189,248,0.15))'
                  : 'transparent',
                border: `1px solid ${active ? 'rgba(37,99,235,0.5)' : 'transparent'}`,
                boxShadow: active ? '0 4px 16px rgba(37,99,235,0.2)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.background = 'transparent';
              }}
            >
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: 34, height: 34, borderRadius: 10,
                  background: active ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.05)',
                }}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24" fill="none"
                  stroke={active ? '#93c5fd' : 'rgba(255,255,255,0.45)'}
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>
              <span
                className="text-sm font-semibold"
                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.5)' }}
              >
                {item.label}
              </span>
              {active && (
                <div
                  className="ml-auto"
                  style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 transition-all"
          style={{ borderRadius: 12, background: 'transparent' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          <div
            className="flex items-center justify-center flex-shrink-0"
            style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,0.05)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>Sair</span>
        </button>
      </div>
    </aside>
  );
}
