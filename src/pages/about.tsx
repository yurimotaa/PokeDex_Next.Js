import Image from "next/image";

import styles from "../../src/styles/About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.container}>
        <h1>Sobre o projeto</h1>
        <h2>
          PokeDex é um projeto constuído em NextJs para obter informações sobre
          Pokémons
        </h2>
        <Image src="/about.png" width="450" height="250" alt="pokemóns" />
      </section>
    </>
  );
}
