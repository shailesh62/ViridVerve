// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, src, title, description }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={src}
          alt={title}
          className="rounded-xl rounded-b-none max-h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/blog/${id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
