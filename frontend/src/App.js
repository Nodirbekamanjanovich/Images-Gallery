import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  console.log(images); /// ... and we get actual data

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    setWord('');
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    ) ///we have used fetch function that returns Promise. And Promise could be either resolved or rejected
      .then((res) => res.json()) ///response /// and thats what we have actually do when Promise is resolved ...
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err); ///error /// If the Promise is rejected we could print err to the console log and do some other actions afterwards
      });
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
