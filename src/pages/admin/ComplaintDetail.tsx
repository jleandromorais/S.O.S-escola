import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';

export default function ComplaintDetail() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 500));
    setIsSubmitting(false);
    alert('Providência registrada com sucesso!');
    setDescription('');
  };

  return (
    <MainLayout variant="admin">
      <div className="p-6 lg:p-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Denúncia SOS-2025-00062</h1>
        <p className="text-gray-500 text-sm mb-8">Relato da providência</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Descrição da Solução</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descreva a ação tomada para resolução..." required rows={6} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => navigate(-1)} className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Voltar</button>
            <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white rounded-lg text-sm font-medium transition-colors">
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
