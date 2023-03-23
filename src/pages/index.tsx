import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export interface IPokemon {
  name: string;
  url: string;
  id?: number;
}

export interface IPokemonsList {
  pokemons: IPokemon[];
}

export async function getStaticProps() {
  const allPokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=50`,
    {
      method: "GET",
    }
  );

  const allPokemonsJson = await allPokemons.json();

  const pokemonsWithIds = allPokemonsJson.results.map(
    (pokemon: IPokemon, index: number) => {
      return {
        ...pokemon,
        id: index + 1,
      };
    }
  );

  return {
    props: {
      pokemons: pokemonsWithIds,
    },
  };
}

export default function Home({ pokemons }: IPokemonsList) {
  console.log(pokemons);
  return (
    <>
      <main className={styles.container}>
        <ul>
          {pokemons.map((pokemon) => {
            return (
              <li key={pokemon.id}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  width="200"
                  height="200"
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
                <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
                  <a>Ver informações</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
