import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_ERROR } from "../actionTypes";
import { REQUEST_STATUS } from "../../../constants";
import { articlesReducer } from '../reducer';

describe( 'articlesReducer test', () => {
    it("returns state with status error after articlesReducer action", () => {
        const expected = {
            data: [],
            request: {
                status: REQUEST_STATUS.ERROR,
                error: null
            },
        };

        const received = articlesReducer(undefined, { type: REQUEST_ERROR, payload: null });
        expect(received).toEqual(expected);
    });
});