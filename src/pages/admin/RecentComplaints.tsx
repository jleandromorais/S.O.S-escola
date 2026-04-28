import { MainLayout } from '../../components/layout/MainLayout';
import { ComplaintCard } from '../../components/complaints/ComplaintCard';
import type { Complaint } from '../../types';

const MOCK: Complaint[] = [
  { id: '1', protocol: 'SOS-2025-00123', type: 'physical_violence', description: '', status: 'pending',     isAnonymous: true,  createdAt: '2025-03-15' },
  { id: '2', protocol: 'SOS-2025-00124', type: 'verbal_abuse',       description: '', status: 'in_progress', isAnonymous: false, createdAt: '2025-03-14' },
  { id: '3', protocol: 'SOS-2025-00125', type: 'discrimination',     description: '', status: 'resolved',    isAnonymous: true,  createdAt: '2025-03-12' },
  { id: '4', protocol: 'SOS-2025-00126', type: 'moral_harassment',   description: '', status: 'in_progress', isAnonymous: false, createdAt: '2025-03-10' },
];

export default function RecentComplaints() {
  return (
    <MainLayout variant="admin">
      <div className="p-6 lg:p-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Denúncias</h1>
        <div className="space-y-3">
          {MOCK.map((c) => <ComplaintCard key={c.id} complaint={c} />)}
        </div>
      </div>
    </MainLayout>
  );
}
