import MovieList from '../../components/movie-list/movie-list.component';
import SearchBox from '../search-box/search-box.component.jsx';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/app.context';

const TV = () => {
  const { newFilterMovies, handleSearch } = useContext(AppContext);
  const [bookmarkedMovies, setBookmarkedMovies] = useState(newFilterMovies);

  useEffect(() => {
    const newBookmarks = newFilterMovies.filter((movies) => {
      return movies.category === 'TV Series';
    });
    setBookmarkedMovies(newBookmarks);
  }, [newFilterMovies]);

  return (
    <div>
      <SearchBox />
      <MovieList filterMovies={bookmarkedMovies} />
      );
    </div>
  );
};

export default TV;
