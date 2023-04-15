import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Works = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Works</h1>
        <Link href={"/"}>Top</Link>
      </main>
    </>
  );
};

export default Works;
