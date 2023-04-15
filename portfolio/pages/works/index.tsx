import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Links from "@/components/links";

const Works = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Works</h1>
        <Links />
      </main>
    </>
  );
};

export default Works;
