import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: process.env.NODE_ENV == 'production' ? process.env.JAWSDB_MARIA_URL : 'db',
    user: process.env.NODE_ENV == 'production' ? process.env.JAWSDB_MARIA_USER : 'root',
    password: process.env.NODE_ENV == 'production' ? process.env.JAWSDB_MARIA_PASSWORD : '1234',
    database: process.env.NODE_ENV == 'production' ? process.env.JAWSDB_MARIA_DATABASE : 'crud'
});

export default connection;
