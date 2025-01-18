import { Link, useLocation } from 'react-router'; // Correct import for Link and useLocation
import { Button } from '@/components/ui/button'; // Assuming you're using the shadcn UI library

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/signin-signup', label: 'Log In' },
    { to: '/dashboard', label: 'Dashboard' },
];

export default function NavLinks() {
    const location = useLocation(); // Get the current location

    return (
        <div className="flex gap-4">
            {navItems.map(item => (
                <Link key={item.to} to={item.to} className="text-sm font-semibold">
                    <Button
                        variant="ghost"
                        size="sm"
                        className={
                            location.pathname === item.to
                                ? 'bg-secondary dark:bg-dark-secondary text-white'
                                : 'text-foreground dark:text-dark-foreground'
                        } // Highlight active button
                    >
                        {item.label}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
