import Link from "next/link";
import styles from "@/styles/Home.module.css";

const AboutMe = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>About me</h1>
        <Link href={"/"}>Top</Link>
      </main>
    </>
  );
};

export default AboutMe;
