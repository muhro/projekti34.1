"use strict";
const users = [
    {
        id: "1",
        name: "test",
        email: "l@m.fi",
        password: "test123"
    }
];


const getUser = (id) => {
    const user = users.filter((usr) => {
        if (usr.id === id) {
            return usr;
        }
    });
    return user[0];
};

const getUserLogin = (email) => {
    const user = users.filter((usr) => {
        if (usr.email === email) {
            return usr;
        }
    });
    return user[0];
};

module.exports = {
    users,
    getUser,
    getUserLogin,
};
