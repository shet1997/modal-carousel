import React, { Component } from 'react';
import images from './images.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Carousels extends Component {
  render() { 
    const jsonData = images.carouselItems;
    const currentSubject = this.props.ancornameprop;
    const carouseImages = jsonData.filter(data => { return data.key !== currentSubject})
    return ( 
        <Carousel responsive={responsive}>
            {carouseImages.map(items => (
              <div key={items.key}>
                <img
                  src={items.image}
                  alt={items.name}
                />
              </div>
            ))}
        </Carousel> 
     );
  }
}
 
export default Carousels;