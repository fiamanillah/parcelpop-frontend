import { Outlet } from 'react-router';
import DashboardSideBar from '@/components/DashboardSideBar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardPage() {
    return (
        <div className=" prose !max-w-none w-full bg-background dark:bg-dark-background">
            <SidebarProvider>
                <DashboardSideBar />
                <SidebarInset className="bg-background dark:bg-dark-background">
                    <header className="flex h-10 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="text-foreground dark:text-dark-foreground " />
                        </div>
                    </header>

                    <div className="flex-grow p-4 bg-background dark:bg-dark-background">
                        <Outlet /> {/* This will render the content based on the active route */}
                    </div>
                </SidebarInset>
            </SidebarProvider>

            {/* Main content area */}
        </div>
    );
}
