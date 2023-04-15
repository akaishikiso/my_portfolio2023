import Link from "next/link";
import styles from "@/styles/Home.module.css";

export type LinksProps = {
  readonly pages: Array<string>;
};
const Links = () => {
  const pages = ["about-me", "experience", "skills", "works"];

  return (
    <div className={styles.links}>
      {pages.map((page, index) => (
        <Link href={`/${page}`} key={index}>
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Links;
