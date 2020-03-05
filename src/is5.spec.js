import {isFive} from './is5';

describe('isFive', () => {
    it('works', () => {
        expect(isFive(3)).toEqual(false);
        expect(isFive(6)).toEqual(false);
        expect(isFive(5)).toEqual(true)
    });
});