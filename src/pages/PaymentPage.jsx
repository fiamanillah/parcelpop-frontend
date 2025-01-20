import CheckoutForm from '@/components/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    'pk_test_51Qj5jIKvt346YqfbiajHjYu6hVhVhu59dXq5SekueFvgKnZh7KASUhXn9SIdmAO9o3lzfUzR4ri5STNZd4duqYyK009tw4wHZr'
);

export default function PaymentPage() {

    return (
        <div>
            <Elements stripe={stripePromise} >
                <CheckoutForm />
            </Elements>
        </div>
    );
}
