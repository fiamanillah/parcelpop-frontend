import { Outlet } from 'react-router';
import DashboardSideBar from '@/components/DashboardSideBar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardPage() {
    return (
        <div className=" prose !max-w-screen-2xl w-full bg-background dark:bg-dark-background">
            <SidebarProvider>
                <div className="relative">
                    <DashboardSideBar />
                </div>
                <SidebarInset className="bg-background dark:bg-dark-background w-full ">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="text-foreground dark:text-dark-foreground " />
                    </div>
                    <div className="w-full">
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>

            {/* Main content area */}
        </div>
    );
}
