import React from 'react'

const sharedClasses = {
    input: 'w-full p-2 border border-border rounded',
    card: 'bg-card p-6 rounded-lg shadow-md',
    textMuted: 'text-muted-foreground',
    primaryText: 'text-primary',
    secondaryText: 'text-secondary',
    button: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded',
}
const Contact = () => {
    return (
        <>
            <div className="flex justify-center bg-gray-100">
                <div className="relative h-80 w-full overflow-hidden object-cover">
                    <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1671221672495-a2b455e70bb9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="mt-20 bg-white shadow rounded p-6 flex flex-col items-center text-center">
                <h2 className="text-gray-800 text-2xl font-bold mb-4">Contact Info</h2>
                <div className="mb-5">
                    <p className="text-gray-500">For general inquiries:</p>
                    <p className="text-gray-900">info@viridverve.eco</p>
                </div>
                <div className="mb-5">
                    <p className="text-gray-500">For questions about your order:</p>
                    <p className="text-gray-900">orders@viridverve.eco</p>
                </div>
                <div className="mb-5">
                    <p className="text-gray-500">Phone:</p>
                    <p className="text-gray-900">+91 9696969696</p>
                </div>
                <p className="text-gray-500 mt-4">We would love to help you with any questions about the products on our website or leading a waste-free lifestyle.</p>
            </div>



        </>
    );
}
export default Contact; 