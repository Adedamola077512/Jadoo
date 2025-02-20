import React from 'react';
import './TopSelling.css';

// Import images from assets
import course1 from "../assets/house1.jpg";
import course2 from "../assets/house2.jpg";
import course3 from "../assets/house3.jpg";


const courses = [
  { title: "Rome, Italty", image: course1, amount: "$5,42k", content: "↗↗ 10 Days Trip" },
  { title: "London, UK", image: course2, amount: "$4.2k", content: "↗↗ 12 Days Trip"},
  { title: "Full Europe", image: course3, amount: "$15k", content: "↗↗ 15 Days Trip"},

];

const TopSelling = () => {
  return (
    <div className="container my-5 my">
      <div className="text-center">
        <h5>Top Selling</h5>
        <h1><b>Top Destinations</b></h1>
      </div>
      <div className=" row my-5">
        {courses.map((popular, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <img src={popular.image} className="card-img"/>
              <div className='Top'>
                <div><h6 className="">{popular.title}</h6></div>
                <div><p className="">{popular.amount}</p></div>
              </div>
              <p className=' content'> {popular.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;