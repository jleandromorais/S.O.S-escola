import { Sidebar } from '../../Components/ADM/Sidebar';
import CorpoRela from '../../Components/ADM/CorpoRela';
import styles from '../../styles/MainLayout.module.css';

export function Relatorio() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      
      <main className={styles.dashboardContainer}>
        <CorpoRela />
      </main>
    </div>
  );
}