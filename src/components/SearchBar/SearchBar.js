import './searchBar.css';

import { createRef, useEffect, forwardRef } from 'react';

export default forwardRef (function SearchBar(props, ref) {
  const { keyword, saveSearch } = props;
  //let inputRef = createRef(); // container for Dom Element

  function submitted(ev) {
    ev.preventDefault();
    console.log('submitted');
    //saveSearch(inputRef.current.value);
  }


  // useEffect(() => {
  //   inputRef.current.value = keyword;
  // }, [keyword, inputRef])

  return (
    <section className="searchBar">
      <form onSubmit={submitted}>
        <input
          type="text"
          ref={ref}
          name="keyword"
          className="searchText"
          placeholder="keyword"
        />
        <button
          type="submit"
          className="searchBtn"
          name="searchBtn"
        >
          Search
        </button>
      </form>
      {props.term && <p>You searched for {props.term}</p>}
    </section>
  )
});
//{props.term ? <p>You searched for {props.term}</p> : ''}