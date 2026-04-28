import { useNavigate, useLocation } from 'react-router-dom';
import type { NavItem } from '../../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',           path: '/admin',                    icon: '📊' },
  { label: 'Denúncias Recentes',  path: '/admin/denuncias',          icon: '📋' },
  { label: 'Relatórios',          path: '/admin/relatorios',         icon: '📈' },
  { label: 'Encaminhamentos',     path: '/admin/encaminhamentos',    icon: '🔀' },
];

export function AdminSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="h-full bg-slate-800 text-white flex flex-col">
      <div className="p-5 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-lg">🏫</div>
          <div>
            <p className="font-semibold text-sm">S.O.S Escola</p>
            <p className="text-xs text-slate-400">Bem-vindo(a), Gestor</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-4 px-3">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === item.path ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700 text-xs text-slate-400">
        🎧 SAC: (11) 4002-8922
      </div>
    </aside>
  );
}
