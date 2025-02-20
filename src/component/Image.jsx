import React from 'react'
import './Image.css'

// import image from asserts
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

// image component to display images

// const Images = [img1, img2, img3, img4, img5];
// {Images.map((image, index) => (
//     <img key={index} src={image} alt="image" />
// ))}

const Image = () => {
  return (
    <marquee className="container custom-marquee" direction="">
        <div className='image-marquee'>
            <div><img className="image-size" src={img1} alt="image" /></div>
            <div><img className="image-size" src={img2} alt="image" /></div>
            <div><img className="image-size" src={img3} alt="image" /></div>
            <div><img className="image-size" src={img4} alt="image" /></div>
            <div><img className="image-size" src={img5} alt="image" /></div>
        </div>
    </marquee>
  )
}

export default Image