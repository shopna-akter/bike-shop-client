const AboutUs = () => {
    return (
        <div className="container mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        At BikeWorld, our mission is to provide high-quality bicycles and accessories to cycling enthusiasts of all levels. We are dedicated to promoting a healthier and more sustainable lifestyle through cycling. Our goal is to create a community where riders can find the best products, expert guidance, and a passion for adventure on two wheels.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        We envision a world where cycling is more than just transportation—it’s a way of life. We aim to inspire individuals to explore the outdoors, embrace fitness, and reduce their carbon footprint by choosing bikes over cars. Through innovation and commitment, we strive to make cycling accessible to everyone.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="text-lg mb-2">Passion for Cycling: We believe in the power of bicycles to change lives and communities.</li>
                        <li className="text-lg mb-2">Sustainability: We are committed to promoting eco-friendly transportation solutions.</li>
                        <li className="text-lg mb-2">Quality & Innovation: We strive to provide top-tier products with the latest technology.</li>
                        <li className="text-lg mb-2">Community: We support cycling clubs, events, and initiatives that bring people together.</li>
                        <li className="text-lg mb-2">Customer Commitment: We prioritize customer satisfaction with excellent service and reliable products.</li>
                    </ul>
                </div>
                <div>
                    <div className="bg-gray-200 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Founded in 20XX, BikeWorld started as a small shop catering to local cyclists. Today, we have grown into a trusted online platform, offering a wide range of bicycles, gear, and expert advice for riders worldwide.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li className="text-lg mb-2">Recognized as the Best Online Bike Shop by Cycling Enthusiasts for three consecutive years.</li>
                            <li className="text-lg mb-2">Reached over 500,000 satisfied customers in 20XX.</li>
                            <li className="text-lg mb-2">Partnered with leading cycling brands to bring premium products to our customers.</li>
                        </ul>
                        <img src="https://img.freepik.com/free-vector/cycling-concept-illustration_114360-3085.jpg?w=740" alt="About Us Image" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;