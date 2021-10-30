import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import { useState, useEffect, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  const name = 'Company Name';
  const { pathname } = useLocation();
  const [page, setPage] = useState(pathname);
  const [keyword, setKeyword] = useState('');

  function saveSearch(term) {
    setKeyword(term);
  }

  useEffect(() => {
    let newPath = pathname.split('/')[1];
    console.log(newPath);
    let oldPath = page.split('/')[1];
    if(newPath !== oldPath) {
      setPage(pathname);
      console.log('CHANGED the base path');
      setKeyword('');
    }else{
      console.log('same base path');
    }
  }, [pathname, page])

 const sbInputRef = createRef();

  return (
    <div className="App">
      <Header company={name} />
      <SearchBar ref={sbInputRef} keyword={keyword} saveSearch={saveSearch} />
      <main className="content">
        <Main keyword={keyword} />
      </main>
    </div>
  );
}

export default App;
