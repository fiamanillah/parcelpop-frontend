import { Link, useLocation } from 'react-router'; // Import Link and useLocation
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { LayoutDashboard, PackageOpen, ListOrdered, User, Rows4 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import useAuth from '@/hooks/useAuth';

// Menu items.
const items = [
    {
        title: 'Dashboard',
        url: '/dashboard', // Correct path for home
        icon: LayoutDashboard,
        roles: ['Admin', 'User', 'DeliveryMan'], // Accessible by all roles
    },
    {
        title: 'My Profile',
        url: '/dashboard/myProfile', // Correct path for search
        icon: User,
        roles: ['Admin', 'User', 'DeliveryMan'], // Accessible by Admin only
    },

    {
        title: 'Book Parcel',
        url: '/dashboard/book-parcel', // Correct path for book parcel
        icon: PackageOpen,
        roles: ['User'], // Accessible by User and DeliveryMan
    },
    {
        title: 'My Bookings',
        url: '/dashboard/myBookigs', // Correct path for inbox
        icon: ListOrdered,
        roles: ['User'], // Accessible by Admin and User
    },

    {
        title: 'All Parcel',
        url: '/dashboard/allParcel', // Correct path for settings
        icon: Rows4,
        roles: ['Admin'], // Accessible by Admin and DeliveryMan
    },
    {
        title: 'All Users',
        url: '/dashboard/allUsers', // Correct path for settings
        icon: Rows4,
        roles: ['Admin'], // Accessible by Admin and DeliveryMan
    },
    {
        title: 'My Deliveries',
        url: '/dashboard/myDelivery', // Correct path for settings
        icon: Rows4,
        roles: ['DeliveryMan'], // Accessible by Admin and DeliveryMan
    },
    {
        title: 'My Reviews',
        url: '/dashboard/myReviews', // Correct path for settings
        icon: Rows4,
        roles: ['DeliveryMan'], // Accessible by Admin and DeliveryMan
    },
    {
        title: 'All Delivery Man',
        url: '/dashboard/allDeliveryMen', // Correct path for settings
        icon: Rows4,
        roles: ['Admin'], // Accessible by Admin and DeliveryMan
    },
    {
        title: 'Statistics',
        url: '/dashboard/parcelStatistics', // Correct path for settings
        icon: Rows4,
        roles: ['Admin'], // Accessible by Admin and DeliveryMan
    },
];

export default function DashboardSideBar() {
    const location = useLocation(); // Get current location
    const { user } = useAuth();
    const userRole = user?.user.role || 'User'; // Default role is User if none is provided

    // Filter menu items based on user's role
    const filteredItems = items.filter(item => item.roles.includes(userRole));

    return (
        <Sidebar className="inset-y-16">
            <SidebarContent className="bg-sidebar dark:bg-dark-sidebar">
                <SidebarGroup>
                    <SidebarGroupLabel className="!py-7 border border-border dark:border-dark-border mb-2">
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarImage src={user?.user.profileImage} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                                <h5>{user?.user.name}</h5>
                                <span>{user?.user.role}</span>
                            </div>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {filteredItems.map(item => (
                                <SidebarMenuItem
                                    key={item.title}
                                    className={`${location.pathname === item.url ? 'active' : ''}`} // Highlight active menu item
                                >
                                    <SidebarMenuButton asChild>
                                        <Link
                                            to={item.url}
                                            className={`${
                                                location.pathname === item.url
                                                    ? 'font-semibold  bg-muted dark:bg-dark-muted' // Active font styles
                                                    : ''
                                            }`}
                                        >
                                            <item.icon
                                                className={`text-sidebar-foreground dark:text-dark-sidebar-foreground ${
                                                    location.pathname === item.url
                                                        ? '!text-foreground dark:!text-dark-foreground' // Active color
                                                        : ''
                                                }`}
                                            />
                                            <span
                                                className={`${
                                                    location.pathname === item.url
                                                        ? 'font-semibold !text-foreground dark:!text-dark-foreground' // Active font styles
                                                        : ''
                                                }`}
                                            >
                                                {item.title}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
