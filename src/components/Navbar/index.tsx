import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image priority src="/logo.png" width="120" height="50" alt="Pokedex" />
        <h1>PokeDex</h1>
      </div>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
