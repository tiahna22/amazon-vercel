// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

function Banner() {
  return (
    <div>
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className=" w-100"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;