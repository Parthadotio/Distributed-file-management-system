import http from "http";
import config from "./src/config/config.js";
import app from "./app.js";

const server =  http.createServer(app);

const PORT = config.PORT ?? 8000;

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    
});