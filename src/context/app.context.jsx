import { createContext } from 'react';
import { useState } from 'react';
import { signInUsingGoogle } from '../utils/firebase/firebase.utils';

export const 
AppContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [filterMovies, setFilterMovies] = useState(movies);
  const [currentUser, setCurrentUser] = useState();

  const handleGoogleClick = () => {
    signInUsingGoogle(setCurrentUser);
  }

  const handleSearch = (e) => {
    const newSearchString = e.target.value.toLocaleLowerCase();
    setSearchString(newSearchString);
  };

  const newFilterMovies = movies.filter((mv) => {
    return mv.title.toLocaleLowerCase().includes(searchString);
  });

  const value = {
    handleSearch,
    searchString,
    newFilterMovies,
    movies,
    setMovies,
    filterMovies,
    setFilterMovies,
    currentUser,
    setCurrentUser,
    handleGoogleClick
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
