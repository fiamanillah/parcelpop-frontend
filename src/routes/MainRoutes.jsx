import App from '@/App';
import HomePage from '@/pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router';
import LogInAndRegisterPage from '../pages/LogInAndRegisterPage';

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="signin-signup" element={<LogInAndRegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
