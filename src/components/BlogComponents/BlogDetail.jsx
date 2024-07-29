// src/components/BlogDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import BlogData from './BlogData';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogData.find(post => post.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto md:w-2/3 sm:w-full bg-gray-100 p-10 rounded-lg shadow-lg mt-20">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-700 whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
