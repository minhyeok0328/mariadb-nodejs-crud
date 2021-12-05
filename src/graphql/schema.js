import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    type BoardList {
        idx: Int,
        writer: String,
        userIdx: Int,
        subject: String,
        content: String,
        registDate: String,
        updateDate: String
    }
    type Query {
        list: [BoardList],
        count: Int
    }
`);