import Page from '@/components/Page';
import useAuth from '@/hooks/useAuth';
import FeaturesSection from '@/sections/FeaturesSection';
import HeroSection from '@/sections/HeroSection';

export default function HomePage() {
    const { user, loading } = useAuth();
    return (
        <Page>
            <HeroSection />
            <FeaturesSection />
            <h1>Home Page</h1>
            <h1>{loading ? 'loading' : user?.user.name}</h1>
        </Page>
    );
}
