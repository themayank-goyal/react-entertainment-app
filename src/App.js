import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import BookmarkPage from './routes/bookmark-page/bookmark-page.component';
import TV from './routes/tv/tv.component';
import MoviePage from './routes/movie/movie-page.component';
import Authentication from './routes/authentication/authentication.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path='/bookmarks' element={<BookmarkPage />}></Route>
        <Route path='/tv-series' element={<TV />}></Route>
        <Route path='/movies' element={<MoviePage />}></Route>
        <Route path='/sign-in' element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
