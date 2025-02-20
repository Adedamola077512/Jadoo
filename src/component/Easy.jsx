import React from 'react'
import './Easy.css';

// Import images from assets
import box from "../assets/box.jpg";
import box1 from "../assets/box1.jpg";
import box2 from "../assets/box2.jpg";
import box3 from "../assets/box3.jpg";


// Easy component 1: Book your next trip in 3 easy steps    
const courses = [
  { title: "Choose Destination", image: box,},
  { title: "Make Payment", image: box1,},
  { title: "Reach Airport on Selected Date", image: box2,},

];
const Easy = () => {
  return (
    <div className='container mt-5'>
        <div>
            <div  className="popular-course">
                <div>
                    <h5>Easy and Fast</h5>
                    <h1 className='Book'>Book your next trip <br />in 3 easy steps</h1>
                    {courses.map((popular, index) => (
                       <div key={index} className="easy-box">
                            <img src={popular.image} alt="image" />
                            <div>
                               <h6 className='chose'>{popular.title}</h6>
                               <p className='lorem'>Lorem ipsum dolor sit amet, consectetur 
                               adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                       </div>
                    ))}
                </div> 
                <div>
                    <img src={box3} alt=""  className="box3" />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Easy