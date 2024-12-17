import React from "react";
import "./Destination.css";
import destImg1 from '../../assets/images/destination/image1.jpg'
import destImg2 from '../../assets/images/destination/image2.jpg'
function Destination() {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Safari Photography: Capturing the Essence of Wildlife</h1>
          <p>
            From scenic landscapes to wildlife moments, immerse yourself in
            nature.
          </p>
        </div>
      </div>

      <main className="content">
        <section>
          <h2>The Brazen Head</h2>
          <p>
            Sed viverra lorem nunc eget bibendum enim facilisis gravida. Diam
            pharetra vestibulum lorem netus ultricies. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Velit, similique.
          </p>
          <ul>
            <li>First benefit or feature.</li>
            <li>Another key point here.</li>
            <li>And one more compelling highlight.</li>
          </ul>
          <blockquote>
            "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
            Diam pharetra lorem netus ultricies."
          </blockquote>
        </section>

        <div className="image-gallery">
          <img
            src={destImg1}
            alt="Nature Scene 1"
          />
          <img
            src={destImg2}
            alt="Nature Scene 2"
          />
        </div>

        <p>
          Donec purus posuere nulla lacus aliquam eget arcu. A posuere in tellus
          massa, ornare vulputate erat.
        </p>
      </main>
  
  <div className="tags">
    <a href="#">Adventure</a>
    <a href="#">Nature</a>
    <a href="#">Culture</a>
  </div>


  <div className="form-section">
    <h3>Leave a Comment</h3>
    <form id="commentForm">
      <input type="text" id="name" name="name" placeholder="Name" required/>
      <input type="email" id="email" name="email" placeholder="Email" required/>
      <input type="text" id="title" name="title" placeholder="Title" required/>
      <textarea id="comment" name="comment" placeholder="Comment" rows="4" required></textarea>
      <button type="submit">Post Comment</button>
    </form>
  </div>
    </div>
  );
}

export default Destination;
