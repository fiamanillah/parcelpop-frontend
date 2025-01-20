import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import MainRoutes from './routes/MainRoutes';
import { Provider } from 'react-redux';
import store from './store/store';
import { Toaster } from '@/components/ui/toaster';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51Qj5jIKvt346YqfbiajHjYu6hVhVhu59dXq5SekueFvgKnZh7KASUhXn9SIdmAO9o3lzfUzR4ri5STNZd4duqYyK009tw4wHZr'
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Elements stripe={stripePromise}>
            <Provider store={store}>
                <ThemeProvider>
                    <MainRoutes />
                    <Toaster />
                </ThemeProvider>
            </Provider>
        </Elements>
    </StrictMode>
);
