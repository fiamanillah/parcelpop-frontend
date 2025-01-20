import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router';
import axiosApiCall from '@/utils/axiosApiCall';

const CheckoutForm = ({ parcelId, amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (!card) return;

        try {
            setPaymentProcessing(true);

            const response = await axiosApiCall.post('/api/create-payment-intent', {
                price: amount,
                parcelId,
            });
            const clientSecret = response.data.clientSecret;
            console.log(response.data.clientSecret);

            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: { card, billing_details: { name: 'Test User' } },
            });

            if (paymentResult.error) {
                toast({
                    title: 'Payment Failed',
                    description: paymentResult.error.message,
                    variant: 'destructive',
                });
            } else if (paymentResult.paymentIntent.status === 'succeeded') {
                // await axiosApiCall.post(`/api/parcel/payment-success/${parcelId}`, {
                //     paymentIntentId: paymentResult.paymentIntent.id,
                // });

                console.log('Susseccfull');

                toast({
                    title: 'Payment Successful',
                    description: 'Your payment has been completed.',
                });
                navigate('/payment-success');
            }
        } catch (error) {
            console.error('Payment error:', error);
            toast({
                title: 'Error',
                description: 'An unexpected error occurred.',
                variant: 'destructive',
            });
        } finally {
            setPaymentProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button
                disabled={!stripe || paymentProcessing}
                className={`mt-4 p-2 text-white bg-blue-500 rounded ${
                    paymentProcessing ? 'opacity-50' : ''
                }`}
            >
                {paymentProcessing ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default CheckoutForm;
