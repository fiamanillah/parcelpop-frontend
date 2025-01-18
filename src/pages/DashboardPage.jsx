import { Outlet } from 'react-router';
import DashboardSideBar from '@/components/DashboardSideBar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardPage() {
    return (
        <div className=" prose !max-w-none w-full bg-background dark:bg-dark-background">
            <SidebarProvider>
                <DashboardSideBar />
                <SidebarTrigger className="text-foreground dark:text-dark-foreground" />
                <div className="flex-grow p-4 bg-background dark:bg-dark-background">
                    <Outlet /> {/* This will render the content based on the active route */}
                </div>
            </SidebarProvider>

            {/* Main content area */}
        </div>
    );
}
