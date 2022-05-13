import { ReactComponent as MarkEmpty } from '../../assets/icon-bookmark-empty.svg';

const Bookmark = ({ movie }) => {
  const handleChange = (e) => {
    
  };
  return (
    <div>
      <label htmlFor=''>
        <MarkEmpty />
      </label>
      <input type='radio' onChange={handleChange} />
    </div>
  );
};

export default Bookmark;
