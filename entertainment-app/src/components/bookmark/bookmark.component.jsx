import { ReactComponent as MarkFilled } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as MarkEmpty } from '../../assets/icon-bookmark-full.svg';
import { useContext, useState } from 'react';
import { bookmarkingFunc } from '../../utils/firebase/firebase.utils';
import { AppContext } from '../../context/app.context';
import { v4 as uuidv4 } from 'uuid';
import './bookmark.styles.css'

const Bookmark = ({ movie, index }) => {
  const {currentUser } = useContext(AppContext);
  const [isMarked, setIsMarked] = useState(true);

  const handleBookmarkChange = async (e) => {
    if (isMarked) {
      setIsMarked(false);
    } else {
      setIsMarked(true);
    }
    await bookmarkingFunc(currentUser, index);
    // console.log(response);
  };

  return (
    <div className='bookmark-container'>
      <label htmlFor={index}>{isMarked ? <MarkFilled /> : <MarkEmpty />}</label>
      <input id={index} type='checkbox' hidden  onChange={handleBookmarkChange} />
    </div>
  );
};

export default Bookmark;
