import  { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, CardHeader, CardTitle } from '@shadcn/ui';

const AppStatistics = () => {
    const [stats, setStats] = useState({
        totalParcelsBooked: 0,
        totalParcelsDelivered: 0,
        totalUsers: 0,
    });

    useEffect(() => {
        // Fetch the statistics from your backend
        fetch('https://your-backend-api/stats')
            .then(response => response.json())
            .then(data => {
                setStats({
                    totalParcelsBooked: data.totalParcelsBooked,
                    totalParcelsDelivered: data.totalParcelsDelivered,
                    totalUsers: data.totalUsers,
                });
            })
            .catch(error => console.error('Error fetching statistics:', error));
    }, []);

    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {/* Total Parcels Booked */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Total Parcels Booked</CardTitle>
                </CardHeader>
                <CardContent>
                    <CountUp
                        start={0}
                        end={stats.totalParcelsBooked}
                        duration={2.5}
                        className="text-2xl font-bold text-blue-600"
                    />
                </CardContent>
            </Card>

            {/* Total Parcels Delivered */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Total Parcels Delivered</CardTitle>
                </CardHeader>
                <CardContent>
                    <CountUp
                        start={0}
                        end={stats.totalParcelsDelivered}
                        duration={2.5}
                        className="text-2xl font-bold text-green-600"
                    />
                </CardContent>
            </Card>

            {/* Total Users */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <CountUp
                        start={0}
                        end={stats.totalUsers}
                        duration={2.5}
                        className="text-2xl font-bold text-purple-600"
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default AppStatistics;
