import express from 'express';
import cors from 'cors';
import ApiV1Router from './src/router/apiV1Router/index.js';
import cookieParser from 'cookie-parser';
import { authCheck } from './src/middleware/authCheck.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(authCheck);
app.use('/api/v1', ApiV1Router);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running! / node -v: ${process.version}`);
});