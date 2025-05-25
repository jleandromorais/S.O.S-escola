import { useState, useEffect } from 'react';
import { Sidebar } from '../../Components/ADM/Sidebar';
import styles from '../../styles/MainLayout.module.css';
import CorpoEnc from '../../Components/ADM/CorpoEnc';

export function Encaminhamento() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileBreakpoint = 992;
      const isMobileView = window.innerWidth <= mobileBreakpoint;
      setIsMobile(isMobileView);
      setSidebarOpen(!isMobileView); // No mobile, sidebar inicia fechada
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className={styles.mainContainer}>
      {isMobile && (
        <button
          className={styles.menuToggle}
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      )}

      <div className={`${styles.sidebarContainer} ${sidebarOpen ? styles.open : ''}`}>
        <Sidebar />
      </div>

      <main className={`${styles.dashboardContainer} ${!sidebarOpen ? styles.fullWidth : ''}`}>
        <CorpoEnc />
      </main>
    </div>
  );
}
