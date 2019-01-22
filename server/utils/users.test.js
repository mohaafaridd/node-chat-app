const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

    var users;

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

    it('should add new user', () => {
        var users = new Users();

        var user = {
            id: "123",
            name: "Farid",
            room: "O6U"
        }

        var res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('NodeJS');

        expect(userList).toEqual(['Mohammed', 'Khamis']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(['Farid']);
    })

    it('should remove a user', () => {
        var userID = '1';
        var user = users.removeUser(userID);

        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userID = '69';
        var user = users.removeUser(userID);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userID = '2';
        var user = users.getUser(userID);
        expect(user.id).toBe('2');
    });

    it('should not find a user', () => {
        var userID = '99';
        var user = users.getUser(userID);
        expect(user).toBeFalsy();
    });
})