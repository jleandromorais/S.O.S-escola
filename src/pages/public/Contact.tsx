import { useNavigate } from 'react-router-dom';

const DEVELOPERS = [
  { name: 'Jose Leandro',  github: 'https://github.com/jleandromorais', initials: 'JL', color: 'bg-blue-100 text-blue-700' },
  { name: 'Gabriel Santos', github: 'https://github.com/06gabrielsouza',  initials: 'GS', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Levi Moraes',   github: 'https://github.com/LeviMoraesMoura', initials: 'LM', color: 'bg-purple-100 text-purple-700' },
  { name: 'Kayky Dias',    github: 'https://github.com/kaykyDias04',     initials: 'KD', color: 'bg-amber-100 text-amber-700' },
];

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-semibold text-gray-800">DevTeam</span>
          <button onClick={() => navigate('/')} className="text-sm text-gray-400 hover:text-blue-600 transition-colors">Voltar</button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-10">Nossa Equipe</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {DEVELOPERS.map((dev) => (
            <div key={dev.github} className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 ${dev.color} rounded-full flex items-center justify-center text-lg font-bold mb-3`}>{dev.initials}</div>
              <h2 className="font-semibold text-gray-800 text-sm mb-2">{dev.name}</h2>
              <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 font-medium">GitHub ↗</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
