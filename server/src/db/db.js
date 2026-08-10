import config from "../config/config.js";
import mongoose from "mongoose";

function connect() {
    mongoose.connect(config.MONGO_URI).then(() => {
        console.log("Database is connected");
    }).catch((err) => {
        console.log(err);
        
    })
};


export default connect;