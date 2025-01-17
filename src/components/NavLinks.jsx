import { NavLink } from 'react-router';

export default function NavLinks() {
    return (
        <div>
            <NavLink to={'/'}>Homee</NavLink>
            <NavLink to={'/signin-signup'}>Log In</NavLink>
        </div>
    );
}
