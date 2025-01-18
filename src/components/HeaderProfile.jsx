import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useAuth from '@/hooks/useAuth';

export default function HeaderProfile() {
    const { user, logOut } = useAuth();

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                    <Avatar>
                        <AvatarImage src={user.user.profileImage} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{user?.user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    <DropdownMenuItem
                        className="bg-destructive dark:bg-dark-destructive text-destructive-foreground dark:text-dark-destructive-foreground"
                        onClick={() => {
                            logOut();
                        }}
                    >
                        Log Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
