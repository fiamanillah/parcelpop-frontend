import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import axiosApiCall from '@/utils/axiosApiCall';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@/components/ui/table';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import formatDate from '@/utils/formateDate';
const DeliveryListPage = () => {
    const [parcels, setParcels] = useState([]);
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    // Fetch parcels assigned to the logged-in delivery man
    const fetchParcels = async () => {
        try {
            setLoading(true);
            const response = await axiosApiCall('/api/parcel/parcelForDeliveryMan');
            setParcels(response.data.data);
            // console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching parcels:', error);
            toast({
                title: 'Error',
                description: 'Failed to load parcels.',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchParcels();
    }, []);

    console.log(parcels);

    // Handle parcel status update
    const updateParcelStatus = async (id, status) => {
        try {
            await axiosApiCall(`/api/parcels/${id}/status`, 'PATCH', { status });
            toast({
                title: `Booking ${status}`,
                description: `The parcel status has been updated to ${status}.`,
            });
            fetchParcels(); // Refresh list
        } catch (error) {
            console.error(`Error updating status to ${status}:`, error);
            toast({
                title: 'Error',
                description: `Failed to update parcel status.`,
                variant: 'destructive',
            });
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-xl font-semibold mb-4">My Delivery List</h2>
            <Table className="text-foreground dark:text-dark-foreground">
                <TableHeader>
                    <TableRow>
                        <TableHead>Booked User Name</TableHead>
                        <TableHead>Receiver Name</TableHead>
                        <TableHead>Booked User Phone</TableHead>
                        <TableHead>Requested Delivery Date</TableHead>
                        <TableHead>Approx. Delivery Date</TableHead>
                        <TableHead>Receiver Phone</TableHead>
                        <TableHead>Receiver Address</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {parcels?.map(parcel => (
                        <TableRow key={parcel._id}>
                            <TableCell>{parcel.userName}</TableCell>
                            <TableCell>{parcel.receiverName}</TableCell>
                            <TableCell>{parcel.userPhone}</TableCell>
                            <TableCell>{formatDate(parcel.requestedDeliveryDate)}</TableCell>
                            <TableCell>{formatDate(parcel.approximateDeliveryDate)}</TableCell>
                            <TableCell>{parcel.receiverPhone}</TableCell>
                            <TableCell>{parcel.deliveryAddress}</TableCell>
                            <TableCell className="flex gap-2">
                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        toast({
                                            title: 'Cancel Booking',
                                            description:
                                                'Are you sure you want to cancel this booking?',
                                            action: {
                                                label: 'Yes',
                                                onClick: () =>
                                                    updateParcelStatus(parcel._id, 'Cancelled'),
                                            },
                                        })
                                    }
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        toast({
                                            title: 'Deliver Booking',
                                            description:
                                                'Are you sure you want to mark this booking as delivered?',
                                            action: {
                                                label: 'Yes',
                                                onClick: () =>
                                                    updateParcelStatus(parcel._id, 'Delivered'),
                                            },
                                        })
                                    }
                                >
                                    Deliver
                                </Button>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline">View Location</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <p>Map or location details can go here.</p>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DeliveryListPage;
