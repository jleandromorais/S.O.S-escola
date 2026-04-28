import { MainLayout } from '../../components/layout/MainLayout';
import { ComplaintCard } from '../../components/complaints/ComplaintCard';
import type { Complaint } from '../../types';

const MOCK: Complaint[] = [
  { id: '1', protocol: 'SOS-2025-00122', type: 'verbal_abuse', description: '', status: 'in_progress', isAnonymous: true, createdAt: '2025-04-04' },
  { id: '2', protocol: 'SOS-2025-00062', type: 'verbal_abuse', description: '', status: 'resolved',    isAnonymous: true, createdAt: '2024-11-22' },
];

export default function MyComplaints() {
  return (
    <MainLayout variant="student">
      <div className="p-6 lg:p-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Minhas Denúncias</h1>
        {MOCK.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg mb-1">Nenhuma denúncia registrada</p>
            <p className="text-sm">Suas denúncias aparecerão aqui</p>
          </div>
        ) : (
          <div className="space-y-3">
            {MOCK.map((c) => <ComplaintCard key={c.id} complaint={c} />)}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
