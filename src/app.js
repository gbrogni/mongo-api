import express from 'express';
import connect from './config/dbconnect.js';
import routes from './routes/index.js';

const connection = await connect();

connection.on('erro', (error) => {
    console.log('Failed to connect to database', error);
})

connection.once('open', () => {
    console.log('Connected to database');
})

const app = express();
routes(app);

export default app;
