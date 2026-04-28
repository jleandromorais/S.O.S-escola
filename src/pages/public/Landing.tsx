import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AreaType = 'aluno' | 'professor' | null;

export default function Landing() {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState<AreaType>(null);

  const handleEnter = () => {
    if (selectedArea === 'aluno') navigate('/aluno/login');
    else if (selectedArea === 'professor') navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 p-4">
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex" style={{ minHeight: '580px' }}>

        {/* Lado esquerdo: foto + overlay */}
        <div className="hidden md:block relative w-[52%]">
          <img
            src="/imagens/escola-kids.jpg"
            alt="Alunos felizes"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80';
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(150deg, rgba(14,90,200,0.78) 0%, rgba(56,189,248,0.60) 100%)' }}
          />
          <div className="absolute inset-0 flex flex-col justify-between p-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="text-white font-black text-base">S.O.S Escola</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                <span className="text-white text-xs font-bold uppercase tracking-widest">Plataforma segura</span>
              </div>
              <h2 className="text-white font-black leading-tight mb-5" style={{ fontSize: '36px' }}>
                Um ambiente<br />escolar mais<br /><span className="text-sky-200">seguro para todos</span>
              </h2>
              <p className="text-white/75 text-sm leading-relaxed max-w-xs">
                Denuncie casos de bullying com total sigilo. Você não está sozinho — estamos aqui para ajudar.
              </p>
              <div className="flex gap-1.5 mt-7">
                <span className="w-6 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white/30"></span>
                <span className="w-2 h-2 rounded-full bg-white/30"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito: form */}
        <div className="flex-1 bg-sky-50 flex flex-col justify-center px-10 py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <span className="font-black text-lg" style={{ color: '#0c3a7a' }}>
              <span className="text-blue-600">S.O.S</span> Escola
            </span>
          </div>

          <h1 className="font-black text-2xl mb-1.5" style={{ color: '#0c3a7a' }}>Bem-vindo de volta 👋</h1>
          <p className="text-sm text-blue-400 mb-7 leading-relaxed">Escolha sua área e entre com suas credenciais.</p>

          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Selecione sua área</p>
          <div className="grid grid-cols-2 gap-3 mb-7">
            {[
              { key: 'aluno' as AreaType,     label: 'Área do Aluno',      iconPath: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
              { key: 'professor' as AreaType, label: 'Área do Professor',  iconPath: <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></> },
            ].map(({ key, label, iconPath }) => {
              const active = selectedArea === key;
              return (
                <button
                  key={String(key)}
                  type="button"
                  onClick={() => setSelectedArea(key)}
                  className="flex flex-col items-center gap-2 py-4 px-3 rounded-2xl border-2 font-bold text-sm transition-all duration-150"
                  style={{
                    background: active ? '#1d6fdb' : '#fff',
                    borderColor: active ? '#1d6fdb' : '#bdd9f7',
                    color: active ? '#fff' : '#1d6fdb',
                    boxShadow: active ? '0 6px 20px rgba(29,111,219,0.30)' : 'none',
                    transform: active ? 'translateY(-2px)' : 'none',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: active ? 'rgba(255,255,255,0.2)' : '#deeeff' }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      {iconPath}
                    </svg>
                  </div>
                  {label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-blue-100"></div>
            <span className="text-xs text-blue-300 font-semibold">entre com sua conta</span>
            <div className="flex-1 h-px bg-blue-100"></div>
          </div>

          <div className="space-y-3 mb-2">
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input type="email" placeholder="Seu e-mail" className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-100 bg-white text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" style={{ color: '#0c3a7a' }} />
            </div>
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <input type="password" placeholder="Sua senha" className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-100 bg-white text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" style={{ color: '#0c3a7a' }} />
            </div>
          </div>

          <p className="text-xs font-bold text-center text-blue-500 h-5 mb-3">
            {selectedArea === 'aluno' && '✓ Área do Aluno selecionada'}
            {selectedArea === 'professor' && '✓ Área do Professor selecionada'}
          </p>

          <button
            onClick={handleEnter}
            disabled={!selectedArea}
            className="w-full py-3.5 rounded-xl text-white font-black text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95"
            style={{ background: '#1d6fdb' }}
          >
            Entrar na plataforma →
          </button>

          <p className="mt-5 text-center text-xs text-blue-300">
            Não tem conta?{' '}
            <button className="text-blue-600 font-bold hover:underline">Cadastre-se</button>
            {' · '}
            <button className="text-blue-600 font-bold hover:underline">Esqueci minha senha</button>
          </p>
        </div>
      </div>
    </div>
  );
}
