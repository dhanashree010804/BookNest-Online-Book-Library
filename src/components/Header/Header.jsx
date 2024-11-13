import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Your gateway to endless books.</h2><br />
                <p className='header-text fs-18 fw-3'>"Welcome to BookNest – your gateway to a world of endless reading! Discover a vast collection of books across genres, curated to fuel your curiosity and passion for stories. Dive into our digital shelves and find your next favorite read, all just a click away. Start your literary adventure with us today!"</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header