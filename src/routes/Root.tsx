import { Outlet, Link } from 'react-router-dom';

Root.loader = () => {};

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Eastwood</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            {new Array(150).fill('').map((_, index) => {
              return (
                <li>
                  <Link to={`/pokemon/${index + 1}`}>Pokemon {index + 1}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
