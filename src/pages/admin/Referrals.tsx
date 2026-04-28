import { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import type { Referral, ReferralStatus } from '../../types';

const TABS: { value: ReferralStatus; label: string }[] = [
  { value: 'pending',     label: 'Pendentes' },
  { value: 'in_progress', label: 'Em Andamento' },
  { value: 'completed',   label: 'Concluídos' },
];

const MOCK: Referral[] = [
  { id: '1', protocol: 'ENC-2023-001', type: 'Psicológico',       date: '15/05/2023', referredTo: 'Psicóloga Escolar', specialistName: 'Maria Silva',     status: 'pending' },
  { id: '2', protocol: 'ENC-2023-002', type: 'Conselho Tutelar',  date: '18/05/2023', referredTo: 'Conselho Tutelar',  specialistName: 'Zona Norte',      status: 'pending' },
  { id: '3', protocol: 'ENC-2023-003', type: 'Assist. Social',    date: '20/05/2023', referredTo: 'CRAS',              specialistName: 'Unidade Central', status: 'in_progress' },
  { id: '4', protocol: 'ENC-2023-004', type: 'Psicológico',       date: '22/05/2023', referredTo: 'Psicóloga Escolar', specialistName: 'Maria Silva',     status: 'completed' },
];

export default function Referrals() {
  const [activeTab, setActiveTab] = useState<ReferralStatus>('pending');
  const [search, setSearch] = useState('');
  const filtered = MOCK.filter((r) => r.status === activeTab && (!search || r.protocol.toLowerCase().includes(search.toLowerCase())));

  return (
    <MainLayout variant="admin">
      <div className="p-6 lg:p-8 max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Encaminhamentos</h1>

        <div className="flex gap-3 mb-6">
          <input type="text" placeholder="Buscar por protocolo..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors">+ Novo</button>
        </div>

        <div className="flex gap-1 mb-6 bg-gray-100 rounded-lg p-1 w-fit">
          {TABS.map((tab) => (
            <button key={tab.value} onClick={() => setActiveTab(tab.value)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.value ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {['Protocolo', 'Tipo', 'Data', 'Encaminhado para', 'Ação'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-gray-500 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-8 text-gray-400">Nenhum encaminhamento.</td></tr>
              ) : filtered.map((item) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-blue-700">{item.protocol}</td>
                  <td className="px-4 py-3 text-gray-700">{item.type}</td>
                  <td className="px-4 py-3 text-gray-500">{item.date}</td>
                  <td className="px-4 py-3">
                    <p className="text-gray-700">{item.referredTo}</p>
                    <p className="text-xs text-gray-400">{item.specialistName}</p>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-5">
          <h3 className="font-semibold text-blue-800 text-sm mb-2">Equipe de Apoio Disponível</h3>
          <p className="text-sm text-blue-700">Psicóloga Escolar: Segundas e quartas (8h–12h)</p>
          <p className="text-sm text-blue-700">Conselho Tutelar: Diariamente (8h–17h)</p>
        </div>
      </div>
    </MainLayout>
  );
}
