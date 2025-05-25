// about.tsx
import styles from '../../styles/Desafio/about.module.css';

export default function About() {
  return (
    <div className={styles.body}>
      <div className={styles.logo}>A GENTE</div>

      <div className={styles.container}>
        <div className={styles.contentCard}>
          <h1>S.O.S Escola</h1>
          <p>
            Bem-vindo ao S.O.S Escola, uma iniciativa dedicada a transformar o
            ambiente escolar através da tecnologia e do acolhimento. Nosso projeto
            visa criar um espaço seguro onde estudantes possam expressar suas
            preocupações, desafios e necessidades.
          </p>
          <p>
            Desenvolvemos uma plataforma intuitiva que conecta alunos, educadores e
            profissionais de apoio, promovendo o bem-estar estudantil e a saúde
            mental no ambiente educacional.
          </p>
          <p>
            Com o S.O.S Escola, acreditamos que cada estudante merece ser ouvido e
            apoiado em sua jornada educacional, criando assim comunidades escolares
            mais saudáveis e acolhedoras.
          </p>
        </div>

        <div className={styles.btnContainer}>
          <a href="/contact" className={styles.contactBtn}>Entre em contato</a>
        </div>
      </div>
    </div>
  );
}
