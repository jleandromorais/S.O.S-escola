import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrada from './pages/ADM/Entrada';
import Login from './pages/ADM/login';
import {MainLayout} from './pages/ADM/dashboard'; // <- sem { } se for export default
import { DenunciaRec } from './pages/ADM/DenunciaRec';
import { Relatorio } from './pages/ADM/relatorio';
import { Encaminhamento } from './pages/ADM/Encaminhamento';
import { NovaDenuncia } from './pages/Aluno/NovaDenuncia';
import LoginMatricula from './pages/Aluno/LoginAluno';
import { InicialPag } from './pages/Aluno/InicialAluno';
import { ProtocoloDen } from './Components/Aluno/protocoloDec';
import { MinhaDenunciass } from './pages/Aluno/MinhasDenuncias';
import { PsicologiaPag } from './pages/Aluno/Psicologiapag';
import About from './pages/AboutAndContact/about';
import Contact from './pages/AboutAndContact/contact';
function App() {
  return (
    <BrowserRouter>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Routes>
          <Route path="/" element={<Entrada />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<MainLayout />} />
          <Route path="/denunciarec" element={<DenunciaRec />} />
          <Route path="/relatorioeestatistica" element={<Relatorio />} />
          <Route path="/encaminhamento" element={<Encaminhamento />} />
          <Route path="/nova-denuncia" element={<NovaDenuncia />} />
          <Route path="/login-aluno" element={<LoginMatricula />} />
          <Route path="/inicial-pag" element={<InicialPag />} />
          <Route path ="/protocolo" element={<ProtocoloDen />} />
          <Route  path="/minhas-denc" element={<MinhaDenunciass />} />
          <Route path="/psi" element={<PsicologiaPag />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
