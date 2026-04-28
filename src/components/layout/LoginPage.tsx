import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  redirectPath: string;
  showMatricula?: boolean;
}

export default function LoginPage({ redirectPath, showMatricula = false }: LoginPageProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    navigate(redirectPath);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full flex overflow-hidden">
        {/* Login */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-8"><span className="text-blue-700">S.O.S</span> Escola</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-3 text-base">✉️</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-base">🔒</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
              Entrar
            </button>
          </form>
          <button className="mt-3 text-sm text-gray-400 hover:text-blue-600 transition-colors">Esqueci minha senha</button>
        </div>

        <div className="hidden md:block w-px bg-gray-200" />

        {/* Register */}
        <div className="flex-1 p-8 flex flex-col justify-center bg-gray-50">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">🏫</div>
            <h2 className="text-lg font-semibold text-gray-800">Registro</h2>
          </div>
          <form className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-3 text-base">👤</span>
              <input type="text" placeholder="Nome" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            {showMatricula && (
              <div className="relative">
                <span className="absolute left-3 top-3 text-base">🪪</span>
                <input type="text" placeholder="Matrícula" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            )}
            <div className="relative">
              <span className="absolute left-3 top-3 text-base">✉️</span>
              <input type="email" placeholder="Email" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-3 text-base">🔒</span>
              <input type="password" placeholder="Senha" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
