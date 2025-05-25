'use client';

import { FaUniversity } from 'react-icons/fa';
import styles from '../../styles/entrada.module.css';

import { useNavigate } from 'react-router-dom';

export default function Entrada() {
  const navigate = useNavigate();

  const handleTeacherClick = () => {
    navigate('/login'); // aqui vai pra login.tsx
  };

  const handleStudentClick = () => {
    navigate('/login-aluno');
    // Você pode também fazer outro router.push aqui, se quiser
  };

  const handleAboutClick = () => {
    navigate('/sobre'); // Aqui você pode redirecionar para a página "Sobre a Gente"
  };

  return (
    <div className={styles.sosCard}>
      <div className={styles.cardHeader}>
        <h1 className={styles.logoTitle}>S.O.S Escola</h1>
        <div className={styles.iconContainer}>
          <FaUniversity className={styles.icon} />
        </div>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.contentTitle}>
          <strong>Denúncias Anônimas</strong> <span>de Bullying</span>
        </h2>
        <div className={styles.buttonContainer}>
          <button className={styles.actionButton} onClick={handleTeacherClick}>
            Área do Professor
          </button>
          <button className={styles.actionButton} onClick={handleStudentClick}>
            Área do Aluno
          </button>
        </div>
        <div className={styles.aboutContainer}>
          <button className={styles.aboutButton} onClick={handleAboutClick}>
            Sobre a Gente
          </button>
        </div>
      </div>
    </div>
  );
}
