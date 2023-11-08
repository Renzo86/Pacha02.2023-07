import express from "express";
import dotenv from "dotenv";
import router from './routes/auth.js';
import {connectDB} from './db/config.js';
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';
import sockets from './sockets/socket.js';


dotenv.config();

// Conexión a la base de datos de MongoDB
connectDB();

const app = express();
app.use(express.json());

// Config del socket.io
const server = http.createServer(app);
const io = new WebsocketServer(server);
sockets(io);

app.use('/api/login', router);

const port = process.env.port || 3000;

server.listen(port, () => {
    console.log('server is running on port:',port)
})