import { RouteObject } from 'react-router-dom';
import ErrorPage from './components/Error';
import Root from './routes/Root';
import PokemonDetailPage from './routes/PokemonDetail';

const router: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'pokemon/:pokemonName',
        element: <PokemonDetailPage />,
        loader: PokemonDetailPage.loader,
      },
    ],
  },
];

export default router;
