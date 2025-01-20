import { Button } from '@/components/ui/button';
import { XCircle, DollarSign } from 'lucide-react';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import ReviewDialog from '@/components/MyBooking/ReviewDialog';
import axiosApiCall from '@/utils/axiosApiCall';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router';

const ParcelActions = ({ parcel, setParcels }) => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const handleCancelBooking = async parcelId => {
        try {
            const response = await axiosApiCall.delete(`/api/parcel/cancelBooking/${parcelId}`);
            if (response.status === 200) {
                setParcels(prev =>
                    prev.map(p => (p._id === parcelId ? { ...p, status: 'Cancelled' } : p))
                );
                toast({ title: 'Booking Cancelled', description: 'Successfully cancelled.' });
            }
        } catch (error) {
            console.error('Error:', error);
            toast({
                title: 'Error',
                description: 'Failed to cancel booking.',
                variant: 'destructive',
            });
        }
    };

    return (
        <div className="flex gap-2 flex-col">
            {parcel.status === 'Delivered' && <ReviewDialog parcel={parcel} />}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={() => {
                                navigate(`/checkout/${parcel._id}`, {
                                    state: { amount: parcel.amount },
                                });
                            }}
                        >
                            <DollarSign />
                            Pay
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Pay for the parcel</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Button
                onClick={() => {
                    navigate('/');
                }}
                disabled={parcel.status !== 'Pending'}
            >
                Update
            </Button>
            <Button
                variant="destructive"
                onClick={() => handleCancelBooking(parcel._id)}
                disabled={parcel.status === 'Delivered' || parcel.status === 'Cancelled'}
            >
                <XCircle />
                Cancel
            </Button>
        </div>
    );
};

export default ParcelActions;
