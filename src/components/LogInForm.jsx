import { useState } from 'react';
import LogInResgisterFormHeader from './micro/LogInResgisterFormHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Eye, EyeOff } from 'lucide-react';
import axiosApiCall from '@/utils/axiosApiCall';

// Validation schema using Zod
const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export default function LoginForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loadingLogIn, setLoadingLogIn] = useState(false);

    
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const onSubmit = async data => {
        setLoadingLogIn(true); // Start loadingLogIn
        try {
            const response = await axiosApiCall.post('/api/auth/login', data);

            console.log('Response:', response.data);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            form.reset(); // Clear the form
        } catch (error) {
            console.error('Error during login:', error.response?.data || error.message);
        } finally {
            setLoadingLogIn(false); // End loadingLogIn
        }
    };

    return (
        <div className="p-4">
            <LogInResgisterFormHeader heading={'Login'} />
            <div className="px-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Password"
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                className="absolute top-0 right-0 bg-transparent hover:bg-transparent"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <EyeOff /> : <Eye />}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full" disabled={loadingLogIn}>
                            {loadingLogIn ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
