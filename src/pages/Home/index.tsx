import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getStarships } from '@store/starships/slice';
import { smallStarshipsSelector, starshipsSelector } from '@store/starships/selectors';
import { Button } from '@components/Button';
import { useAppDispatch } from '@store';

const Home = () => {
  const dispatch = useAppDispatch();
  const smallStarships = useSelector(smallStarshipsSelector);
  const { isLoading } = useSelector(starshipsSelector);

  const handleLoadStarships = () => {
    dispatch(getStarships());
  };

  return (
    <div>
      <h1>Just for example 😎</h1>
      <br />
      <NavLink to="/blablabla">go to 404</NavLink>
      <br />
      <br />
      <h2>StarWars Starships:</h2>
      <br />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {smallStarships.map((s) => (
            <li key={s.name}>
              {s.name} {s.model}
            </li>
          ))}
        </ul>
      )}
      <br />
      <Button isInline type="button" onClick={handleLoadStarships}>
        load starships
      </Button>
    </div>
  );
};

export default Home;
