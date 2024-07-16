import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import { Pokemon, PokemonApi } from '../app/http/pokemon';

PokemonDetailPage.loader = async function ({
  params,
}: {
  params: { pokemonName: string };
}) {
  const response = await PokemonApi.getOne({ name: params.pokemonName });
  return { pokemon: response.data.pokemon, func: () => console.log('hello') };
};

export default function PokemonDetailPage() {
  const { pokemon, func } = useLoaderData() as { pokemon: Pokemon };
  const navigation = useNavigation();

  func();

  if (navigation.state === 'loading') {
    return 'loading';
  }

  return (
    <div id="pokemon">
      <div>
        <img key={pokemon.id} src={pokemon.sprites.front_default} />
      </div>

      <div>
        <h1>{pokemon.name}</h1>
        {pokemon.species.name}
        <div>
          {pokemon.forms.length && (
            <ul>
              {pokemon.forms.map((form) => (
                <li>
                  <a href={form.id}>{form.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {pokemon.stats.length && (
            <ul>
              {pokemon.stats.map(({ base_stat, effort, stat }) => (
                <li>
                  {base_stat} <a href={stat.url}>{stat.name}</a>
                  {Number(effort) > 0 && ` (${effort})`}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          {pokemon.moves.length && (
            <ul>
              {pokemon.moves.map(({ move }) => (
                <li>{move.name}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
