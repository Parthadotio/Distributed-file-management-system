const ACCESS_TOKEN_KEY = "accessToken";

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function isAccessTokenValid(token) {
    if (!token) {
        return false;
    }

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));

        if (!payload.exp) {
            return false;
        }

        return payload.exp * 1000 > Date.now();
    } catch {
        return false;
    }
}