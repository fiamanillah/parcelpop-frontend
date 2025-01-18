import { Navigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth'; // Custom hook to get user info

export default function PrivateRoute({ children, allowedRoles }) {
    const { user } = useAuth();
    const userRole = user?.user.role;

    // Check if user's role is allowed
    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />; // Redirect to unauthorized page
    }

    return children; // Render the component if role is allowed
}
