import db from '../database/index.js';

export class BoardModel {
    constructor() {}

    static async getBoardList({ search, category }) {
        const [ listQuery, countQuery ] = await Promise.all([
            db.query(`
                select * from board
                    where 1=1
                order by registDate desc
            `, [ search, category ]),
            db.query(`
                select count(*) as cnt from board
            `, [ search, category ])
        ]);

        const [ list ] = listQuery;
        const [ count ] = countQuery;

        return {
            list,
            count: count[0].cnt
        };
    }

    static async write({ writer, userIdx, subject, content, categoryIdx }) {
        const [ rows ] = await db.query(`
            insert into board set
                writer = ?,
                userIdx = ?,
                subject = ?,
                content = ?,
                registDate = now(),
                categoryIdx = ?
        `, [ writer, userIdx, subject, content, categoryIdx ]);

        return rows;
    }
}
