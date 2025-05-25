import styles from '../../styles/Desafio/contact.module.css';
import leandroGato from '../../imagens/leandroGato.jpg';
import gabrielPapafigo from '../../imagens/gabriel-React.jpg';
import LeviReiDoBlood from '../../imagens/Levi-do-blood.jpg';
import kaykeKarateKid from '../../imagens/kayke2.jpg'
// No seu objeto:


const developers = [
    {
  name: 'Jose Leandro',
  image: leandroGato,
  github: 'https://github.com/joaosilva',
},
 
  {
    name: 'Gabriel Santos',
    image: gabrielPapafigo,
    github: 'https://github.com/anasantos',
  },
  {
    name: 'Levi Moraes',
    image: LeviReiDoBlood,
    github: 'https://github.com/carlosoliveira',
  },
  {
    name: 'Kayky Dias',
    image: kaykeKarateKid ,
    github: 'https://github.com/marianacosta',
  }

];

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>DevTeam</div>
          
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.teamSection}>
          <h1>Nossa Equipe de Desenvolvedores</h1>
          <div className={styles.teamGrid}>
            {developers.map((dev) => (
              <div className={styles.devCard} key={dev.github}>
                <div className={styles.cardImage}>
                  <img src={dev.image} alt={dev.name} />
                </div>
                <div className={styles.cardContent}>
                  <h2>{dev.name}</h2>
                  <a href={dev.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2023 DevTeam. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
