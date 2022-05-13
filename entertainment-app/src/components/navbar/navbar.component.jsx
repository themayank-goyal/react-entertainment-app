import { Link, Outlet } from 'react-router-dom';
import home from '../../assets/icon-nav-home.svg';
import bookmark from '../../assets/icon-nav-bookmark.svg';
import movies from '../../assets/icon-nav-movies.svg';
import tv from '../../assets/icon-nav-tv-series.svg';
import './navbar.styles.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <Link to='/'>
          <img className='nav-icon' src={home} alt='' />
        </Link>
        <Link to='/tv'>
          <img className='nav-icon' src={movies} alt='' />
        </Link>
        <Link to='/'>
          <img className='nav-icon' src={tv} alt='' />
        </Link>
        <Link to='/bookmarks'>
          <img className='nav-icon' src={bookmark} alt='' />
        </Link>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
