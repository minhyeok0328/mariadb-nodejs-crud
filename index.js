import express from 'express';
import cors from 'cors';
import ApiV1Router from './src/router/apiV1Router/index.js';
import cookieParser from 'cookie-parser';
// import { authCheck } from './src/middleware/authCheck.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser);
// app.use('/', authCheck);
app.use('/api/v1', ApiV1Router);

app.listen(8080, () => {
    console.log('server running on http://localhost:8080');
});