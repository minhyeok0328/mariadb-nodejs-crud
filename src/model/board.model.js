import db from '../database/index.js';

export class BoardModel {
    constructor() {}

    static async boardList({ search }) {
        let where = '';
        let params = [];

        if (search) {
            where = where + ` and subject like ? `;
            params.push(`%${search}%`);
        }

        const [ listQuery, countQuery ] = await Promise.all([
            db.query(`
                select * from board
                    where 1=1
                    ${where}
                order by registDate desc
            `, params),
            db.query(`
                select count(*) as cnt from board
                    where 1=1
                    ${where}
            `, params)
        ]);

        const [ list ] = listQuery;
        const [ count ] = countQuery;

        return {
            list,
            count: count[0].cnt
        };
    }

    static async boardView({ idx }) {
        const [ rows ] = await db.query(`
            select * from board
                where idx = ?
            `, [ idx ]);

        return rows[0];
    }

    static async boardWrite({ writer, userIdx, subject, content }) {
        const [ rows ] = await db.query(`
            insert into board set
                writer = ?,
                userIdx = ?,
                subject = ?,
                content = ?,
                registDate = now()
        `, [ writer, userIdx, subject, content ]);

        return rows;
    }

    static async boardUpdate({ subject, content, idx }) {
        const [ rows ] = await db.query(`
            update board set
                subject = ?,
                content = ?,
                updateDate = now()
            where idx = ?
        `, [ subject, content, idx ]);

        return rows;
    }

    static async boardDelete({ idx }) {
        const [ rows ] = await db.query(`
            delete from board
                where idx = ?
            `, [ idx ]);

        return rows;
    }
}
