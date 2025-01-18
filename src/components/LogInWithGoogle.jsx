import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '@/config/firebase';
import axiosApiCall from '@/utils/axiosApiCall';
import { LoaderCircle } from 'lucide-react';
import useAuth from '@/hooks/useAuth';

export default function LogInWithGoogle() {
    const [loadingLogIn, setLoadingLogIn] = useState(false);
    const { fetchUser } = useAuth();
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();

        setLoadingLogIn(true); // Start loadingLogIn

        try {
            // Trigger Google Sign-In Popup
            const result = await signInWithPopup(auth, provider);
            const idToken = await result.user.getIdToken();

            // Send the ID Token to the backend
            const response = await axiosApiCall.post('/api/auth/login/', { idToken });

            console.log('Response:', response.data);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            fetchUser();
        } catch (error) {
            console.error('Error during Google login:', error.message);
        } finally {
            setLoadingLogIn(false); // End loadingLogIn
        }
    };

    return (
        <Button
            onClick={handleGoogleLogin}
            className=" flex items-center justify-center gap-2 bg-muted dark:bg-dark-muted border border-border dark:border-dark-border hover:bg-muted/80 dark:hover:bg-dark-muted/80"
            disabled={loadingLogIn}
        >
            {loadingLogIn ? (
                <LoaderCircle className="animate-spin" />
            ) : (
                <img className="h-7 " src="/logos/google.svg" />
            )}
        </Button>
    );
}
