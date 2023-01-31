import { ReactComponent as MarkFilled } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as MarkEmpty } from '../../assets/icon-bookmark-full.svg';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './bookmark.styles.css'

const Bookmark = ({ movie, index }) => {
  const [isMarked, setIsMarked] = useState(true);

  const handleBookmarkChange = async (e) => {
    if (isMarked) {
      setIsMarked(false);
    } else {
      setIsMarked(true);
    }
  };

  return (
    <div className='bookmark-container'>
      <label htmlFor={index}>{isMarked ? <MarkFilled /> : <MarkEmpty />}</label>
      <input id={index} type='checkbox' hidden  onChange={handleBookmarkChange} />
    </div>
  );
};

export default Bookmark;
