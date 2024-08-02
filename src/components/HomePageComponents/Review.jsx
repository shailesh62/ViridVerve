import React from 'react';

const reviews = [
    {
        name: "Ananya Pandey",
        rating: 5,
        comment: "I absolutely love the eco-friendly jacket I purchased. It's stylish and comfortable. Highly recommended!",
        image: 'https://i.pinimg.com/236x/c6/7c/fc/c67cfc3321b85bb4b9e000cc5c0d22d6.jpg'
    },
    {
        name: "Arjun Deshwal",
        rating: 4,
        comment: "The organic cotton t-shirt is great. It's soft and fits well, though the price is a bit high.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oOSfbAdGK7b7yfShsLz0w27uYIfaM4A8pefq3hf1tvCMlkdP'
    },
    {
        name: "Manu Bhaker",
        rating: 5,
        comment: "The sustainable sneakers are amazing. They feel good and are made from recycled materials, which I appreciate.",
        image: 'https://i.pinimg.com/236x/41/5f/af/415faf9caa6278ca8494daa5698ad059.jpg'
    },
    {
        name: "Lakshay Sen",
        rating: 4,
        comment: "The recycled denim jeans are very comfortable and fit perfectly. I will definitely buy more.",
        image: 'https://i.pinimg.com/236x/fd/fc/42/fdfc4261760d8f724fdbc20b832236fc.jpg'
    },
    {
        name: "Aishwarya Rai",
        rating: 5,
        comment: "The quality of the sustainable clothing is outstanding. I am very happy with my purchase.",
        image: 'https://i.pinimg.com/236x/bd/03/c2/bd03c282f06e0ab687233fad988d8019.jpg'
    },
    {
        name: "D.J. Rajesh",
        rating: 5,
        comment: "I appreciate the eco-friendly approach of the brand. The clothes are stylish and environmentally responsible.",
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
];

const Review = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
            <div className="carousel w-full">
                {reviews.map((review, index) => (
                    <div id={`slide${index}`} className="carousel-item w-full px-4" key={index}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-md">
                            <div className="flex items-center mb-4 p-4">
                                <img src={review.image} alt={review.name} className="w-16 h-16 object-cover rounded-full mr-4"/>
                                <div>
                                    <h3 className="text-xl font-semibold">{review.name}</h3>
                                    <div className="text-yellow-500">
                                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 px-4 pb-4">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="flex justify-center mt-8">
                {reviews.map((_, index) => (
                    <a key={index} href={`#slide${index}`} className="btn btn-circle mx-1"></a>
                ))}
            </div> */}
        </section>
    );
};

export default Review;