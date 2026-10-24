import dns from "dns";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connect from "./src/db/db.js";
import authRouter from "./src/routes/User.routes.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);


connect();

const app =  express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
    origin : "http://localhost:5173",
    credentials: true,
}))


app.use("/api/auth",  authRouter)


app.get('/',(req, res) => {
    return res.json({ status : "Server is up and running"});
})


export default app;