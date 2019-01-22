const expect = require('expect')
const { isRealString, isDuplicated } = require('./validation');
const { Users } = require('./users');


beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: 'Mohammed',
        room: 'NodeJS'
    }, {
        id: '2',
        name: 'Farid',
        room: 'React'
    }, {
        id: '3',
        name: 'Khamis',
        room: 'NodeJS'
    }]
})


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


describe('Duplicated users', () => {
    it('should accept user', () => {
        var name = 'Abdullah';
        var isDuplicate = isDuplicated(name, users);

        expect(isDuplicate).toBeFalsy();
    });

    it('should reject user', () => {
        var name = 'farid';
        var isDuplicate = isDuplicated(name, users);

        expect(isDuplicate).toBeTruthy();
    })
})