import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Links from "@/components/links";

const AboutMe = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>About me</h1>
        <Links />
      </main>
    </>
  );
};

export default AboutMe;
