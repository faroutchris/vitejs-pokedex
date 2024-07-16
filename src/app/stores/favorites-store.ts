import { create } from 'zustand';
import { Pokemon } from '../http/pokemon';

type State = {
  favorites: Pokemon[];
};

type Action = {
  addFavorite: (pokemon: Pokemon) => void;
};

const favoritesStore = create<State & Action>((set) => ({
  favorites: [],
  addFavorite: (pokemon: Pokemon) =>
    set((state) => ({ ...state, favorites: [...state.favorites, pokemon] })),
}));

export default favoritesStore;
