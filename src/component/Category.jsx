import React from "react";
import "./Category.css";

// Import images from assets
import course1 from "../assets/Group.jpg";
import course2 from "../assets/plane.jpg";
import course3 from "../assets/Group 50.jpg";
import course4 from "../assets/Group 49.jpg";

// Category data
const categories = [
  {
    title: "Calculated Weather",
    text: "Built Wicket longer admire do barton vanity itself do in it.",
    image: course1,
  },
  {
    title: "Best Flights",
    text: "Engrossed listening. Park gate sell they west hard for the.",
    image: course2,
  },
  {
    title: "Local Events",
    text: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    image: course3,
  },
  {
    title: "Customization",
    text: "We deliver outsourced aviation services for military customers.",
    image: course4,
  },
];

const Category = () => {
  return (
    <div className="container mt-5 top">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h5 className="cate">CATEGORY</h5>
        <h1 className="offer"><b>We Offer Best Services</b></h1>
      </div>

      {/* Category Cards */}
      <div className="row g-4">
        {categories.map((popular, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="course-card p-3 shadow bg-white rounded text-center rows">
              {/* Image */}
              <div className="course-image mb-3">
                <img src={popular.image} alt={popular.title} className="img1" />
              </div>
              {/* Content */}
              <div className="text-dark">
                <h5>{popular.title}</h5>
                <p className="text-muted">{popular.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
