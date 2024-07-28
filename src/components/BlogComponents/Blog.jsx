import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between p-4 gap-y-10 ">
        <BlogCard id={1} src={"https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600"} title = {"The Future of Renewable Energy: Trends and Innovations"}/>
        <BlogCard id={2} src={"https://images.pexels.com/photos/2990610/pexels-photo-2990610.jpeg?auto=compress&cs=tinysrgb&w=600"} title={"Climate Change: Mitigation Strategies and Adaptation Measures"}/>
        <BlogCard id={3} src={"https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=600"} title={"Sustainable Agriculture: Practices for a Greener Future"}/>
        <BlogCard id={4} src={"https://images.pexels.com/photos/4889869/pexels-photo-4889869.jpeg?auto=compress&cs=tinysrgb&w=600"} title={"The Importance of Water Conservation: Strategies for Sustainable Water Management"}/>
        <BlogCard id={5} src={"https://images.pexels.com/photos/3174350/pexels-photo-3174350.jpeg?auto=compress&cs=tinysrgb&w=600"} title={"Circular Economy: Reducing Waste and Promoting Resource Efficiency"}/>
        <BlogCard id={6} src={"https://images.pexels.com/photos/15480518/pexels-photo-15480518/free-photo-of-city-buildings-in-green-trees.jpeg?auto=compress&cs=tinysrgb&w=600"} title={"Building Sustainable Cities: The Role of Urban Planning and Smart Technologies"}/>
      </div>
      <Footer />
    </>
  );
};

export default Blog;



