import React from "react";
import { Carousel } from "react-bootstrap";

function carasel()
{
    return(<Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-76/data1/images/bookshelf349946_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
      <h1 >“A room without books is like a body without a soul.” </h1>
      
    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.stack.imgur.com/xNRZw.jpg"
            alt="Second slide"
          />
      
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://onlyschoolbooks.com/pub/media/wysiwyg/2.jpg"
            alt="Third slide"
          />
      
         
        </Carousel.Item>
      </Carousel>

    )
    }

    export default carasel;
