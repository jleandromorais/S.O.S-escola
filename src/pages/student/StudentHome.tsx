import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';

const ACTIONS = [
  { title: 'Nova Denúncia',       desc: 'Registre uma ocorrência de forma segura e confidencial.',    btn: 'Fazer Denúncia',     path: '/aluno/nova-denuncia', icon: '📝', iconBg: 'bg-blue-100 text-blue-600',    btnColor: 'bg-blue-700 hover:bg-blue-800' },
  { title: 'Acompanhar',          desc: 'Verifique o status das suas denúncias anteriores.',            btn: 'Ver Denúncias',      path: '/aluno/denuncias',     icon: '🔍', iconBg: 'bg-emerald-100 text-emerald-600', btnColor: 'bg-emerald-600 hover:bg-emerald-700' },
  { title: 'Apoio Psicológico',   desc: 'Converse com um profissional de forma sigilosa e gratuita.',  btn: 'Buscar Apoio',       path: '/aluno/psicologia',    icon: '💬', iconBg: 'bg-amber-100 text-amber-600',  btnColor: 'bg-amber-500 hover:bg-amber-600' },
];

export default function StudentHome() {
  const navigate = useNavigate();
  return (
    <MainLayout variant="student">
      <div className="p-6 lg:p-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Bem-vindo(a) ao S.O.S Escola</h1>
          <p className="text-gray-500 text-sm mt-1">Escolha uma opção abaixo</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ACTIONS.map((a) => (
            <div key={a.path} className="bg-white rounded-xl p-5 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className={`w-12 h-12 rounded-xl ${a.iconBg} flex items-center justify-center text-xl mb-4`}>{a.icon}</div>
              <h2 className="font-semibold text-gray-800 mb-2">{a.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{a.desc}</p>
              <button onClick={() => navigate(a.path)} className={`w-full ${a.btnColor} text-white font-medium py-2.5 rounded-lg transition-colors text-sm`}>{a.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
