import { MainLayout } from '../../components/layout/MainLayout';

export default function Reports() {
  return (
    <MainLayout variant="admin">
      <div className="p-6 lg:p-8 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Relatório e Estatísticas</h1>
          <div className="flex gap-3 flex-wrap">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Mensal</option><option>Trimestral</option><option>Anual</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Todas</option><option>Bullying</option><option>Cyberbullying</option>
            </select>
            <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Exportar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total', value: '32' },
            { label: 'Resolvidas', value: '24 (75%)' },
            { label: 'Tempo médio', value: '3.2 dias' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 text-center">
              <p className="text-sm text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gray-800">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { title: 'Por Tipo', rows: [['Bullying Verbal',14,43.8],['Psicológico',8,25.0],['Físico',5,15.6],['Cyberbullying',3,9.4],['Outros',2,6.2]] },
            { title: 'Por Local', rows: [['Pátio/Intervalo',12,37.5],['Sala de Aula',8,25.0],['Corredores',6,18.7],['Online',4,12.5],['Outros',2,6.2]] },
          ].map((table) => (
            <div key={table.title} className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">{table.title}</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 text-gray-500 font-medium">Item</th>
                    <th className="text-right py-2 text-gray-500 font-medium">Qtd</th>
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map(([label, count, pct]) => (
                    <tr key={String(label)} className="border-b border-gray-50">
                      <td className="py-2.5 text-gray-700">{label}</td>
                      <td className="py-2.5 text-right text-gray-800 font-medium">{count} <span className="text-gray-400 font-normal">({pct}%)</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
