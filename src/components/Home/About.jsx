const About = ({ imageSrc, title, description }) => {
    return (
        <>
            <div className="flex justify-center bg-gray-100">
                <div className="relative h-80 w-full overflow-hidden object-cover">
                    <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1699784081597-6eb85d79f04d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white">About Us</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-10 pt-48 items-center justify-center  w-auto  bg-gray-100">
                <div className="flex flex-col   md:flex-row  w-11/12 md:w-3/4 max-w-4xl bg-gray-100 overflow-hidden">
                    <div className="md:w-1/2 w-full overflow-hidden mr-10  bg-gray-100">
                        <img src="https://s3.images-iherb.com/blog/uploads/natural-and-organic-pet-products-and-their-benefits-large.jpg" alt="Our Mission" className="w-full h-full object-cover " />
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6 bg-gray-100">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h1>
                        <p className="text-base md:text-lg text-center">"Hey there – thanks for taking the time to learn more about The Eco Warrior! I’m Amrit, a former fashion buyer and aspiring Eco Warrior! We aim to be your online hub for inspiration and easy alternatives to reduce waste and live sustainably.In a country as diverse and vibrant as India, our mission is to make sustainable living accessible to everyone. Whether you're in bustling Mumbai or serene Kerala, we believe that small changes can make a big impact. Join us on this journey towards a greener, cleaner India!"</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-48 mb-20 h-96 w-11/12 md:w-3/4 max-w-4xl bg-gray-100 overflow-hidden">
                    <div className="md:w-1/2 w-full mr-10 flex flex-col justify-center items-center p-6 bg-gray-100">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">Ethically Sourced Products & Suppliers</h1>
                        <p className="text-base md:text-lg text-center">We are an aspiring B Corp company. That means we and the companies we work with are held to the highest standards of verified social and environmental performance.</p>
                    </div>
                    <div className="md:w-1/2 w-full overflow-hidden   bg-gray-100">
                        <img src="https://images.unsplash.com/photo-1594885270100-f63c45a28ad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Mission" className="w-full h-full object-cover " />
                    </div>

                </div>
            </div>
        </>

    );
}

export default About;