import mongoose from "mongoose";
import {config} from 'dotenv';
config();

export const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async() => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Db is online. ');

    } catch (error) {
        console.log(error);
    }
}