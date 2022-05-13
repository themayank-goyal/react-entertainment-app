import Movie from "../movie/movie.component";
import './movie-list.styles.css'

const MovieList = ({filterMovies}) => {
  return(
    <div className='section-movies'>
        {filterMovies.map((mv) => {
          return (
            <Movie movie={mv}/>
          );
        })}
      </div>
  )
}

export default MovieList;