import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';
import News from '../News/News.tsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.app_header} />
      <main className={styles.app_main}>
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
