import { BrowserRouter, Routes, Route } from 'react-router';
import App from '@/App';
import HomePage from '@/pages/HomePage';
import LogInAndRegisterPage from '../pages/LogInAndRegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import BookParcelPage from '@/pages/BookParcelPagee';
import UpdateBookedParcelPage from '@/pages/UpdateBookedParcelPage';
import MyBookingPage from '@/pages/MyBookingPage';
import MyProfilePage from '@/pages/MyProfilePage';
import AllParcelsPage from '@/pages/AllParcelsPage';
import AllUsersPage from '@/pages/AllUsersPage';
import AllDeliveryMenPage from '@/pages/AllDeliveryMenPage';
import DeliveryListPage from '@/pages/DeliveryListPage';

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="signin-signup" element={<LogInAndRegisterPage />} />
                    <Route path="dashboard" element={<DashboardPage />}>
                        <Route path="book-parcel" element={<BookParcelPage />} />
                        <Route path="myBookigs" element={<MyBookingPage />} />
                        <Route path="myProfile" element={<MyProfilePage />} />

                        <Route path="updateBooking/:id" element={<UpdateBookedParcelPage />} />
                        <Route path="allParcel" element={<AllParcelsPage />} />
                        <Route path="allUsers" element={<AllUsersPage />} />
                        <Route path="allDeliveryMen" element={<AllDeliveryMenPage />} />
                        <Route path="myDelivery" element={<DeliveryListPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
