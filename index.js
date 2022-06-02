import express from 'express';
import cors from 'cors';
import ApiV1Router from './src/router/apiV1Router/index.js';
import cookieParser from 'cookie-parser';
import { authCheck } from './src/middleware/authCheck.js';
import { swaggerUi, specs } from './swagger/index.js';

const app = express();
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(authCheck);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/v1', ApiV1Router);
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server running! / node -v: ${process.version}`);
});