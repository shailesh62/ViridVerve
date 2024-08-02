import React from 'react';
import { Link } from 'react-router-dom';

const bestSellers = [
    {
        title: "Eco-Friendly Jacket",
        description: "A stylish jacket made from recycled materials. Perfect for any season.",
        price: "₹ 1,500",
        image: 'https://images.pexels.com/photos/25211548/pexels-photo-25211548/free-photo-of-man-in-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        link: '/shop'
    },
    {
        title: "Organic Cotton T-Shirt",
        description: "Soft and breathable t-shirt made from 100% organic cotton.",
        price: "₹ 500",
        image: 'https://images.pexels.com/photos/6311538/pexels-photo-6311538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        link: '/shop'
    },
    {
        title: "Sustainable Sneakers",
        description: "Comfortable sneakers made from recycled ocean plastics.",
        price: "₹ 2,500",
        image: 'https://images.pexels.com/photos/25052945/pexels-photo-25052945/free-photo-of-model-posing-in-denim-blouse-and-skirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        link: '/shop'
    },
    {
        title: "Recycled Denim Jeans",
        description: "Classic jeans made from recycled denim fabric.",
        price: "₹ 900",
        image: 'https://images.pexels.com/photos/4590095/pexels-photo-4590095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        link: '/shop'
    }
];

const BestSeller = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
            <div className="flex flex-wrap -mx-4">
                {bestSellers.map((item, index) => (
                    <div className="px-4 mb-8 w-full sm:w-1/2 lg:w-1/4" key={index}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-64 object-cover mb-4 rounded-t-lg"/>
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 mb-4">{item.description}</p>
                                <p className="text-xl font-bold mb-4 text-green-600">{item.price}</p>
                                <Link to={item.link} className="bestSellar text-white py-2 px-4 rounded-lg font-semibold">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BestSeller;
