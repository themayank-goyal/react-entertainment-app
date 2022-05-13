import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext({
  // movies: [],
  // setMovies: () => null,
  // filterMovies: [],
  // setFilterMovies: () => null,
});

export const AppProvider = ({ children }) => {
  // const [movies, setMovies] = useState([]);
  // const [filterMovies, setFilterMovies] = useState(movies);
  // const value = { movies, setMovies, filterMovies, setFilterMovies };

  return <AppContext.Provider value={[]}>{children}</AppContext.Provider>;
};
