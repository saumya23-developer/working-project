import React from 'react'
import Navbar from './Navbar';
import BlogPost from './Blogpost';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div>
        <Navbar / >
      </div>
      <div>
        <BlogPost />
        <Footer />
      </div>
    </>
  )
}

export default Home;