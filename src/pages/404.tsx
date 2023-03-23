import Image from "next/image";
import Link from "next/link";
import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Desculpe, página não encontrada</h1>
      <Image src="/404.png" width="350" height="250" alt="pokémon" />
      <Link href="/" legacyBehavior>
        <a>Voltar</a>
      </Link>
    </div>
  );
}
