/**
 * Created by Xavok on 5/8/2017.
 */
class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {id,name,room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        if(user) {
            this.users = this.users.filter((user) =>  user.id !== id);
        }
        return user;
    }

    getUser(id) {
        return this.users.filter((user) =>  user.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter((user) =>  user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

class Person {
    constructor(name,room) {
        this.name = name;
        this.room = room;
    }

    getUserDescription() {
        return `${this.name} is ${this.room} year(s) old`;
    }
}

var me = new Person('Max', 21);
console.log(me.getUserDescription());

module.exports = {Users};