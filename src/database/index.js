import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: '1234',
    database: 'crud'
});

export default connection;
