import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axiosApiCall from '@/utils/axiosApiCall';
import Section from '@/components/Section';
import { Package, Truck, Users } from 'lucide-react';

const AppStatistics = () => {
    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setIsLoading(true);
                const response = await axiosApiCall.get('/api/parcel/stats');
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (isLoading) {
        return (
            <Section>
                <div className="p-6 rounded-lg shadow-lg bg-card dark:bg-dark-card animate-pulse">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {Array(3)
                            .fill(null)
                            .map((_, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="h-10 w-10 bg-gray-200 rounded-full mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-1"></div>
                                    <div className="h-6 bg-gray-200 rounded-md w-1/2"></div>
                                </div>
                            ))}
                    </div>
                </div>
            </Section>
        );
    }

    return (
        <Section>
            <div className="p-6 rounded-lg shadow-lg bg-card dark:bg-dark-card">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {/* Total Parcels Booked */}
                    <div className="flex flex-col items-center">
                        <Package className=" h-10 w-10 text-blue-500 mb-2" />
                        <h4 className="text-lg font-semibold">Total Parcels Booked</h4>
                        <CountUp
                            start={0}
                            end={stats?.totalParcelsBooked || 0}
                            duration={2.5}
                            className="text-3xl font-bold text-blue-600"
                        />
                    </div>

                    {/* Total Parcels Delivered */}
                    <div className="flex flex-col items-center">
                        <Truck className="h-10 w-10 text-green-500 mb-2" />
                        <h4 className="text-lg font-semibold">Total Parcels Delivered</h4>
                        <CountUp
                            start={0}
                            end={stats?.totalParcelsDelivered || 0}
                            duration={2.5}
                            className="text-3xl font-bold text-green-600"
                        />
                    </div>

                    {/* Total Users */}
                    <div className="flex flex-col items-center">
                        <Users className="h-10 w-10 text-purple-500 mb-2" />
                        <h4 className="text-lg font-semibold">Total Users</h4>
                        <CountUp
                            start={0}
                            end={stats?.totalUsers || 0}
                            duration={2.5}
                            className="text-3xl font-bold text-purple-600"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AppStatistics;
