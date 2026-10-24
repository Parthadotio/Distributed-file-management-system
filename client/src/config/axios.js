import axios from "axios";
import config from "./config";
import {
    getAccessToken,
    setAccessToken,
    clearAccessToken,
} from "./storeToken";

const baseURL = config.VITE_API_URL;

const apiClient = axios.create({
    baseURL,
    withCredentials: true,
});

const refreshTokenClient = axios.create({
    baseURL,
    withCredentials: true,
});

// Attach access token to every normal API request
apiClient.interceptors.request.use(
    (request) => {
        const token = getAccessToken();

        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    },
    (error) => Promise.reject(error)
);

// Refresh ONLY when backend says access token is invalid
apiClient.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            originalRequest &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const { data } = await refreshTokenClient.get(
                    "/api/auth/refresh-token"
                );

                setAccessToken(data.token);

                originalRequest.headers.Authorization =
                    `Bearer ${data.token}`;

                return apiClient(originalRequest);
            } catch (refreshError) {
                clearAccessToken();

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
export { refreshTokenClient };