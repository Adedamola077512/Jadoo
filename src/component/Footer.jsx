import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-white mm text-dark mt-5">
      <div className="container py-4">
        <div className="row justify-content-between">
          <div className="col-md-4 mb-4">
            <a href="#" className="d-flex align-items-center text-decoration-none jodoo">
              <span className="fs-1 ">Jadoo</span>
            </a>
            <p>Book your trip in minute, get full <br />Control for much longer.</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-6 col-md-4 mb-4">
                <h6 className="text-uppercase fw-bold">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://flowbite.com/" className="text-muted text-decoration-none Press">About</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="text-muted text-decoration-none Press">Careers</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="text-muted text-decoration-none Press">Mobile</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://github.com/themesberg/flowbite" className="text-muted Press text-decoration-none">Help/FAQ</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="text-muted text-decoration-none Press">Press</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="text-muted text-decoration-none">Affilates</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4 mb-4">
                <h6 className="text-uppercase fw-bold">More</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-muted text-decoration-none Press">Airlinefees</a>
                  </li>
                  <li>
                    <a href="#" className="text-muted text-decoration-none Press">Airline</a>
                  </li>
                  <li>
                    <a href="#" className="text-muted text-decoration-none Press">Low fare tips</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          All rights reserved@jadoo.co
        </div>
      </div>
    </footer>
  );
};

export default Footer;
