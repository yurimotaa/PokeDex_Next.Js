import Image from "next/image";
import { IPokemon } from "..";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Pokemon.module.css";

export interface IPokemonData {
  abilities: Array<object>;
  base_experience: number;
  forms: Array<object>;
  game_indices: Array<object>;
  height: number;
  held_items?: Array<object>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<object>;
  name: string;
  order: number;
  past_types?: Array<object>;
  species: Array<object>;
  sprites: Array<object>;
  stats: Array<object>;
  types: Array<{ type: { name: string } }>;
  weight: number;
}

export interface IPokemonFinally {
  pokemon: IPokemonData;
}

export async function getStaticPaths() {
  const allPokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=50`,
    {
      method: "GET",
    }
  );

  const allPokemonsJson = await allPokemons.json();

  const paths = allPokemonsJson.results.map(
    (pokemon: IPokemon, index: number) => {
      return {
        params: { pokemonId: (index + 1).toString() },
      };
    }
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.pokemonId;

  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: "GET",
  });

  const pokemonDataJson = await pokemonData.json();

  return {
    props: {
      pokemon: pokemonDataJson,
    },
  };
}

export default function Pokemon({ pokemon }: IPokemonFinally) {
  console.log(pokemon);

  return (
    <>
      <main className={styles.container}>
        <div className={styles.container__content}>
          <h1>{pokemon.name}</h1>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width="200"
            height="200"
            alt={pokemon.name}
          />
          <div className={styles.container__content__types}>
            <p>Tipo(s):</p>
            {pokemon.types.map((item) => {
              return <span key={uuidv4()}>{item.type.name}</span>;
            })}
          </div>
          <div className={styles.container__content__characteristics}>
            <p>Peso: {pokemon.weight}</p>
            <p>Altura: {pokemon.height}</p>
          </div>
        </div>
      </main>
    </>
  );
}
