import './search-box.styles.css';
import { RiSearchLine } from 'react-icons/ri';

const SearchBox = ({ handleSearch }) => {
  return (
    <div className='search-box-container'>
      <RiSearchLine className='search-icon'/>
      <input
        className='search-box'
        type='search'
        placeholder='Search for movies or TV series'
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
