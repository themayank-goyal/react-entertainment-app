import MovieList from '../../components/movie-list/movie-list.component';
import SearchBox from '../search-box/search-box.component.jsx';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';

const MoviePage = () => {
  const { newFilterMovies, handleSearch } = useContext(AppContext);
  const [bookmarkedMovies, setBookmarkedMovies] = useState(newFilterMovies);

  useEffect(() => {
    const newBookmarks = newFilterMovies.filter((movies) => {
      return movies.category === 'Movie';
    });
    setBookmarkedMovies(newBookmarks);
  }, [newFilterMovies]);

  return (
    <div className='border-2 border-yellow-300'>
      <SearchBox />
      <MovieList filterMovies={bookmarkedMovies} />
    </div>
  );
};

export default MoviePage;
