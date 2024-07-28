import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Detail for Blog ID: {id}</h1>
      {/* Fetch and display the full blog content based on the ID */}
    </div>
  );
};

export default BlogDetail;




