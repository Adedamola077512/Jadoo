import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import './Testimonials.css';

// Dummy Data for Testimonials
const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
  },
  {
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "“Wise busy past from my such swift so in appeared. Taken none shy whether out marked as one. To celebrated or behaving out otherwise.”",
    name: "Chris Thomas",
    location: "CEO of Red Button",
  },
  {
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    text: "“Day by day, he's in so much more of the same. Much and much that he finds himself. Themselves in the moment.”",
    name: "David Johnson",
    location: "Head of Sales, ABC Corp",
  }
];

const Testimonial = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center test">
        <div className="col-lg-5 text-lg-start text-center mb-4">
          <h6 className="text-muted text-card">TESTIMONIALS</h6>
          <h2 className="fw-bold About-card">What People Say <br /> About Us.</h2>
        </div>
        <div className="col-lg-7">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card p-4 shadow-sm bg-white rounded position-relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-img rounded-circle border border-3 border-white"
                  />
                  <p className="text-muted">{item.text}</p>
                  <h5 className="mt-3">{item.name}</h5>
                  <span className="text-muted">{item.location}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
