import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Skills = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Skills</h1>
        <Link href={"/"}>Top</Link>
      </main>
    </>
  );
};

export default Skills;
