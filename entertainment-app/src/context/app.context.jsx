import { createContext } from 'react';
import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocFromUserAuth,
  bookmarkingFunc,
} from '../utils/firebase/firebase.utils';

export const AppContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [filterMovies, setFilterMovies] = useState(movies);
  const [currentUser, setCurrentUser] = useState();

  const handleGoogleClick = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromUserAuth(user);
    setCurrentUser(user);
  };

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
    handleGoogleClick,
    currentUser,
    setCurrentUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
