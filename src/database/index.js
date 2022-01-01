import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: process.env.NODE_ENV == 'production' ? process.env.HOST : 'db',
    user: process.env.NODE_ENV == 'production' ? process.env.USERNAME : 'root',
    password: process.env.NODE_ENV == 'production' ? process.env.PASSWORD : '1234',
    database: process.env.NODE_ENV == 'production' ? process.env.DATABASE : 'crud'
});

export default connection;
