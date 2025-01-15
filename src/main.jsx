import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import MainRoutes from './routes/MainRoutes';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <MainRoutes />
        </ThemeProvider>
    </StrictMode>
);
