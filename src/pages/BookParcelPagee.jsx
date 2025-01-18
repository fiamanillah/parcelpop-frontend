import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useAuth from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

// Updated validation schema using Zod
const formSchema = z.object({
    phoneNumber: z
        .string()
        .min(10, { message: 'Phone number must be at least 10 characters long' }),
    parcelType: z.string().nonempty({ message: 'Parcel type is required' }),
    parcelWeight: z.preprocess(
        value => parseFloat(value), // Convert string to number
        z
            .number()
            .positive({ message: 'Parcel weight must be positive' })
            .min(1, { message: 'Parcel weight must be at least 1kg' })
    ),
    receiverName: z.string().nonempty({ message: "Receiver's name is required" }),
    receiverPhone: z
        .string()
        .min(10, { message: 'Phone number must be at least 10 characters long' }),
    deliveryAddress: z.string().nonempty({ message: 'Delivery address is required' }),
    deliveryDate: z.date({ required_error: 'Delivery date is required' }),
    deliveryLatitude: z
        .string()
        .regex(/^-?\d+(\.\d+)?$/, 'Latitude must be a valid decimal number'),
    deliveryLongitude: z
        .string()
        .regex(/^-?\d+(\.\d+)?$/, 'Longitude must be a valid decimal number'),
});

export default function BookParcelPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: '',
            parcelType: '',
            parcelWeight: '',
            receiverName: '',
            receiverPhone: '',
            deliveryAddress: '',
            deliveryDate: null,
            deliveryLatitude: '',
            deliveryLongitude: '',
        },
    });

    const { user } = useAuth();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    const onSubmit = async data => {
        setLoading(true);
        try {
            console.log('Form data submitted:', data);
            // Add logic to send data to the backend
            form.reset();
            toast({
                title: 'Parcel Booked',
                description: 'Your parcel has been successfully booked.',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: 'Error',
                description: 'Failed to book the parcel. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 w-10/12 mx-auto">
            <h1 className=" mb-4">Book a Parcel</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field (Read-only) */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={() => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        value={user?.user.name || ''}
                                        readOnly
                                        className="bg-gray-100 cursor-not-allowed"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Email Field (Read-only) */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={() => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        value={user?.user.email || ''}
                                        readOnly
                                        className="bg-gray-100 cursor-not-allowed"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Other Fields */}
                    {[
                        {
                            name: 'phoneNumber',
                            label: 'Phone Number',
                            placeholder: 'Enter phone number',
                        },
                        {
                            name: 'parcelType',
                            label: 'Parcel Type',
                            placeholder: 'Enter parcel type',
                        },
                        {
                            name: 'parcelWeight',
                            label: 'Parcel Weight (kg)',
                            placeholder: 'Enter parcel weight',
                            type: 'number',
                        },
                        {
                            name: 'receiverName',
                            label: "Receiver's Name",
                            placeholder: "Enter receiver's name",
                        },
                        {
                            name: 'receiverPhone',
                            label: "Receiver's Phone Number",
                            placeholder: "Enter receiver's phone number",
                        },
                        {
                            name: 'deliveryAddress',
                            label: 'Delivery Address',
                            placeholder: 'Enter delivery address',
                        },
                        {
                            name: 'deliveryLatitude',
                            label: 'Delivery Address Latitude',
                            placeholder: 'Enter latitude',
                        },
                        {
                            name: 'deliveryLongitude',
                            label: 'Delivery Address Longitude',
                            placeholder: 'Enter longitude',
                        },
                    ].map(({ name, label, placeholder, type = 'text' }) => (
                        <FormField
                            key={name}
                            control={form.control}
                            name={name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{label}</FormLabel>
                                    <FormControl>
                                        <Input {...field} type={type} placeholder={placeholder} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    {/* Delivery Date (Date Picker) */}
                    <FormField
                        control={form.control}
                        name="deliveryDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Requested Delivery Date</FormLabel>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-left font-normal text-foreground dark:text-dark-foreground border border-border dark:border-dark-border hover:bg-background hover:dark:bg-dark-background hover:text-foreground dark:hover:text-dark-foreground"
                                            >
                                                {field.value
                                                    ? field.value.toLocaleDateString()
                                                    : 'Select a date'}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                                className={
                                                    'bg-card dark:bg-dark-card text-foreground dark:text-dark-foreground '
                                                }
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Booking...' : 'Book Parcel'}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
