import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookNest</h2>
            <p className='fs-17'>BookNest is an online book app offering a seamless experience for readers, with thousands of titles across genres and personalized recommendations. Its intuitive design makes it easy to browse, purchase, and explore new books.
            </p>
            <p className='fs-17'>With features like adjustable font sizes, night mode, and offline reading, BookNest is ideal for modern readers. Subscription plans give unlimited access, and social features let users connect, share reviews, and join book discussions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
