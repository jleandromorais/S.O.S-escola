import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { ComplaintForm } from '../../components/complaints/ComplaintForm';

export default function NewComplaint() {
  const navigate = useNavigate();
  return (
    <MainLayout variant="student">
      <div className="p-6 lg:p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Nova Denúncia</h1>
        <p className="text-gray-500 text-sm mb-8">Todos os dados são tratados com confidencialidade.</p>
        <ComplaintForm onProtocolGenerated={(p) => navigate('/aluno/protocolo', { state: { protocol: p } })} />
      </div>
    </MainLayout>
  );
}
