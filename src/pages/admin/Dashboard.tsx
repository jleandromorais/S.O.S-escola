import { MainLayout } from '../../components/layout/MainLayout';
import { StatCard } from '../../components/ui/StatCard';

export default function Dashboard() {
  return (
    <MainLayout variant="admin">
      <div className="p-6 lg:p-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Visão geral do sistema de denúncias</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total"       value={32} icon="📋" variant="blue" />
          <StatCard label="Pendentes"   value={5}  icon="⏳" variant="red" />
          <StatCard label="Em Análise"  value={3}  icon="🔍" variant="amber" />
          <StatCard label="Resolvidas"  value={24} icon="✅" variant="emerald" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Taxa de Resolução</h2>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-emerald-600">75%</span>
              <span className="text-sm text-gray-400 pb-1">das denúncias</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Tempo Médio de Resolução</h2>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-blue-600">3.2</span>
              <span className="text-sm text-gray-400 pb-1">dias em média</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Denúncias por Tipo</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 text-gray-500 font-medium">Tipo</th>
                <th className="text-right py-3 text-gray-500 font-medium">Qtd</th>
                <th className="text-right py-3 text-gray-500 font-medium">%</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Bullying Verbal', count: 14, pct: 43.8 },
                { type: 'Bullying Psicológico', count: 8, pct: 25.0 },
                { type: 'Bullying Físico', count: 5, pct: 15.6 },
                { type: 'Cyberbullying', count: 3, pct: 9.4 },
                { type: 'Outros', count: 2, pct: 6.2 },
              ].map((r) => (
                <tr key={r.type} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-700">{r.type}</td>
                  <td className="py-3 text-right font-medium text-gray-800">{r.count}</td>
                  <td className="py-3 text-right text-gray-400">{r.pct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
