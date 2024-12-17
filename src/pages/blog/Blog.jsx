import React from 'react'
import './Blog.css'
import BlogCard from '../../Components/blogcard/BlogCard'
import blogimg1 from '../../assets/images/Blog/blog2.jpg'
import blogimg2 from '../../assets/images/Blog/luke-porter-NEqEC7qa9FM-unsplash.jpg'
import blogimg3 from '../../assets/images/Blog/blog3.jpg'
import blogimg4 from '../../assets/images/Blog/blog4.jpg'
import blogimg5 from '../../assets/images/Blog/blog5.jpg'
import blogimg6 from '../../assets/images/Blog/blog6.jpg'
import blogimg7 from '../../assets/images/Blog/blog7.jpg'
import blogimg8 from '../../assets/images/Blog/blog8.jpg'
import blogimg9 from '../../assets/images/Blog/blog9.jpg'
import Pagination from '../../Components/pagination/Pagination'


function Blog() {
  return (
    <div classNameName="blog-container">
    <section className="blog-section">
      <header>
        <div className="overlay"></div>

        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            stroke="none"
            fill-opacity="1"
            d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,213.3C672,213,768,203,864,197.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="header-content text-center mx-sm-4">
          <h1>Your guide to everywhere</h1>
          <p>
            find inspiration, guides and stories for wherever you're going
            select a destination
          </p>
        </div>
      </header>

      <div className="blogs my-3">
        <div className="blogs-btns">
          <button className="btn blog-btn active">all guide</button>
          <button className="btn blog-btn">africa</button>
          <button className="btn blog-btn">asia</button>
          <button className="btn blog-btn">europe</button>
          <button className="btn blog-btn">north america</button>
          <button className="btn blog-btn">south america guide</button>
        </div>
        <div className="blogs-cards mx-2 mx-xl-5 my-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
             
              <BlogCard img={blogimg1}/>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
             
               <BlogCard img={blogimg2}/>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <BlogCard img={blogimg3}/>

            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <BlogCard img={blogimg4}/>

            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <BlogCard img={blogimg5}/>

            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <BlogCard img={blogimg6}/>

            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <BlogCard img={blogimg7}/>

            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <BlogCard img={blogimg8}/>

            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <BlogCard img={blogimg9}/>

            </div>
          </div>
        </div>
       



       <Pagination/>
      </div>
    </section>
  </div>
  )
}

export default Blog