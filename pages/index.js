import Head from "next/head";
import styles from "../styles/underConstruction.module.css"; // Mantenha apenas esta importação do CSS Module

function Home() {
  return (
    <>
      <Head>
        <title>Monica Gushiken</title>
      </Head>

      <main className={styles.mainContent}>
        <h1 className={styles.heading}>monicagushiken.com.br</h1>
        <p className={styles.paragraph}>Site em construção</p>
      </main>
    </>
  );
}

export default Home;
