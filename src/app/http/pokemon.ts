export type Pokemon = {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  forms: Array<{
    id: string;
    name: string;
  }>;
  moves: Array<{
    move: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    effort: string;
    stat: {
      id: string;
      name: string;
      url: string;
    };
  }>;
  species: {
    id: number;
    name: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

const getOneQuery = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    forms {
      id
      name
    }
    moves {
      move {
        name
      }
    }
    stats {
      base_stat
      effort
      stat {
        id
        url
        name
      }
    }
    species {
      id 
      name
    }
    types {
      type {
        name
      }
    }
  }
}`;

const getListQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    nextOffset
    prevOffset
    status
    message
    results {
      url
      name
      image
    }
  }
}
`;

export class PokemonApi {
  static async getOne(variables: { name: string }): Promise<{
    data: { pokemon: Pokemon };
  }> {
    const res = await fetch('https://graphql-pokeapi.graphcdn.app/', {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: getOneQuery,
        variables,
      }),
      method: 'POST',
    });
    return await res.json();
  }

  static async getList(variables: { limit: number; offset: number }) {
    const res = await fetch('https://graphql-pokeapi.graphcdn.app/', {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: getListQuery,
        variables: variables,
      }),
      method: 'POST',
    });
    return await res.json();
  }
}
