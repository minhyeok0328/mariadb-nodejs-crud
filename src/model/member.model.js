import db from '../database/index.js';

export class MemberModel {
    constructor() {}

    static async getMemberInfo(id) {
        const [ rows ] = await db.query(`select * from member where id = ?`, [ id ]);

        return rows[0];
    }

    static async signup({ id, password, name, email }) {
        const [ rows ] = await db.query(`
            insert into member set
                id = ?,
                password = ?,
                name = ?,
                email = ?,
                registDate = now(),
                loginDate = now()
        `,[ id, password, name, email ]);

        return rows;
    }
}
