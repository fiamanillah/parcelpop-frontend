import { ShieldCheck, Truck, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Section from '@/components/Section';

export default function FeaturesSection() {
    const features = [
        {
            icon: <ShieldCheck className="h-10 w-10 text-blue-500" />,
            title: 'Parcel Safety',
            description: 'Your parcels are handled with utmost care and security.',
        },
        {
            icon: <Truck className="h-10 w-10 text-green-500" />,
            title: 'Super Fast Delivery',
            description: 'Experience lightning-fast delivery with our optimized logistics.',
        },
        {
            icon: <MapPin className="h-10 w-10 text-red-500" />,
            title: 'Live Tracking',
            description: 'Track your parcel in real-time from pickup to delivery.',
        },
    ];

    return (
        <Section className="py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="shadow-md hover:shadow-lg transition text-foreground dark:text-dark-foreground"
                        >
                            <CardHeader className="flex items-center justify-center flex-col py-6">
                                {feature.icon}
                                <CardTitle className="mt-4 text-xl font-semibold">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="mt-2 dark:text-dark-muted-foreground">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
