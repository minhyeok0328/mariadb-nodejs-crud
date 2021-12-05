import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import { rootValue } from './value.js';

export default graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
});