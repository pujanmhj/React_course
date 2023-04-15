import React from 'react'
import Wrapper from '../Common/Wrapper'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
 function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
 <div>
  <Wrapper>
    <h1>
      hhhhhhhhhhhhhhhhhhhhhhhhfa-flip-horizontal
      jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </h1>
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="bike"
        />
        <Carousel.Caption>
          <h3>BIKES</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="car"
        />

        <Carousel.Caption>
          <h3>Sexy Cars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1503434396599-58ba8a18d932?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Scooter"
        />

        <Carousel.Caption>
          <h3>Beautiful Scooter</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
  </Wrapper>
 </div>
  )
}
export default Home;