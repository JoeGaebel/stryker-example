import {areBothTrue} from "./areBothTrue";

describe("areBothTrue", () => {
    it('works', () => {
        expect(areBothTrue(true, false)).toEqual(false);
        expect(areBothTrue(false, false)).toEqual(false);
    });
});