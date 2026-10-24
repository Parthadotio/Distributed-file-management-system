import apiClient, { refreshTokenClient } from "../config/axios";
import {
    clearAccessToken,
    setAccessToken,
} from "../config/storeToken";

export async function loginUser(payload) {
    const { data } = await apiClient.post(
        "/api/auth/login",
        payload
    );

    setAccessToken(data.token);

    return data;
}

export async function registerUser(payload) {
    const { data } = await apiClient.post(
        "/api/auth/register",
        payload
    );

    return data;
}

export async function verifyEmail(payload) {
    const { data } = await apiClient.post(
        "/api/auth/verify-email",
        payload
    );

    return data;
}

export async function refreshAccessToken() {
    const { data } = await refreshTokenClient.get(
        "/api/auth/refresh-token"
    );

    setAccessToken(data.token);

    return data.token;
}

export async function logoutUser() {
    try {
        await apiClient.get("/api/auth/logout");
    } finally {
        clearAccessToken();
    }
}