import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type AreaType = 'aluno' | 'professor' | null;

export default function Landing() {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState<AreaType>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEnter = (e: FormEvent) => {
    e.preventDefault();
    if (selectedArea === 'aluno') navigate('/aluno');
    else if (selectedArea === 'professor') navigate('/admin');
  };

  const areas: { key: AreaType; label: string; icon: React.ReactNode }[] = [
    {
      key: 'aluno',
      label: 'Área do Aluno',
      icon: (
        <>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </>
      ),
    },
    {
      key: 'professor',
      label: 'Área do Professor',
      icon: (
        <>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: '#060d1a' }}
    >
      {/* Glows decorativos */}
      <div
        className="fixed pointer-events-none"
        style={{
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)',
          top: -150, left: -150,
        }}
      />
      <div
        className="fixed pointer-events-none"
        style={{
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
          bottom: -100, right: 100,
        }}
      />

      <div
        className="relative w-full flex overflow-hidden"
        style={{
          maxWidth: 1000,
          minHeight: 600,
          borderRadius: 28,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(2px)',
        }}
      >
        {/* Imagem de fundo escurecida */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/imagens/escola-kids.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(6,13,26,0.92) 0%, rgba(10,22,50,0.88) 100%)' }}
        />

        {/* ── Lado esquerdo ── */}
        <div className="relative flex-1 flex flex-col justify-between p-12 z-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center"
              style={{
                width: 42, height: 42, borderRadius: 12,
                background: 'linear-gradient(135deg, #2563eb, #38bdf8)',
                boxShadow: '0 4px 20px rgba(37,99,235,0.5)',
              }}
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="font-black text-lg text-white tracking-tight">
              <span style={{ color: '#38bdf8' }}>S.O.S</span> Escola
            </span>
          </div>

          {/* Conteúdo central */}
          <div className="max-w-md">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 100,
                padding: '6px 16px',
              }}
            >
              <span
                className="block"
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }}
              />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Plataforma segura e sigilosa
              </span>
            </div>

            <h1
              className="font-black leading-none mb-6"
              style={{ fontSize: 52, letterSpacing: '-0.03em', color: '#fff' }}
            >
              Sua voz<br />pode mudar<br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                tudo.
              </span>
            </h1>

            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 360 }}>
              Denuncie casos de bullying com total sigilo. Cada relato é tratado com cuidado por profissionais qualificados. Você não está sozinho.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { val: '100%', label: 'Anônimo' },
                { val: '24h',  label: 'Resposta' },
                { val: '+500', label: 'Casos resolvidos' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />}
                  <div>
                    <p className="font-black text-xl text-white">{s.val}</p>
                    <p className="text-xs mt-0.5 font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-1.5">
            <span className="h-0.5 rounded-full" style={{ width: 28, background: '#38bdf8' }} />
            <span className="h-0.5 rounded-full" style={{ width: 10, background: 'rgba(255,255,255,0.2)' }} />
            <span className="h-0.5 rounded-full" style={{ width: 10, background: 'rgba(255,255,255,0.2)' }} />
          </div>
        </div>

        {/* ── Card direito (glass) ── */}
        <div className="relative z-10 flex items-center justify-center p-8" style={{ width: 400, flexShrink: 0 }}>
          <div
            className="w-full"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.11)',
              borderRadius: 24,
              padding: '36px 32px',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <p className="font-black text-xl text-white mb-1.5" style={{ letterSpacing: '-0.02em' }}>
              Bem-vindo de volta 👋
            </p>
            <p className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
              Escolha sua área e entre com suas credenciais.
            </p>

            {/* Seleção de área */}
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Selecione sua área
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-7">
              {areas.map(({ key, label, icon }) => {
                const active = selectedArea === key;
                return (
                  <button
                    key={String(key)}
                    type="button"
                    onClick={() => setSelectedArea(key)}
                    className="flex flex-col items-center gap-2 py-4 px-3 transition-all duration-200"
                    style={{
                      borderRadius: 16,
                      border: `1.5px solid ${active ? '#2563eb' : 'rgba(255,255,255,0.09)'}`,
                      background: active
                        ? 'linear-gradient(135deg, rgba(37,99,235,0.35), rgba(56,189,248,0.18))'
                        : 'rgba(255,255,255,0.03)',
                      boxShadow: active ? '0 0 0 1px rgba(37,99,235,0.5), 0 8px 24px rgba(37,99,235,0.25)' : 'none',
                      cursor: 'pointer',
                      transform: active ? 'translateY(-2px)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 12,
                        background: active ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24" fill="none"
                        stroke={active ? '#93c5fd' : 'rgba(255,255,255,0.5)'}
                        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        {icon}
                      </svg>
                    </div>
                    <span
                      className="text-xs font-bold text-center"
                      style={{ color: active ? '#fff' : 'rgba(255,255,255,0.45)' }}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.22)', whiteSpace: 'nowrap' }}>
                entre com sua conta
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
            </div>

            {/* Inputs */}
            <form onSubmit={handleEnter}>
            <div className="space-y-3 mb-2">
              <div className="relative">
                <svg
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: 14, width: 15, height: 15, stroke: 'rgba(255,255,255,0.22)' }}
                  viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-sm outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: 12,
                    padding: '13px 14px 13px 40px',
                    color: '#fff',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                />
              </div>
              <div className="relative">
                <svg
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: 14, width: 15, height: 15, stroke: 'rgba(255,255,255,0.22)' }}
                  viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-sm outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: 12,
                    padding: '13px 14px 13px 40px',
                    color: '#fff',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                />
              </div>
            </div>

            {/* Feedback */}
            <p className="text-xs font-bold text-center h-5 mb-3" style={{ color: '#38bdf8' }}>
              {selectedArea === 'aluno' && '✓ Área do Aluno selecionada'}
              {selectedArea === 'professor' && '✓ Área do Professor selecionada'}
            </p>

            {/* Botão */}
            <button
              type="submit"
              disabled={!selectedArea}
              className="w-full text-white font-black text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                padding: '14px',
                borderRadius: 14,
                border: 'none',
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                boxShadow: selectedArea ? '0 4px 20px rgba(37,99,235,0.5)' : 'none',
                fontFamily: 'inherit',
                cursor: selectedArea ? 'pointer' : 'not-allowed',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => { if (selectedArea) e.currentTarget.style.opacity = '0.88'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Entrar na plataforma →
            </button>
            </form>

            <p className="mt-5 text-center text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Não tem conta?{' '}
              <button
                className="font-bold transition-colors"
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', fontFamily: 'inherit', fontSize: 11, cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#38bdf8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
              >
                Cadastre-se
              </button>
              {' · '}
              <button
                className="font-bold transition-colors"
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', fontFamily: 'inherit', fontSize: 11, cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#38bdf8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
              >
                Esqueci minha senha
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}