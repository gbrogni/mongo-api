import mongoose from 'mongoose';

async function connect() {
    try {
        mongoose.connect(process.env.DB_CONNECTION_STRING);
        return mongoose.connection;
    } catch (error) {
        console.log('Failed to connect to database', error);
    }
}

export default connect;