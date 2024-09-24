import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe'
import bg1 from './images/img1.webp'
import bg2 from './images/img2.webp'


function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={bg1}/>
        <Carousel.Caption>
          <h3>Kerala</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Pictureframe imageUrl={bg2}/>
        
        <Carousel.Caption>
          <h3>Kerala</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;