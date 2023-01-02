import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    ///console.log(word);
    setWord('');
    fetch(`${API_URL}/new-image?query=${word}`) ///we have used fetch function that returns Promise. And Promise could be either resolved or rejected
      .then((res) => res.json()) ///response /// and thats what we have actually do when Promise is resolved ...
      .then((data) => {
        ///console.log(data) /// ... and we get actual data
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err); ///error /// If the Promise is rejected we could print err to the console log and do some other actions afterwards
      });
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
