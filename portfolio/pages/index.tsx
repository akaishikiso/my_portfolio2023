import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pages = ["about-me", "experience", "skills", "works"];
  return (
    <>
      <main className={styles.main}>
        <div>
          <h1>Yamada Riko</h1>
          <p>#Engineering #Design #Education #Sprint and #</p>
          <Image src={"./next.svg"} alt={"pic"} width={100} height={100} />
        </div>
        <div>
          {pages.map((page, index) => (
            <Link href={`/${page}`} key={index}>
              {page}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
