import './search-box.styles.css';
import { RiSearchLine } from 'react-icons/ri';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

const SearchBox = () => {
  const {handleSearch} = useContext(AppContext);
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
