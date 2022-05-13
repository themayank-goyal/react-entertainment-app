import Bookmark from '../bookmark/bookmark.component';
import './movie.styles.css'

const Movie = ({ movie }) => {
  return (
    <div className='movie-container'>
      <div>
        <Bookmark movie={movie}/>
        <img
          className='movie-img'
          src={movie.thumbnail.regular.medium}
          alt=''
        />
      </div>
      <ul className='mov-details'>
        {movie.year}
        <li>{movie.category}</li>
        <li>{movie.rating}</li>
      </ul>
      <span className='movie-title'>{movie.title}</span>
    </div>
  );
};

export default Movie;
