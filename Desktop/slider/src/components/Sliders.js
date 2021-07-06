
import React from 'react';
import { Slide } from 'react-slideshow-image';
import './sliders.css'
import 'react-slideshow-image/dist/styles.css';
import image_1 from '../images/slider_1.jpg'
import image_2 from '../images/slider_2.jpg'
import image_3 from '../images/slider_3.jpg'
const slideImages = [
    {
        image: image_1,

        title: "Event 1"
    },
    {
        image: image_2,
        title: "Event 2"
    },
    {
        image: image_3,
        title: "Event 3"
    }
];
console.log(slideImages)
const Slideshow = () => {
    return (
        <div>

            <Slide className="shdw-box" easing="ease">
                {slideImages.map((imageUrl, index) => (
                    <div key={index} className="each-slide">
                        <div style={{ 'backgroundImage': `url(${imageUrl.image})` }}>
                            <span>{imageUrl.title}</span>
                        </div>
                    </div>))}

            </Slide>


        </div>
    )
};

export default Slideshow;