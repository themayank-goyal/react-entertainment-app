import { useEffect, useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
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
    <div>
      {/* <nav className='navbar'>
        <div className='nav-link'>TV</div>
        <div className='nav-link'>Movies</div>
        <div className='nav-link'>bookmark</div>
        <div className='nav-link'>TV</div>
      </nav> */}
      <input type='search' onChange={handleSearch} />
      <div className='section-movies'>
        {filterMovies.map((mv) => {
          return (
            <div className='movie-container'>
              <div>
                <img
                  className='movie-img'
                  src={mv.thumbnail.regular.medium}
                  alt=''
                />
              </div>
              <ul className='mov-details'>
                <li>{mv.year}</li>
                <li>{mv.category}</li>
                <li>{mv.rating}</li>
              </ul>
              <span>{mv.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
