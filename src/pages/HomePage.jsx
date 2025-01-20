import Page from '@/components/Page';
import useAuth from '@/hooks/useAuth';
import AppStatistics from '@/sections/AppStatistics';
import FeaturesSection from '@/sections/FeaturesSection';
import HeroSection from '@/sections/HeroSection';
import TopDeliveryMen from '@/sections/TopDeliveryMen';

export default function HomePage() {
    const { user, loading } = useAuth();
    return (
        <Page>
            <HeroSection />
            <FeaturesSection />
            <AppStatistics />
            <TopDeliveryMen />
            <h1>Home Page</h1>
            <h1>{loading ? 'loading' : user?.user.name}</h1>
        </Page>
    );
}
