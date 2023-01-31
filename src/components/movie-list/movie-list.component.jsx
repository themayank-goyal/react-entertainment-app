import Movie from "../movie/movie.component";
import './movie-list.styles.css'

const MovieList = ({filterMovies}) => {
  return(
    <div className='section-movies'>
        {filterMovies.map((mv, i) => {
          return (
            <Movie movie={mv} key={i} index={i}/>
          );
        })}
      </div>
  )
}

export default MovieList;