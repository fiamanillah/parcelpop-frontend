import { useEffect, useState } from 'react';
import axiosApiCall from '@/utils/axiosApiCall'; // Import your axiosApiCall function

const TopDeliveryMen = () => {
    const [topDeliveryMen, setTopDeliveryMen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch top delivery men data
    const fetchTopDeliveryMen = async () => {
        try {
            const response = await axiosApiCall('/api/parcel/topDeliveryMan');
            console.log(response);
            if (response.data.success) {
                setTopDeliveryMen(response.data.data);
            } else {
                setError('Failed to fetch top delivery men.');
            }
        } catch {
            setError('An error occurred while fetching data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopDeliveryMen();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold text-center mb-8">Top 3 Delivery Men</h2>
            <div className="flex justify-center gap-8">
                {topDeliveryMen.map((deliveryMan, index) => (
                    <div
                        key={index}
                        className="w-72 bg-card dark:bg-dark-card shadow-md rounded-lg"
                    >
                        <div className="p-4 flex justify-center">
                            <img
                                src={deliveryMan.profileImage || 'https://via.placeholder.com/150'}
                                alt={deliveryMan.name}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-center">
                                {deliveryMan.name}
                            </h3>
                            <p className="text-center mt-2">
                                <strong>
                                    Parcels Delivered:
                                    {deliveryMan.totalParcelsDelivered}
                                </strong>
                            </p>
                            <p className="text-center mt-1">
                                <strong>
                                    Average Rating:
                                    {deliveryMan.averageRating.toFixed(1)}
                                </strong>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopDeliveryMen;
