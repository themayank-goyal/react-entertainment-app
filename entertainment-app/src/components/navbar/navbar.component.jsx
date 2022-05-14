import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as HomeSVG } from '../../assets/icon-nav-home.svg';
import { ReactComponent as BookmarkSVG } from '../../assets/icon-nav-bookmark.svg';
import { ReactComponent as MoviesSVG } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as TvSVG } from '../../assets/icon-nav-tv-series.svg';
import SearchBox from '../../routes/search-box/search-box.component';
import { FaUserAlt } from 'react-icons/fa';
import './navbar.styles.css';
import { createUserDocFromUserAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const Navbar = () => {

  return (
    <>
      <div className='navbar-container'>
        <nav className='navbar'>
          {/* <img src={catMov} alt='' /> */}
          <Link to='/'>
            <HomeSVG className='nav-icon' />
            {/* <img className='nav-icon' src={home} alt='' /> */}
          </Link>
          <Link to='/movies'>
            <MoviesSVG className='nav-icon' />
          </Link>
          <Link to='/tv-series'>
            <TvSVG className='nav-icon' />
          </Link>
          <Link to='/bookmarks'>
            <BookmarkSVG className='nav-icon' />
          </Link>
          <Link to='/sign-in'>
            <FaUserAlt className='nav-icon user-icon'/>
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
