import Page from '@/components/Page';
import AppStatistics from '@/sections/AppStatistics';
import FeaturesSection from '@/sections/FeaturesSection';
import HeroSection from '@/sections/HeroSection';
import TopDeliveryMen from '@/sections/TopDeliveryMen';

export default function HomePage() {
    return (
        <Page>
            <HeroSection />
            <FeaturesSection />
            <AppStatistics />
            <TopDeliveryMen />
        </Page>
    );
}
