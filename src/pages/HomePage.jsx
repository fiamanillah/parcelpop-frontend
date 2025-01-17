import Page from '@/components/Page';
import HeroSection from '@/sections/HeroSection';
import { Button } from '../components/ui/button';
import registerWithEmailAndPasword from '../services/firebaseRegister';
import { useState } from 'react';

export default function HomePage() {
    const [loading, setLoading] = useState(false);
    async function handleRegister() {
        try {
            // Your code here
            setLoading(true);
            await registerWithEmailAndPasword();
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Page>
            <HeroSection />
            <h1>Home Page</h1>
            <Button onClick={handleRegister}> {loading ? 'Loading' : 'Register'}</Button>
        </Page>
    );
}
