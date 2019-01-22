const expect = require('expect')
const {isRealString} = require('./validation');

describe('is real string', () => {
    it('should reject non-string values', () => {
        var test = 1;
        expect(isRealString(test)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var test = '                       ';
        expect(isRealString(test)).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var test = 'test';
        expect(isRealString(test)).toBe(true);
    });
})