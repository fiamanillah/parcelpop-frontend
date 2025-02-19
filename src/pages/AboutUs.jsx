const AboutUs = () => {
    return (
        <div className="">
            {/* Hero Section */}
            <div className="relative bg-accent/30 py-16 text-center">
                <h1 className="text-4xl font-bold">About ParcelPop</h1>
                <p className="mt-2 text-lg max-w-2xl mx-auto">
                    Delivering trust, speed, and reliability to every doorstep.
                </p>
            </div>

            {/* Company Overview */}
            <div className="max-w-5xl mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold ">Who We Are</h2>
                <p className="mt-4 ">
                    ParcelPop is a tech-driven logistics company dedicated to providing **fast,
                    secure, and cost-effective** parcel deliveries. Whether you&apos;re an
                    individual or a business, we ensure **seamless delivery experiences** with
                    real-time tracking and top-notch customer service.
                </p>
            </div>

            {/* Our Mission & Values */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=" shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold ">Our Mission</h2>
                    <p className="mt-2 ">
                        To revolutionize parcel delivery with **real-time tracking**, **secure
                        handling**, and **affordable pricing**. We believe in making logistics
                        simple, **efficient, and reliable** for everyone.
                    </p>
                </div>
                <div className=" shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold ">Our Values</h2>
                    <ul className="mt-2  space-y-2">
                        <li>✔️ **Speed & Efficiency** - Timely deliveries you can count on.</li>
                        <li>✔️ **Customer-Centric** - Your satisfaction is our top priority.</li>
                        <li>✔️ **Security First** - Every package is handled with care.</li>
                        <li>✔️ **Innovation** - We use the latest tech for smooth operations.</li>
                    </ul>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className=" text-white py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold">Why Choose ParcelPop?</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="  p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">🚀 Fast Deliveries</h3>
                            <p className="mt-2">
                                We ensure on-time deliveries with real-time tracking.
                            </p>
                        </div>
                        <div className="  p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">🔒 Secure Handling</h3>
                            <p className="mt-2">
                                Every parcel is handled with utmost care and security.
                            </p>
                        </div>
                        <div className="  p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">💰 Affordable Rates</h3>
                            <p className="mt-2">
                                Get the best prices without compromising on quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet Our Team */}
            <div className="max-w-6xl mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold ">Meet Our Team</h2>
                <p className="mt-4 ">
                    We are a team of **logistics experts, tech innovators, and customer service
                    professionals**, working together to ensure seamless parcel deliveries.
                </p>

                {/* Placeholder for team members */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className=" shadow-lg p-4 rounded-lg">
                        <div className="w-24 h-24  mx-auto rounded-full"></div>
                        <h3 className="mt-4 text-lg font-semibold ">John Doe</h3>
                        <p className="">CEO & Founder</p>
                    </div>
                    <div className=" shadow-lg p-4 rounded-lg">
                        <div className="w-24 h-24  mx-auto rounded-full"></div>
                        <h3 className="mt-4 text-lg font-semibold ">Jane Smith</h3>
                        <p className="">Head of Operations</p>
                    </div>
                    <div className=" shadow-lg p-4 rounded-lg">
                        <div className="w-24 h-24  mx-auto rounded-full"></div>
                        <h3 className="mt-4 text-lg font-semibold ">Mike Johnson</h3>
                        <p className="">Lead Developer</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className=" text-center py-10">
                <h2 className="text-2xl font-semibold">Ready to Ship Your Parcel?</h2>
                <p className="mt-2 text-lg">
                    Get started today with **fast, secure, and affordable** deliveries.
                </p>
                <button className="mt-4   px-6 py-2 font-semibold rounded-lg hover: transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
