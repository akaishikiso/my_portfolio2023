import Head from "next/head";
import Image from "next/image";
import { Major_Mono_Display, Zen_Maru_Gothic } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Links from "@/components/links";

const major_Mono_Display = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
});
const zen_Maru_Gothic = Zen_Maru_Gothic({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={styles.main}
        style={{ fontFamily: `${major_Mono_Display}` }}>
        <div>
          <h1>Yamada Riko</h1>
          <p>#Engineering #Design #Education #Sprint and #__________</p>
          <Image src={"./next.svg"} alt={"pic"} width={100} height={100} />
        </div>
        <div>
          <Links />
        </div>
      </main>
    </>
  );
}
