import { useNavigate, useLocation } from 'react-router-dom';
import type { NavItem } from '../../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Início',             path: '/aluno',                icon: '🏠' },
  { label: 'Nova Denúncia',      path: '/aluno/nova-denuncia',  icon: '📝' },
  { label: 'Minhas Denúncias',   path: '/aluno/denuncias',      icon: '📋' },
  { label: 'Apoio Psicológico',  path: '/aluno/psicologia',     icon: '💬' },
];

export function StudentSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg">🏫</div>
          <div>
            <p className="font-semibold text-sm text-gray-800">S.O.S Escola</p>
            <p className="text-xs text-gray-400">Bem-vindo(a), Aluno</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-4 px-3">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === item.path ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
