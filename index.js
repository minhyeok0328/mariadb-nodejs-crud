import express from 'express';
import cors from 'cors';
import ApiV1Router from './src/router/apiV1Router/index.js';
import cookieParser from 'cookie-parser';
import { authCheck } from './src/middleware/authCheck.js';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const rootValue = {
    hello() {
        return 'Hello World!!';
    }
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(authCheck);
app.use('/api/v1', ApiV1Router);
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(8080, () => {
    console.log(`server running! / node -v: ${process.version}`);
});