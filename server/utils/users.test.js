/**
 * Created by Xavok on 5/8/2017.
 */
"use strict";
const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users;
        users.users = [
            {
                id: 1,
                name: 'Max',
                room: 'Node'
            },
            {
                id: 2,
                name: 'John',
                room: 'React'
            },
            {
                id: 3,
                name: 'Aiza',
                room: 'Node'
            }
        ];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Max',
            room: 'Node'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node');
        expect(userList).toEqual(['Max','Aiza']);
    });
    it('should return names for react course', () => {
        var userList = users.getUserList('React');
        expect(userList).toEqual(['John']);
    });

    it('should remove a user', () => {
        var user = users.removeUser(1);
        expect(users.users.length).toBe(2);
        expect(user.id).toBe(1);
    });
    it('should not remove user', () => {
        var user = users.removeUser(23);
        expect(users.users.length).toBe(3);
        expect(user).toNotExist();

    });

    it('should find user', () => {
        var user = users.getUser(3);
        expect(user).toEqual(users.users[2]);
        expect(user.id).toBe(3);
    });

    it('should not find user', () => {
        var user = users.getUser(23);
        expect(user).toNotExist();
    });
});