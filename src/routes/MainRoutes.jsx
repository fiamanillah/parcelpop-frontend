import { BrowserRouter, Routes, Route } from 'react-router';
import App from '@/App';
import HomePage from '@/pages/HomePage';
import LogInAndRegisterPage from '../pages/LogInAndRegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import BookParcelPage from '@/pages/BookParcelPagee';

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="signin-signup" element={<LogInAndRegisterPage />} />
                </Route>
                <Route path="dashboard" element={<DashboardPage />}>
                    <Route path="home" element={<h1>home</h1>} />
                    <Route path="inbox" element={<h1>Inbox</h1>} />
                    <Route path="book-parcel" element={<BookParcelPage />} />
                    <Route path="search" element={<h1>search</h1>} />
                    <Route path="settings" element={<h1>setting</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
