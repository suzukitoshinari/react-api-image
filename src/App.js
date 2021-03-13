import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  const [images, setImages] = useState([]);
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: ApiKey,
        q: term,
      };
      const res = await axios.get("https://pixabay.com/api/", { params });
      setImages(res.data.hits);
      if (res.data.total === 0) {
        window.alert('お探しの画像はありません');
      }
    } catch {
      window.alert('失敗しました');
    }
  };

  return (
    <div className='container'>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images}/>
    </div>
  ); 
}

export default App;
