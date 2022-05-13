import SearchBox from '../../components/search-box/search-box.component';
import MovieList from '../../components/movie-list/movie-list.component';
import './home.styles.css'
import { data } from '../../data';
import { useState, useEffect } from 'react';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState(movies);

  useEffect(() => {
    setMovies(data);
  }, []);

  useEffect(() => {
    const newfilterMovies = movies.filter((mv) => {
      return mv.title.toLocaleLowerCase().includes(searchString);
    });
    setFilterMovies(newfilterMovies);
  }, [movies, searchString]);

  const handleSearch = (e) => {
    const newSearchString = e.target.value.toLocaleLowerCase();
    setSearchString(newSearchString);
  };

  return (
    <div className='home-container'>
      <SearchBox handleSearch={handleSearch} />
      <MovieList filterMovies={filterMovies}/>
    </div>
  );
};

export default Home;
