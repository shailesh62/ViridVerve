import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id , src , title}) => {
    return (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="">
          <img
            src={src}
            alt="Shoes"
            className="rounded-xl rounded-b-none max-h-60 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, excepturi delectus iusto placeat, facere asperiores iure rerum eius vel provident doloribus! Eligendi autem omnis culpa modi? Aliquam incidunt vel modi.</p>
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

      

  