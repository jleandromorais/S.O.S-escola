import { MainLayout } from '../../components/layout/MainLayout';
import type { Psychologist } from '../../types';

const PSYCHOLOGISTS: Psychologist[] = [
  { id: '1', name: 'Dra. Ana Paula Silva', title: 'Psicóloga Escolar', specialty: 'Especialista em bullying e comportamento adolescente', registrationCode: 'CRP 06/12345', isOnline: true, gender: 'female' },
  { id: '2', name: 'Dr. Carlos Mendes',    title: 'Psicólogo',         specialty: 'Especialista em traumas e violência escolar',           registrationCode: 'CRP 06/54321', isOnline: true, gender: 'male' },
];

export default function Psychology() {
  return (
    <MainLayout variant="student">
      <div className="p-6 lg:p-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Apoio Psicológico</h1>
          <p className="text-gray-500 text-sm mt-1">Suporte emocional e orientações psicológicas</p>
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Profissionais Disponíveis</h2>
          <div className="space-y-3">
            {PSYCHOLOGISTS.map((p) => (
              <div key={p.id} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 ${p.gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'}`}>
                  {p.gender === 'female' ? '👩‍⚕️' : '👨‍⚕️'}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 text-sm">{p.name}</h3>
                  <p className="text-xs text-gray-500">{p.title} — {p.registrationCode}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.specialty}</p>
                </div>
                {p.isOnline && (
                  <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-xs font-medium px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Online
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Formas de Atendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '💬', title: 'Chat Privado',      desc: 'Converse em tempo real de forma segura e anônima',  btn: 'Iniciar Chat', btnColor: 'bg-blue-700 hover:bg-blue-800',     iconBg: 'bg-blue-50' },
              { icon: '📅', title: 'Agendar Consulta',  desc: 'Marque um horário para atendimento em vídeo',         btn: 'Agendar',      btnColor: 'bg-amber-500 hover:bg-amber-600',  iconBg: 'bg-amber-50' },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-gray-100 p-6 text-center">
                <div className={`w-14 h-14 ${s.iconBg} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>{s.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 mb-5">{s.desc}</p>
                <button className={`w-full ${s.btnColor} text-white font-medium py-2.5 rounded-lg transition-colors text-sm`}>{s.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
