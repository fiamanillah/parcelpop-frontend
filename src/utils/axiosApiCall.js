import axios from 'axios';

const axiosApiCall = axios.create({
    baseURL: 'http://localhost:1200',
});

// Request interceptor to add the access token in headers
axiosApiCall.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token expiry and refresh
axiosApiCall.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        // If the error is due to token expiration
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            // Get refresh token from localStorage
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                // If no refresh token, logout the user
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.reload();
                return Promise.reject(error);
            }

            try {
                // Attempt to refresh the access token
                const response = await axiosApiCall.post('/auth/refresh-token', { refreshToken });
                const newAccessToken = response.data.accessToken;

                // Save the new access token in localStorage
                localStorage.setItem('accessToken', newAccessToken);

                // Retry the original request with the new access token
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosApiCall(originalRequest);
            } catch (refreshError) {
                // If refresh token is expired or invalid, logout the user
                localStorage.clear();
                window.location.reload();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosApiCall;
