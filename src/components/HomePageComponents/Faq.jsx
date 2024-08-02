import React from 'react';

const faqs = [
    {
        question: "What materials are used in sustainable clothing?",
        answer: "Sustainable clothing often uses materials like organic cotton, recycled polyester, bamboo, hemp, and Tencel, which have a lower environmental impact compared to conventional materials."
    },
    {
        question: "How do I care for my sustainable clothing?",
        answer: "To extend the life of your sustainable clothing, wash in cold water, use gentle detergents, and air dry when possible. Avoid excessive washing and drying to reduce wear and tear."
    },
    {
        question: "What are the benefits of buying sustainable clothing?",
        answer: "Sustainable clothing reduces environmental impact, supports fair labor practices, and promotes the use of eco-friendly materials. It also encourages a shift towards more responsible consumption."
    },
    {
        question: "How is sustainable clothing priced compared to conventional clothing?",
        answer: "Sustainable clothing can be more expensive due to the higher costs of eco-friendly materials and ethical production practices. However, the quality and longevity often make it a worthwhile investment."
    },
    {
        question: "Are there certifications to look for when buying sustainable clothing?",
        answer: "Yes, look for certifications such as GOTS (Global Organic Textile Standard), Fair Trade, OEKO-TEX, and Bluesign, which ensure sustainable and ethical practices in the production process."
    },
    {
        question: "Can sustainable clothing be fashionable?",
        answer: "Absolutely! Many brands are creating stylish and trendy clothing lines using sustainable materials and practices, proving that fashion and sustainability can go hand-in-hand."
    },
    {
        question: "What is the environmental impact of conventional clothing?",
        answer: "Conventional clothing often involves intensive water usage, harmful chemicals, and significant waste generation. It also contributes to pollution and greenhouse gas emissions."
    },
    {
        question: "How can I identify truly sustainable brands?",
        answer: "Research brands to understand their practices, look for transparency in their supply chain, and check for certifications that verify their sustainability claims. Customer reviews and third-party evaluations can also be helpful."
    },
    {
        question: "What role does recycling play in sustainable fashion?",
        answer: "Recycling in fashion involves repurposing old clothing or using recycled materials to create new garments, reducing waste and the need for virgin resources. Brands are increasingly adopting these practices to promote sustainability."
    },
    {
        question: "How does sustainable fashion contribute to social responsibility?",
        answer: "Sustainable fashion often emphasizes fair labor practices, safe working conditions, and fair wages for workers, contributing to social equity and improving the livelihoods of people involved in the production process."
    }
];

const Faq = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                    <div className="mb-8" key={index}>
                        <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
