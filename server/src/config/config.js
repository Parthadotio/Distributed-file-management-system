import dotenv from "dotenv";

dotenv.config();


if(!process.env.DATABASE_URL) {
    throw new Error("Database url is not available");
}

if(!process.env.JWT_SECRET) {
    throw new Error("JWT Secret is unavailable");
}

if(!process.env.DATABASE_URL) {
    throw new Error("Database url is unavailable");
}

if(!process.env.GOOGLE_CLIENT_ID) {
    throw new Error("Google client id is unavailable");
}

if(!process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("Google client secret is unavailable");
}

if(!process.env.GOOGLE_REFRESH_TOKEN) {
    throw new Error("Google refresh token is unavailable");
}

if(!process.env.GOOGLE_USER) {
    throw new Error("Google user is unavailable");
}

const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER: process.env.GOOGLE_USER,
}



export default config;