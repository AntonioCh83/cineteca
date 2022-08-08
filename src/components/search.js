import React,{useState} from 'react';

const Search = ({funcSearch}) => {
    const [search, setSearch] = useState('');
    const uploadSearch=({target})=>{
        const searchStr=target.value;
        setSearch(searchStr);
    }

    const searchFilms=(e)=>{
        e.preventDefault();
        if(search.length > 3){
            funcSearch(search)
        }
        
    }

  return (
    <form className="form-inline d-flex mt-1 mt-md-0">
        <input
          onChange={uploadSearch}
          name='search'
          value={search}
          className="form-control mr-2 mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={searchFilms} className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        <button onClick={()=>{setSearch('')}} className="btn btn-outline-info my-2 my-sm-0" type="reset">
          Reset
        </button>
      </form>
  );
}

export default Search;
