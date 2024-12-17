import React from "react";
import "./BlogCard.css";
function BlogCard({img}) {
  return (
    <div className="card">
      <img
        src={img}
        className="card-img-top"
        alt="blogimg"
      />
      <div className="label">trips</div>
      <div className="card-body">
        <p>
          <span className="date me-2">April 06 023</span>
          <span className="by"> by ali tufan</span>
        </p>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
