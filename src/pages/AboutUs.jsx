const AboutUs = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="relative bg-primary py-20 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">About ParcelPop</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Delivering trust, speed, and reliability to every doorstep.
                </p>
            </div>

            {/* Company Overview */}
            <div className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
                <p className="mt-4 text-lg text-gray-700">
                    ParcelPop is a tech-driven logistics company dedicated to providing{' '}
                    <strong>fast, secure, and cost-effective</strong> parcel deliveries. Whether
                    you&apos;re an individual or a business, we ensure{' '}
                    <strong>seamless delivery experiences</strong> with real-time tracking and
                    top-notch customer service.
                </p>
            </div>

            {/* Our Mission & Values */}
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=" shadow-lg p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="mt-2 text-gray-700">
                        To revolutionize parcel delivery with <strong>real-time tracking</strong>,{' '}
                        <strong>secure handling</strong>, and <strong>affordable pricing</strong>.
                        We believe in making logistics simple,{' '}
                        <strong>efficient, and reliable</strong> for everyone.
                    </p>
                </div>
                <div className=" shadow-lg p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="mt-2 text-gray-700 space-y-2">
                        <li>
                            ✔️ <strong>Speed & Efficiency</strong> - Timely deliveries you can count
                            on.
                        </li>
                        <li>
                            ✔️ <strong>Customer-Centric</strong> - Your satisfaction is our top
                            priority.
                        </li>
                        <li>
                            ✔️ <strong>Security First</strong> - Every package is handled with care.
                        </li>
                        <li>
                            ✔️ <strong>Innovation</strong> - We use the latest tech for smooth
                            operations.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-semibold mb-8">Why Choose ParcelPop?</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="/10 p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">🚀 Fast Deliveries</h3>
                            <p className="mt-2">
                                We ensure on-time deliveries with real-time tracking.
                            </p>
                        </div>
                        <div className="/10 p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">🔒 Secure Handling</h3>
                            <p className="mt-2">
                                Every parcel is handled with utmost care and security.
                            </p>
                        </div>
                        <div className="/10 p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">💰 Affordable Rates</h3>
                            <p className="mt-2">
                                Get the best prices without compromising on quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Our Team */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-semibold mb-6">Meet Our Team</h2>
                <p className="mt-4 text-lg text-gray-700">
                    We are a team of{' '}
                    <strong>
                        logistics experts, tech innovators, and customer service professionals
                    </strong>
                    , working together to ensure seamless parcel deliveries.
                </p>

                {/* Placeholder for team members */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className=" shadow-lg p-6 rounded-lg">
                        <div className="w-32 h-32  mx-auto rounded-full"></div>
                        <h3 className="mt-6 text-xl font-semibold">John Doe</h3>
                        <p className="text-gray-600">CEO & Founder</p>
                    </div>
                    <div className=" shadow-lg p-6 rounded-lg">
                        <div className="w-32 h-32  mx-auto rounded-full"></div>
                        <h3 className="mt-6 text-xl font-semibold">Jane Smith</h3>
                        <p className="text-gray-600">Head of Operations</p>
                    </div>
                    <div className=" shadow-lg p-6 rounded-lg">
                        <div className="w-32 h-32  mx-auto rounded-full"></div>
                        <h3 className="mt-6 text-xl font-semibold">Mike Johnson</h3>
                        <p className="text-gray-600">Lead Developer</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-center py-16">
                <h2 className="text-4xl font-semibold text-white">Ready to Ship Your Parcel?</h2>
                <p className="mt-4 text-lg text-white">
                    Get started today with <strong>fast, secure, and affordable</strong> deliveries.
                </p>
                <button className="mt-8   px-8 py-3 font-semibold rounded-lg hover:bg-blue-50 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
