import MovieList from "../../components/movie-list/movie-list.component"
import { useState, useEffect } from "react"
import { data } from "../../data";

const BookmarkPage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState(data);

  
  useEffect(()=>{
    const newBookmarkedMovies = bookmarkedMovies.filter((bm)=>{
      return bm.isBookmarked == true;
    })
    setBookmarkedMovies(newBookmarkedMovies);
  })

  return(
    <MovieList filterMovies={bookmarkedMovies} />
  )
}

export default BookmarkPage;