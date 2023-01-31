import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as HomeSVG } from '../../assets/icon-nav-home.svg';
import { ReactComponent as BookmarkSVG } from '../../assets/icon-nav-bookmark.svg';
import { ReactComponent as MoviesSVG } from '../../assets/icon-nav-movies.svg';
import { ReactComponent as TvSVG } from '../../assets/icon-nav-tv-series.svg';
import SearchBox from '../../routes/search-box/search-box.component';
import { FaUserAlt } from 'react-icons/fa';
import './navbar.styles.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

const Navbar = () => {
  const { currentUser } = useContext(AppContext);
  console.log(currentUser);
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
            {currentUser ? (
              <div className='avatar placeholder'>
                <div className='bg-neutral-focus text-neutral-content rounded-full w-12'>
                  <span className='text-3xl'>
                    <img
                      src={currentUser?.photoURL}
                      alt={currentUser.displayName}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <FaUserAlt className='nav-icon user-icon' />
            )}
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
