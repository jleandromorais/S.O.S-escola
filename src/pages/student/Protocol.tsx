import { useNavigate, useLocation } from 'react-router-dom';

export default function Protocol() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: { protocol?: string } | null };
  const protocol = state?.protocol ?? 'SOS-0000-00000';

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="text-5xl mb-6">✅</div>
        <h1 className="text-xl font-bold text-gray-800 mb-8">Denúncia Enviada!</h1>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <p className="text-gray-600 text-sm mb-2">Seu protocolo de acompanhamento é:</p>
          <button
            onClick={() => navigator.clipboard.writeText(protocol)}
            title="Clique para copiar"
            className="text-2xl font-bold text-blue-700 underline hover:text-blue-800 transition-colors mb-2 block mx-auto"
          >
            {protocol}
          </button>
          <p className="text-gray-400 text-xs mb-8">Guarde esse número para acompanhar o andamento</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate('/aluno/denuncias')} className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors text-sm">
              Minhas Denúncias
            </button>
            <button onClick={() => navigate('/aluno')} className="px-6 py-2.5 border border-blue-700 text-blue-700 hover:bg-blue-50 font-medium rounded-lg transition-colors text-sm">
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
