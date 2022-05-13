import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import './App.css';
import BookmarkPage from './routes/all-bookmarks/all-bookmarks.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}></Route>
        <Route path='bookmarks' element={<BookmarkPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
