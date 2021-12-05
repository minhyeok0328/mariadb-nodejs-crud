import { BoardController } from "../controller/board.controller.js";
const { boardList } = BoardController;

export const rootValue = {
    list: async () => {
        // const response = await boardList();
        // console.log('response', response);
        return [
            {
                "idx": 1,
                "writer": "테스트",
                "userIdx": 1,
                "subject": "this is subject",
                "content": "this is content",
                "registDate": "2021-10-23T01:22:37.000Z",
                "updateDate": null
            }
        ]
    }
}