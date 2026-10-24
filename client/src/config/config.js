if (!import.meta.env.VITE_API_URL) {
    throw new Error("API url is not present")
}

const config = {
    VITE_API_URL: import.meta.env.VITE_API_URL
}


export default config;