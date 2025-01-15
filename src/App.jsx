import { Outlet } from 'react-router';
import Header from './sections/Header';

function App() {
    return (
        <div className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground  prose max-w-none">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
