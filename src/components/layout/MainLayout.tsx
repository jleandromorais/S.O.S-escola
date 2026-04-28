import { ReactNode } from 'react';
import { useMobileLayout } from '../../hooks/useMobileLayout';
import { AdminSidebar } from './AdminSidebar';
import { StudentSidebar } from './StudentSidebar';

interface MainLayoutProps {
  children: ReactNode;
  variant?: 'admin' | 'student';
}

export function MainLayout({ children, variant = 'admin' }: MainLayoutProps) {
  const { isMobile, isSidebarOpen, toggleSidebar } = useMobileLayout();
  const SidebarComponent = variant === 'admin' ? AdminSidebar : StudentSidebar;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile toggle */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? 'Fechar menu' : 'Abrir menu'}
          className="fixed top-4 left-4 z-50 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors"
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Overlay */}
      {isMobile && isSidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarComponent />
      </div>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
