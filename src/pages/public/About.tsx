import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">A Gente</p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">S.O.S Escola</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Bem-vindo ao S.O.S Escola, uma iniciativa dedicada a transformar o ambiente escolar através da tecnologia e do acolhimento. Nosso projeto visa criar um espaço seguro onde estudantes possam expressar suas preocupações.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Desenvolvemos uma plataforma intuitiva que conecta alunos, educadores e profissionais de apoio, promovendo o bem-estar estudantil e a saúde mental no ambiente educacional.
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <button onClick={() => navigate('/contato')} className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors text-sm">
            Entre em contato
          </button>
          <button onClick={() => navigate('/')} className="px-6 py-2.5 border border-gray-300 text-gray-600 hover:bg-gray-100 font-medium rounded-lg transition-colors text-sm">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
