import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Landing          = lazy(() => import('./pages/public/Landing'));
const About            = lazy(() => import('./pages/public/About'));
const Contact          = lazy(() => import('./pages/public/Contact'));
const AdminLogin       = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard        = lazy(() => import('./pages/admin/Dashboard'));
const RecentComplaints = lazy(() => import('./pages/admin/RecentComplaints'));
const Reports          = lazy(() => import('./pages/admin/Reports'));
const Referrals        = lazy(() => import('./pages/admin/Referrals'));
const ComplaintDetail  = lazy(() => import('./pages/admin/ComplaintDetail'));
const StudentLogin     = lazy(() => import('./pages/student/StudentLogin'));
const StudentHome      = lazy(() => import('./pages/student/StudentHome'));
const NewComplaint     = lazy(() => import('./pages/student/NewComplaint'));
const MyComplaints     = lazy(() => import('./pages/student/MyComplaints'));
const Protocol         = lazy(() => import('./pages/student/Protocol'));
const Psychology       = lazy(() => import('./pages/student/Psychology'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <div className="h-screen w-screen">
          <Routes>
            {/* Público */}
            <Route path="/"        element={<Landing />} />
            <Route path="/sobre"   element={<About />} />
            <Route path="/contato" element={<Contact />} />

            {/* Admin */}
            <Route path="/admin/login"              element={<AdminLogin />} />
            <Route path="/admin"                    element={<Dashboard />} />
            <Route path="/admin/denuncias"          element={<RecentComplaints />} />
            <Route path="/admin/denuncias/:id"      element={<ComplaintDetail />} />
            <Route path="/admin/relatorios"         element={<Reports />} />
            <Route path="/admin/encaminhamentos"    element={<Referrals />} />

            {/* Aluno */}
            <Route path="/aluno/login"              element={<StudentLogin />} />
            <Route path="/aluno"                    element={<StudentHome />} />
            <Route path="/aluno/nova-denuncia"      element={<NewComplaint />} />
            <Route path="/aluno/denuncias"          element={<MyComplaints />} />
            <Route path="/aluno/protocolo"          element={<Protocol />} />
            <Route path="/aluno/psicologia"         element={<Psychology />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}
