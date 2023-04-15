import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Links from "@/components/links";

const Skills = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Skills</h1>
        <Links />
      </main>
    </>
  );
};

export default Skills;
