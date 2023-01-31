import SearchBox from '../search-box/search-box.component';
import MovieList from '../../components/movie-list/movie-list.component';
import './home.styles.css';
import { data } from '../../data';
import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';

const Home = () => {
  const {
    searchString,
    handleSearch,
    movies,
    setMovies,
    newFilterMovies,
    filterMovies,
    setFilterMovies,
  } = useContext(AppContext);

  useEffect(() => {
    setMovies(data);
  }, []);

  useEffect(() => {
    setFilterMovies(newFilterMovies);
  }, [movies, searchString]);

  return (
    <div className='home-container'>
      <SearchBox />
      <MovieList filterMovies={filterMovies} />
    </div>
  );
};

export default Home;
