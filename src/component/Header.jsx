import React from 'react'
import './Header.css'
import blog from '../assets/travel.jpg'

export const Header = () => {
  return (
    <div className='container my-5 mt-5'>
        <div className='about'>
            <div className="about-text">
                <h5 className='Best'>Best Destinations around the world</h5>
                <h1 className='Travel'>Travel, enjoy <br />and live a new <br />and full life</h1>
                <p className='Built'>Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br />sell they west hard for the.</p>
                <button className='learn'>Find out more</button>
            </div>
            <div><img src= {blog} alt="blog" className='blog'/></div>
        </div>
    </div>
  )
}

export default Header