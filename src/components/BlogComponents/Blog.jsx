// src/pages/Blog.js
import React from "react";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";

const Blog = () => {
  return (
    <div className="pb-8 ">
      <div className="heading flex justify-center bg-gray-100 mb-20">
        <div className="relative h-80 w-full overflow-hidden object-cover">
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1699784081597-6eb85d79f04d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">
              Blogs
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {BlogData.map(({ id, image, title, description }) => (
          <BlogCard
            key={id}
            id={id}
            src={image}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
